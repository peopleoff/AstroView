// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss", 'nuxt-gtag'],
  supabase: {
    redirect: false,
  },
  gtag: {
    id: 'G-9CSPZ17VG5'
  }
});
