import { Configuration, OpenAIApi } from "openai";
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const { messages, sign } = await readBody(event);
  const data = await event.$fetch(`/api/getHoroscopes?sign=${sign}`);
  const horoscope = data[0].horoscope;

  const prompt = [
    {
      role: "system",
      content:
        "Pretend you are an psychic who is answering questions based on my horoscope",
    },
    {
      role: "system",
      content: `I am a cancer and this was my horoscope today ${horoscope}`,
    },
  ];

  messages.unshift(...prompt);

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_APIKEY,
  });
  const openai = new OpenAIApi(configuration);
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
  });
  return chatCompletion.data.choices[0].message;
});
