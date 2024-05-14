import OpenAI from "openai";
import type { Horoscope } from "@/types/Horoscope";
const openai = new OpenAI();
export default defineEventHandler(async (event) => {
  const { messages, sign, date } = await readBody(event);
  const data: Horoscope = await event.$fetch(
    `/api/getHoroscopes?sign=${sign}&date=${date}`
  );

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
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages,
    });

    return chatCompletion.choices[0].message;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Something went wrong",
    });
  }
});
