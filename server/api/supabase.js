import { createClient } from "@supabase/supabase-js";

export function getSupabase() {
  const config = useRuntimeConfig();
  const url = config.supabaseUrl;
  const key = config.rsupabaseAnonKey;

  if (!url) throw new Error("Missing env: SUPABASE_URL");
  if (!key) throw new Error("Missing env: SUPABASE_ANON_KEY");

  return createClient(url, key);
}
