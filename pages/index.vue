<script setup lang="ts">
const signs = useSign();
</script>

<template>
  <div class="bg-transparent">
    <div class="overflow-hidden pb-24">
      <div class="mx-auto max-w-2xl text-center">
        <div class="mx-auto lg:mx-0 lg:pt-8">
          <h1
            class="mt-10 text-4xl font-bold sm:text-6xl inline bg-gradient-to-r from-teal-200 via-purple-500 to-teal-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
            Unlock Your Cosmic Path</h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">Experience the magic of astrology like never before. Astro
            brings the wisdom of the stars to your fingertips. Whether you seek daily guidance or have
            burning questions about your future, Astro is here to provide answers with accuracy and
            compassion.</p>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl italic" id="signs">
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
</template>
