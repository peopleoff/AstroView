import { Configuration, OpenAIApi } from "openai";
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const { date } = getQuery(event);
  const createdAt = date || new Date().toLocaleDateString();
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_APIKEY,
  });
  const openai = new OpenAIApi(configuration);
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Pretend you are an astrologer who is writing a blog horoscope, today you have to write about each sign for the daily horoscope",
      },
      {
        role: "user",
        content: `What are all the horoscopes for today in JSON format with 3 keys, sign, horoscope, and created_at with this date ${createdAt}. Only provide the JSON output in a horoscopes array"`,
      },
    ],
  });
  const result = chatCompletion.data.choices[0].message?.content;
  if (!result) {
    return "No result";
  }
  const startIndex = result.indexOf("{"); // Find the first '{' character
  const lastIndex = result.lastIndexOf("}"); // Find the last '}' character
  const jsonString = result.slice(startIndex, lastIndex + 1); // Extract the JSON portion
  const jsonResult = JSON.parse(jsonString);
  const client = await serverSupabaseClient(event);

  const { data, error } = await client.from("Horoscopes").insert(jsonResult.horoscopes);
  if (error) {
    throw createError({
      statusCode: 500,
      message: error.message,
    })
  }
  console.log(error);
  return jsonResult;
});

// import { serverSupabaseClient } from '#supabase/server'

// export default eventHandler(async (event) => {
//   const client = await serverSupabaseClient(event)

//   const { data } = await client.from('Horoscopes').select('*');

//   return { libraries: data }
// })
