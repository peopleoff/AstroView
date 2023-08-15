<script setup lang="ts">
const { data } = await useFetch("/api/getHoroscopes");
</script>

<template>
  <div v-for="horoscope in data?.horoscopes">
    <h1>{{ horoscope.sign }}</h1>
    <p>
      {{ horoscope.horoscope }}
    </p>
  </div>
</template>
