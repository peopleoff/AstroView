<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "flex flex-col",
  },
  htmlAttrs: {
    class: "bg-gradient-to-b from-slate-800 to-slate-900",
    lang: "en"
  },
  meta: [
    { name: 'theme-color', content: '#a855f7' },
    {
      name: "description",
      content: "Experience the magic of astrology like never before. Astro brings the wisdom of the stars to your fingertips. Whether you seek daily guidance or have burning questions about your future, Astro is here to provide answers with accuracy and compassion.",
    },
    {
      property: "og:description",
      content: "Experience the magic of astrology like never before. Astro brings the wisdom of the stars to your fingertips. Whether you seek daily guidance or have burning questions about your future, Astro is here to provide answers with accuracy and compassion.",
    },
    {
      property: "og:url",
      content: `/`,
    },
    {
      property: "og:title",
      content: `AstroView - Astrology for the Modern Age`,
    },
    {
      property: "og:image",
      content: `https://astroview.io/images/background.jpg`,
    },
    {
      property: "og:image:alt",
      content: `Image of AstroView`,
    },
    { property: "og:type", content: "website" },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - AstroView` : "AstroView";
  },
});
</script>

<template>
  <div class="bg-transparent">
    <Header />
    <div class="mx-auto max-w-7xl px-6 lg:px-8 h-full pt-36">
      <NuxtPage />
    </div>
    <Newsletter />
  </div>
</template>

<style>
.bg-stars {
  background-image: url("/images/stars.svg");
  background-position: center;
  background-size: cover;
}
</style>
