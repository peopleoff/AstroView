<script setup lang="ts">
const signs = useSign();
</script>

<template>
  <div class="bg-transparent py-16">
    <div class="">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl italic">
          Select your zodiac sign to uncover
          <br />
          today's celestial insights
        </h2>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 md:grid-cols-2 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 relative">
        <SignCard v-for="sign in signs" :key="sign.sign" :sign="sign" />
      </div>
    </div>
  </div>
</template>
