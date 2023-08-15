import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event);

  const { data } = await client
    .from("Horoscopes")
    .select("*")
    .order("created_at", { ascending: false })
    .order("id", { ascending: true });

  return { horoscopes: data };
});
