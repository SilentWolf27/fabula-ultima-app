-- Create story status enum
create type story_status as enum (
  'draft',        -- Initial state when creating
  'active',       -- Ready to play but not started
  'in_progress',  -- Currently being played
  'on_hold',      -- Temporarily paused
  'cancelled',    -- Permanently stopped before completion
  'completed',    -- Successfully finished
  'archived'      -- Kept for reference but no longer active
);

-- Create character creation method enum
create type character_creation_method as enum (
  'default_points',  -- Default point buy system
  'roll'            -- Roll based character creation
);

-- Create authorization function
create or replace function public.is_master()
returns boolean as $$
begin
  return coalesce(
    auth.jwt() ->> 'role' = 'master',
    false
  );
end;
$$ language plpgsql stable security definer set search_path = public;

-- Create campaigns table
create table campaigns (
  id bigint generated always as identity primary key,
  master_id uuid references auth.users(id) not null,
  name text not null,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  status story_status not null default 'draft',
  cover_url text,
  map_url text,
  is_public boolean default true not null,
  settings jsonb not null default jsonb_build_object(
    'initial_level', 3,
    'max_level', 100,
    'max_players', 10,
    'xp_initial', 0,
    'character_creation', 'default_points',
    'initial_zenit', 500,
    'initial_fabula_points', 2
  ) check (
    jsonb_typeof(settings->'initial_level') = 'number' and
    jsonb_typeof(settings->'max_level') = 'number' and
    jsonb_typeof(settings->'max_players') = 'number' and
    jsonb_typeof(settings->'xp_initial') = 'number' and
    jsonb_typeof(settings->'character_creation') = 'string' and
    settings->>'character_creation' in ('default_points', 'roll') and
    jsonb_typeof(settings->'initial_zenit') = 'number' and
    jsonb_typeof(settings->'initial_fabula_points') = 'number'
  )
);

-- Enable RLS
alter table campaigns enable row level security;

-- Create policies
-- Select policy: Masters see their own campaigns, players see all public ones
create policy "View campaigns policy"
  on campaigns for select
  using (
    case
      when public.is_master() then auth.uid() = master_id
      else is_public = true
    end
  );

-- Insert policy: Only masters can create campaigns and must be the owner
create policy "Insert campaigns policy"
  on campaigns for insert
  with check (
    public.is_master() and
    auth.uid() = master_id
  );

-- Update policy: Only the owner master can update their campaigns
create policy "Update campaigns policy"
  on campaigns for update
  using (
    public.is_master() and
    auth.uid() = master_id
  );

-- Delete policy: Only the owner master can delete their campaigns
create policy "Delete campaigns policy"
  on campaigns for delete
  using (
    public.is_master() and
    auth.uid() = master_id
  );

-- Create indexes
create index campaigns_master_id_idx on campaigns(master_id);
create index campaigns_status_idx on campaigns(status);
create index campaigns_is_public_idx on campaigns(is_public) where is_public = true;
