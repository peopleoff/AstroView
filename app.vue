<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "flex flex-col",
  },
  htmlAttrs: {
    class: "bg-gradient-to-b from-slate-800 to-slate-900",
    lang: "en"
  },
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
