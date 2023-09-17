<script setup lang="ts">
import Horoscope from "@/types/Horoscope";
const signs = useSign();
const route = useRoute();
const sign = route.params.sign;
const passedDate = route.query.date;
const date = passedDate || new Date().toLocaleDateString("en-US");
const { data, error } = await useFetch<Horoscope>(
  `/api/getHoroscopes?sign=${sign}&date=${date}`
);

if (error.value) {
  throw createError({
    statusCode: 404,
    message: error.value.toString(),
  });
}

if (!data.value) {
  throw createError({
    statusCode: 404,
    message: "Sign not found",
  });
}

const formattedSign = splitSign(data.value?.sign || "");
useHead({
  title: formattedSign.sign,
  link: [
    {
      rel: 'canonical',
      href: `https://astroview.io/${sign}`,
    }
  ],
  meta: [
    {
      name: "description",
      content: formatDescription(data.value?.horoscope || ""),
    },
    {
      property: "og:description",
      content: formatDescription(data.value?.horoscope || ""),
    },
    {
      property: "og:url",
      content: `/${sign}`,
    },
    {
      property: "og:title",
      content: formattedSign.sign,
    },
    {
      property: "og:image",
      content: `https://astroview.io/images/bg_${sign}.png`,
    },
    {
      property: "og:image:alt",
      content: `Image of ${sign}`,
    },
    { property: "og:type", content: "website" },
  ],
});
</script>

<template>
  <main class="max-w-7xl">
    <div class="flex flex-col justify-between">
      <div class="grid grid-cols-1 md:grid-cols-2 p-8 lg:p-16 rounded-lg bg-stars">
        <div class="items-center justify-center hidden md:flex">
          <img :src="'images/big_' + sign + '.svg'" alt="" />
        </div>
        <div>
          <div class="mx-auto max-w-2xl">
            <h1 class="text-xl font-bold tracking-tight text-white sm:text-4xl italic">
              {{ data.sign.split(" ")[0] }}
            </h1>
          </div>
          <div>
            <h2 class="text-2xl text-white font-bold">Today's Horoscope</h2>
            <p class="text-md mt-4 text-white">
              {{ data.horoscope }}
            </p>
          </div>
        </div>
      </div>
      <!-- sign select -->
      <div class="flex flex-col lg:flex-row items-center justify-center gap-4 py-8">
        <span class="text-white text-lg font-bold">Change Sign:</span>
        <div class="flex gap-4 flex-wrap justify-evenly xs:justify-normal">
          <NuxtLink v-for="sign in signs" :to="sign.sign" class="flex flex-col gap-2 items-center">
            <img class="shadow-sm bg-purple-500 w-16 h-16 rounded-full sign" :to="'/' + sign.sign"
              :src="'images/' + sign.sign.toLowerCase() + '-icon.svg'" />
            <div class="text-white">{{ sign.sign }}</div>
          </NuxtLink>
        </div>
      </div>
      <!-- Chat -->
      <AstrosView :sign="sign.toString()" />
    </div>
  </main>
</template>
