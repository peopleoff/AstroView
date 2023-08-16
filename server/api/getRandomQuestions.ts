import { Configuration, OpenAIApi } from "openai";
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
        content: "What is one question I should ask my physic for each horoscope sign and can you provide this in an array of objects in javascript",
      },
    ],
  });
  console.log(chatCompletion.data);
  return chatCompletion.data;
});
