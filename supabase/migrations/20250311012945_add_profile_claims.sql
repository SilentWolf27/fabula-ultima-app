-- Create a function to get profile claims
CREATE OR REPLACE FUNCTION public.get_profile_claims(user_id uuid)
RETURNS jsonb
LANGUAGE sql
STABLE
SET search_path = public
AS $$
    SELECT jsonb_build_object(
        'role', role,
        'display_name', display_name,
        'avatar_url', avatar_url,
        'language', language,
        'profile_id', id
    )
    FROM public.profile_data
    WHERE user_id = user_id;
$$;

-- Create the auth hook function
CREATE OR REPLACE FUNCTION public.custom_access_token_hook(event jsonb)
RETURNS jsonb
LANGUAGE plpgsql
STABLE
AS $$
DECLARE
    claims jsonb;
    profile jsonb;
BEGIN
    -- Fetch the profile data from profile_data table
    SELECT jsonb_build_object(
        'role', role,
        'display_name', display_name,
        'avatar_url', avatar_url,
        'language', language,
        'profile_id', id
    )
    INTO profile
    FROM public.profile_data
    WHERE user_id = (event->>'user_id')::uuid;

    claims := event->'claims';

    IF profile IS NOT NULL THEN
        -- Set the claim
        claims := jsonb_set(claims, '{profile}', profile);
    ELSE
        claims := jsonb_set(claims, '{profile}', 'null'::jsonb);
    END IF;

    -- Update the 'claims' object in the original event
    event := jsonb_set(event, '{claims}', claims);

    -- Return the modified or original event
    return event;
END;
$$;

-- Set up proper permissions following Supabase Auth Hooks best practices
GRANT USAGE ON SCHEMA public TO supabase_auth_admin;

GRANT EXECUTE ON FUNCTION public.get_profile_claims TO supabase_auth_admin;

GRANT EXECUTE ON FUNCTION public.custom_access_token_hook TO supabase_auth_admin;

REVOKE EXECUTE ON FUNCTION public.custom_access_token_hook FROM authenticated, anon, public;

GRANT ALL ON TABLE public.profile_data TO supabase_auth_admin;

REVOKE ALL ON TABLE public.profile_data FROM authenticated, anon, public;

CREATE POLICY "Allow auth admin to read profile data" ON public.profile_data
    AS permissive FOR SELECT TO supabase_auth_admin
    USING (true);
