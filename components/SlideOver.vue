<script setup lang="ts">
const props = defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
  sign: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div
    class="slide-container bg-slate-800 text-white flex flex-col p-8 justify-between gap-8"
    :class="{ hidden: !props.isExpanded }"
  >
    <div class="text-center">
      <h1 class="text-4xl font-bold">{{ sign?.sign }}</h1>
      <h2 class="text-2xl font-bold">
        {{ sign?.startDate }} - {{ sign?.endDate }}
      </h2>
    </div>
    <div class="flex-grow">
      <h3 class="text-2xl font-bold">Today</h3>
      <span class="mt-4">
        {{ props.sign?.horoscope?.horoscope }}
      </span>
    </div>
    <div>
      <label
        for="name"
        class="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900"
        >Name</label
      >
      <div class="mt-2">
        <input
          type="text"
          name="name"
          id="name"
          class="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Jane Smith"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-container {
  position: absolute;
  bottom: 0;
  height: 90%;
  border-radius: 10px;
  width: 100%;
  z-index: 100;
}
</style>
