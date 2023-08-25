import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  // Get 3 random numbers between 1 and 100 to find random questions
  let randomNumbers = [];
  for (let i = 0; i < 3; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
  }
  const { data } = await client
    .from("questions")
    .select("*")
    .in("id", randomNumbers);
  return data;
});
