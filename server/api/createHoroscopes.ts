import { Configuration, OpenAIApi } from "openai";
import { serverSupabaseClient } from "#supabase/server";
export default defineEventHandler(async (event) => {
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
        content: "What are all the horoscopes for today?",
      },
    ],
  });
  const result = chatCompletion.data.choices[0].message?.content;
  const client = await serverSupabaseClient(event);

  const aiHoroscopes = result?.split("\n\n").map((sign) => {
    const [title, content] = sign.split(":\n");
    return { sign: title, horoscope: content };
  });
  const { data } = await client.from("Horoscopes").insert(aiHoroscopes);
  return result;
});

// import { serverSupabaseClient } from '#supabase/server'

// export default eventHandler(async (event) => {
//   const client = await serverSupabaseClient(event)

//   const { data } = await client.from('Horoscopes').select('*');

//   return { libraries: data }
// })
