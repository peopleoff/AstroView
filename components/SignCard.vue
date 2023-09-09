<script setup lang="ts">
const props = defineProps({
  sign: {
    type: Object,
    default: {},
  },
});

function toggleCard() {
  isExpanded.value = !isExpanded.value;
}

const isExpanded = ref(false);
</script>

<template>
  <NuxtLink :to="'/' + sign.sign">
    <article
      class="relative isolate flex flex-col justify-center items-center overflow-hidden rounded-2xl h-72 p-8 shadow-xl cursor-pointer z-10 bg-stars"
      :class="{ 'full-screen': isExpanded }"
    >
      <img
        :src="`/images/big_${sign.sign}.svg`"
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
    </article>
  </NuxtLink>
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
