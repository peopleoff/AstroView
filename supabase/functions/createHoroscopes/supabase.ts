import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const client = createClient(
    Deno.env.get("URL"),
    Deno.env.get("KEY")
);

export async function insertHoroscopes(horoscopes: any) {
    try {
        const result = await client.from("Horoscopes").insert(horoscopes);
        return result;
    } catch (error) {
        throw new Error(String(error) || undefined);
    }
}