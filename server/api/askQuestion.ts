import { Configuration, OpenAIApi } from "openai";
import Horoscope from "@/types/Horoscope";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_APIKEY,
});
const openai = new OpenAIApi(configuration);
export default defineEventHandler(async (event) => {
  const { messages, sign, date } = await readBody(event);
  const data: Horoscope = await event.$fetch(`/api/getHoroscopes?sign=${sign}&date=${date}`);

  const prompt = [
    {
      role: "system",
      content:
        "Pretend you are an psychic who is answering questions based on my horoscope",
    },
    {
      role: "system",
      content: `I am a ${sign} and this was my horoscope today ${data.horoscope}`,
    },
  ];
  //Add the prompt to the beginning of the messages array
  messages.unshift(...prompt);
  try {
    const chatCompletion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    return chatCompletion.data.choices[0].message;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Something went wrong',
    });
  }

});
