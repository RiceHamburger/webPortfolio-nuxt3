import { supabase } from "./supabase.js";

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from("galleries")
    .select("*")
    .order("id", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json(data);
}
