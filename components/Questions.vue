<script setup lang="ts">
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/vue/24/outline";
const { data: questions, refresh: refreshQuestions } = await useFetch(
  "/api/getRandomQuestions"
);
const emits = defineEmits(["selectedQuestion"]);

function selectedQuestion(question: string) {
  emits("selectedQuestion", question);
  refreshQuestions();
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <ul role="list" class="divide-y divide-gray-800 text-left">
      <li
        v-for="question in questions"
        :key="question"
        class="flex gap-x-6 my-6 py-5 bg-white rounded-xl p-4 cursor-pointer hover:bg-gray-50"
        @click="selectedQuestion(question.question)"
      >
        <ChatBubbleOvalLeftEllipsisIcon
          class="h-12 w-12 flex-none rounded-full"
        />
        <p class="text-sm font-semibold leading-6">
          {{ question.question }}
        </p>
      </li>
    </ul>
  </div>
</template>
