// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss"],
  supabase: {
    redirect: false,
  },
  generate: {
    routes: [
      "/Aries",
      "/Taurus",
      "/Gemini",
      "/Cancer",
      "/Leo",
      "/Virgo",
      "/Libra",
      "/Scorpio",
      "/Sagittarius",
      "/Capricorn",
      "/Aquarius",
      "/Pisces",
    ],
  },
});
