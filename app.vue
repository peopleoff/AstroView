<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "flex flex-col",
  },
  htmlAttrs: {
    class: "",
  },
});
</script>

<template>
  <div class="bg-transparent">
    <Header />
    <div class="mx-auto max-w-7xl px-6 lg:px-8 h-full py-20">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
html {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}
.bg-stars {
  background-image: url("/images/stars.svg");
  background-position: center;
  background-size: cover;
}
</style>
