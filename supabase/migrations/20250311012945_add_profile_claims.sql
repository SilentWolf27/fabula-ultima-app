-- Create a function to get profile claims
CREATE OR REPLACE FUNCTION public.get_profile_claims(user_id uuid)
RETURNS jsonb
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT jsonb_build_object(
        'role', role,
        'display_name', display_name,
        'avatar_url', avatar_url,
        'language', language,
        'profile_id', id
    )
    FROM profile_data
    WHERE user_id = user_id;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION public.get_profile_claims TO authenticated;

-- Add comment to function
COMMENT ON FUNCTION public.get_profile_claims IS 'Gets profile data for custom JWT claims';

-- Enable custom claims by adding the function name to auth.jwt_claim
CREATE OR REPLACE FUNCTION auth.jwt_claim(claim text)
RETURNS jsonb
LANGUAGE sql
STABLE
AS $$
  SELECT
    CASE WHEN claim = 'profile'
    THEN public.get_profile_claims(auth.uid())
    ELSE NULL
    END;
$$;
