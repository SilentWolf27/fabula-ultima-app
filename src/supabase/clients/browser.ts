import {
  createClient as createBrowserClient,
  SupabaseClient,
} from "@supabase/supabase-js";

export const createClient = (): SupabaseClient => {
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY)
    throw new Error("Could not find Supabase URL or Supabase Anon Key");

  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
};
