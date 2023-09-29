<script setup lang="ts">
const date = new Date();
const day = date.getDate();
const year = date.getFullYear();
const month = date.getMonth();
const signs = useSign();


const matchAlgorithm = computed(() => {
  const loveMatchIndex = Math.floor(day % signs.value.length);
  const sexMatchIndex = Math.floor((year + day) % signs.value.length);
  const moneyMatchIndex = Math.floor((month + day) % signs.value.length);
  return {
    Love: signs.value[loveMatchIndex],
    Sex: signs.value[sexMatchIndex],
    Money: signs.value[moneyMatchIndex],
  };
})

</script>
<template>
  <div class="flex flex-col gap-4">
    <div v-for="(match, matchID) in matchAlgorithm" class="flex gap-4 rounded-xl p-4 bg-slate-200">
      <img :src="`/images/${match.sign}-icon.svg`" class="p-[2px] w-12 h-12 shadow-sm bg-purple-500 rounded-full" />
      <div class="flex flex-col text-left shrink-[1000] justify-center">
        <p class="text-sm font-medium text-black flex">
          {{ matchID }}
        </p>
        <p class="text-sm text-black break-words" style="text-wrap: balance">
          {{ match.sign }}
        </p>
      </div>
    </div>
  </div>
</template>
