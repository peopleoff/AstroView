import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
  const { sign, date } = getQuery(event);
  const client = await serverSupabaseClient(event);
  const { data, error } = await client
    .from("Horoscopes")
    .select("*")
    .ilike("sign", `%${sign}%`)
    .filter("created_at", "eq", date)
    .order("created_at", { ascending: false })
    .order("id", { ascending: true })
  if (error) {
    throw createError({
      statusCode: 500,
      message: error.message,
    })
  }
  if (data.length === 0) {
    throw createError({
      statusCode: 500,
      message: 'No data found',
    })
  }
  return data[0];
});
