import "https://deno.land/x/xhr@0.3.1/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import OpenAI from "https://esm.sh/openai@4.10.0";
import { parseHoroscopes } from './parse.ts'
import { insertHoroscopes } from './supabase.ts'

const openai = new OpenAI({
  apiKey: Deno.env.get("OPENAI_APIKEY"),
});

serve(async () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const createdAt = date.toLocaleDateString();

  const response = await openai.chat.completions.create({
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
  const { choices: [{ message }] } = response;
  const { content } = message;
  const horoscopeArray = parseHoroscopes(content);
  const saveHoroscope = await insertHoroscopes(horoscopeArray);

  return new Response(
    JSON.stringify(saveHoroscope),
    { headers: { "Content-Type": "application/json" } },
  )
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/createHoroscopes' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
