<script setup lang="ts">
import { PaperAirplaneIcon } from "@heroicons/vue/20/solid";
import { QuestionMarkCircleIcon } from "@heroicons/vue/20/solid";
import { vAutoAnimate } from "@formkit/auto-animate";
import gptMessage from '@/types/gptMessage'
const route = useRoute();
const props = defineProps({
  sign: {
    type: String,
    required: true,
  },
});
const messages: Ref<gptMessage[]> = ref([]);
const chatbox = ref();
const userQuestion = ref("");
const awaitingResponse = ref(false);
const showQuestions = ref(true);
const defaultMessage = {
  role: "assistant",
  content: "How can I assist you today?",
};
const passedDate = route.query.date;
const date = passedDate || new Date().toLocaleDateString("en-US");

async function askQuestion(question?: string) {
  showQuestions.value = false;
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
  console.log({
      sign: props.sign,
      messages: messages.value,
      date: date
    })
  const { data, error } = await useFetch("/api/askQuestion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      sign: props.sign,
      messages: messages.value,
      date: date
    },
  });
  if(error.value){
    throw createError({
      message: error.value.message,
      statusCode: error.value.statusCode
    })
  }
  const returnedMessages = data.value as gptMessage;
  //Get new questions to ask
  //Push the resposne from the AI into the stack of messages
  messages.value.push(returnedMessages);
  awaitingResponse.value = false;
  chatbox.value.scrollTop = chatbox.value.scrollHeight;
}
</script>

<template>
  <div class="rounded-xl">
    <div class="text-left text-white p-4 bg-slate-800 rounded-t-md">
      <div class="text-left text-white">
        <h4 class="text-xl font-bold">Ask me a Question</h4>
        <p class="text-md" data-v-inspector="components/AstrosView.vue:36:11">
          A list of questions for extra guideance
        </p>
      </div>
    </div>
    <div v-auto-animate ref="chatbox" class="flex flex-col gap-2 bg-stars p-4">
      <Message :message="defaultMessage" :sign="sign" />
      <Message v-for="message in messages" :message="message" :sign="sign" />
      <Questions v-if="showQuestions" @onSelectedQuestion="askQuestion" />
      <PlaceholderMessage v-if="awaitingResponse" />
    </div>
    <div class="relative p-4 rounded-b-md shadow-sm bg-slate-800">
      <form @submit.prevent="askQuestion()">
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

          <button
            type="button"
            class="absolute inset-y-0 right-10 flex items-center pr-3"
            v-if="!showQuestions"
          >
            <QuestionMarkCircleIcon
              class="h-6 w-6 md:h-8 md:w-8 text-gray-400"
              @click="showQuestions = true"
              aria-hidden="true"
            />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
