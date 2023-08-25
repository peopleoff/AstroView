import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
  const query = getQuery(event);
  const client = await serverSupabaseClient(event);
  // Get today's date in the format "MM/DD"
  const todayDate = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  const { data } = await client
    .from("Horoscopes")
    .select("*")
    .ilike("sign", `%${query.sign}%`)
    .filter("created_at", "eq", todayDate)
    .order("created_at", { ascending: false })
    .order("id", { ascending: true });

  return data;
});
