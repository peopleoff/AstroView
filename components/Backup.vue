<script setup lang="ts">
interface Message {
  role: string;
  content: string;
}
const { data: questions, refresh: refreshQuestions } = await useFetch(
  "/api/getRandomQuestions"
);
const messages: Ref<Message[]> = ref([]);
const chatbox = ref();
const userQuestion = ref("");
const awaitingResponse = ref(false);
const defaultMessage = {
  role: "assistant",
  content: "How can I assist you today?",
};
async function askQuestion(question?: string) {
  if (!question && !userQuestion.value) return;
  if (awaitingResponse.value) return;
  const newMessage = {
    role: "user",
    content: question || userQuestion.value,
  };

  //Push the users question into the stack of messages
  messages.value.push(newMessage);
  //Clear the question
  userQuestion.value = "";
  awaitingResponse.value = true;
  const { data } = await useFetch("/api/askQuestion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      sign: route.params.sign,
      messages: messages.value,
    },
  });
  const returnedMessages = data.value as Message;
  //Get new questions to ask
  refreshQuestions();
  //Push the resposne from the AI into the stack of messages
  messages.value.push(returnedMessages);
  awaitingResponse.value = false;
  chatbox.value.scrollTop = chatbox.value.scrollHeight;
}
</script>

<template>
  <div class="flex flex-col justify-between grow">
    <div v-auto-animate ref="chatbox" class="grid grid-cols-1 gap-4 mt-4">
      <Message :message="defaultMessage" />
      <Message v-for="message in messages" :message="message" />
      <PlaceholderMessage v-if="awaitingResponse" />
    </div>
  </div>
  <div class="relative mt-2 rounded-md shadow-sm">
    <form @submit.prevent="askQuestion()">
      <div class="flex gap-2 py-2 flex-wrap">
        <button
          type="button"
          :disabled="awaitingResponse"
          class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
          v-for="question in questions"
          @click="askQuestion(`${question.question}`)"
        >
          {{ question.question }}
        </button>
      </div>
      <div class="relative">
        <input
          type="text"
          name="account-number"
          id="account-number"
          placeholder="Ask me anything"
          :disabled="awaitingResponse"
          v-model="userQuestion"
          class="block w-full rounded-md border-0 px-6 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          type="submit"
          class="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <PaperAirplaneIcon
            class="h-6 w-6 md:h-8 md:w-8 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
    </form>
  </div>
</template>
