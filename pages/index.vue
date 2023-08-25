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
</script>

<template>
  <div class="bg-transparent py-16">
    <div class="">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="text-3xl font-bold tracking-tight text-white sm:text-4xl italic"
        >
          Select your zodiac sign to uncover
          <br />
          today's celestial insights
        </h2>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 md:grid-cols-2 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 relative"
      >
        <SignCard v-for="sign in signs" :key="sign.sign" :sign="sign" />
      </div>
    </div>
    <Newsletter />
  </div>
</template>
