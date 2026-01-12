import { getSupabase } from "./supabase.js";

export default async function handler(req, res) {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("webs_dev")
    .select("*")
    .order("id", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json(data);
}
