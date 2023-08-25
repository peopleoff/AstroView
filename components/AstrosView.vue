<script setup lang="ts">
defineProps({
  sign: {
    type: String,
    required: true,
  },
});

const selectedQuestion = ref("");

function onSelectedQuestion(question: string) {
  selectedQuestion.value = question;
  console.log(question);
}
</script>

<template>
  <div class="text-center">
    <div class="mb-8">
      <h3 class="text-4xl text-white font-bold">Astro's View</h3>
      <p class="text-xl text-gray-400 mt-4">
        Unlock Wisdom & Guidance with Astro, An Astrology Master
      </p>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <!-- Chat -->
      <div class="col-span-3 md:col-span-2">
        <Chat :sign="sign" :selectedQuestion="selectedQuestion" />
      </div>
      <!-- questions -->
      <div class="bg-slate-800 py-8 px-4 rounded-xl hidden md:block col-span-1">
        <div class="text-left text-white">
          <h4 class="text-xl font-bold">Select a Question</h4>
          <p class="text-md">A list of questions for extra guideance</p>
        </div>
        <Questions @selectedQuestion="onSelectedQuestion" />
      </div>
    </div>
  </div>
</template>
