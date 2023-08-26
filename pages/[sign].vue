<script setup lang="ts">
const signs = [
  {
    sign: "Aries",
    startDate: "3/21",
    endDate: "4/19",
    imageUrl: "aries.svg",
  },
  {
    sign: "Taurus",
    startDate: "4/20",
    endDate: "5/20",
    imageUrl: "taurus.svg",
  },
  {
    sign: "Gemini",
    startDate: "5/21",
    endDate: "6/20",
    imageUrl: "gemini.svg",
  },
  {
    sign: "Cancer",
    startDate: "6/21",
    endDate: "7/22",
    imageUrl: "cancer.svg",
  },
  {
    sign: "Leo",
    startDate: "7/23",
    endDate: "8/22",
    imageUrl: "leo.svg",
  },
  {
    sign: "Virgo",
    startDate: "8/23",
    endDate: "9/22",
    imageUrl: "virgo.svg",
  },
  {
    sign: "Libra",
    startDate: "9/23",
    endDate: "10/22",
    imageUrl: "libra.svg",
  },
  {
    sign: "Scorpio",
    startDate: "10/23",
    endDate: "11/21",
    imageUrl: "scorpio.svg",
  },
  {
    sign: "Sagittarius",
    startDate: "11/22",
    endDate: "12/21",
    imageUrl: "sagittarius.svg",
  },
  {
    sign: "Capricorn",
    startDate: "12/22",
    endDate: "1/19",
    imageUrl: "capricorn.svg",
  },
  {
    sign: "Aquarius",
    startDate: "1/20",
    endDate: "2/18",
    imageUrl: "aquarius.svg",
  },
  {
    sign: "Pisces",
    startDate: "2/19",
    endDate: "3/20",
    imageUrl: "pisces.svg",
  },
];

const route = useRoute();
const sign = route.params.sign;
const { data } = await useFetch(`/api/getHoroscopes?sign=${sign}`);
</script>

<template>
  <main class="max-w-7xl">
    <div class="flex flex-col justify-between">
      <div
        class="grid grid-cols-1 md:grid-cols-2 p-8 lg:p-16 rounded-lg bg-stars"
      >
        <div class="items-center justify-center hidden md:flex">
          <img :src="'images/big_' + sign + '.svg'" alt="" />
        </div>
        <div>
          <div class="mx-auto max-w-2xl">
            <h1
              class="text-xl font-bold tracking-tight text-white sm:text-4xl italic"
            >
              {{ data[0].sign.split(" ")[0] }}
            </h1>
            <p class="text-md tracking-tight text-white">
              ({{ data[0].sign.split(" (")[1] }}
            </p>
          </div>
          <div>
            <h2 class="text-2xl text-white font-bold">Today's Horoscope</h2>
            <p class="text-md mt-4 text-white">
              {{ data[0].horoscope }}
            </p>
          </div>
        </div>
      </div>
      <!-- sign select -->
      <div
        class="flex flex-col lg:flex-row items-center justify-center gap-4 py-8"
      >
        <span class="text-white text-lg font-bold">Change Sign:</span>
        <div class="flex gap-4 flex-wrap justify-evenly xs:justify-normal">
          <NuxtLink
            v-for="sign in signs"
            :to="sign.sign"
            class="flex flex-col gap-2 items-center"
          >
            <img
              class="shadow-sm bg-purple-500 w-16 h-16 rounded-full sign"
              :to="'/' + sign.sign"
              :src="'images/' + sign.sign.toLowerCase() + '-icon.svg'"
            />
            <div class="text-white">{{ sign.sign }}</div>
          </NuxtLink>
        </div>
      </div>
      <!-- Chat -->
      <AstrosView :sign="sign.toString()" />
    </div>
  </main>
</template>
