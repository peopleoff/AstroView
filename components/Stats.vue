<script setup lang="ts">
const stats = [
  {
    id: 1,
    name: "Love",
    stat: "Gemini",
  },
  {
    id: 2,
    name: "Sex",
    stat: "Leo",
  },
  {
    id: 3,
    name: "Money",
    stat: "Pisces",
  },
];
</script>
<template>
  <div class="flex flex-col gap-4">
    <div v-for="item in stats" class="flex gap-4 rounded-xl p-4 bg-slate-200">
      <img
        :src="`/images/${item.stat}-icon.svg`"
        class="p-[2px] w-12 h-12 shadow-sm bg-purple-500 rounded-full"
      />
      <div class="flex flex-col text-left shrink-[1000] justify-center">
        <p class="text-sm font-medium text-black flex">
          {{ item.name }}
        </p>
        <p class="text-sm text-black break-words" style="text-wrap: balance">
          {{ item.stat }}
        </p>
      </div>
    </div>
  </div>
</template>
