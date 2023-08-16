<script setup lang="ts">
const props = defineProps({
  sign: {
    type: Object,
    default: {},
  },
});

function toggleCard(e) {
  console.log(e.target);
  const { target } = e;
  target.classList.toggle("full-screen");
}
</script>

<template>
  <article
    @click="toggleCard"
    class="relative isolate flex flex-col justify-center items-center overflow-hidden rounded-2xl h-72 p-8 shadow-xl cursor-pointer z-10"
  >
    <img
      :src="`/images/${sign.imageUrl}`"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover pointer-events-none"
    />
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 pointer-events-none"
    />
    <div
      class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10 pointer-events-none"
    />
    <div class="flex flex-col items-center justify-center">
      <h3 class="text-2xl font-semibold leading-6 text-white">
        {{ sign.sign }}
      </h3>
      <span class="text-md font-semibold leading-6 text-white">
        {{ sign.startDate }} - {{ sign.endDate }}
      </span>
    </div>
    <div class="flex gap-1 absolute bottom-12">
      <span
        class="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
        >What Areas of Transformation Await Me?</span
      >
    </div>
  </article>
</template>

<style scoped>
.full-screen {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  z-index: 100;
}
</style>
