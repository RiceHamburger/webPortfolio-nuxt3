import { getSupabase } from "./supabase.js";

export default defineEventHandler(async (event) => {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("webs_dev")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }

  return data;
});
