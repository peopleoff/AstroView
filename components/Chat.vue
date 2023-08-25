<script setup lang="ts">
import { PaperAirplaneIcon } from "@heroicons/vue/20/solid";
interface Message {
  role: string;
  content: string;
}
const props = defineProps({
  sign: {
    type: String,
    required: true,
  },
  selectedQuestion: {
    type: String,
    default: "",
  },
});
const messages: Ref<Message[]> = ref([]);
const chatbox = ref();
const userQuestion = ref("");
const awaitingResponse = ref(false);
const defaultMessage = {
  role: "assistant",
  content: "How can I assist you today?",
};

async function askQuestion(question?: string) {
  console.log(question);
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
      sign: props.sign,
      messages: messages.value,
    },
  });
  const returnedMessages = data.value as Message;
  //Get new questions to ask
  //Push the resposne from the AI into the stack of messages
  messages.value.push(returnedMessages);
  awaitingResponse.value = false;
  chatbox.value.scrollTop = chatbox.value.scrollHeight;
}

watch(
  () => props.selectedQuestion,
  (question) => {
    if (question) {
      askQuestion(question);
    }
  }
);
</script>

<template>
  <div class="rounded-xl">
    <div class="text-left text-white p-4 bg-slate-800 rounded-t-md"></div>
    <div ref="chatbox" class="flex flex-col gap-2 bg-stars p-4">
      <Message :message="defaultMessage" :sign="sign" />
      <Message v-for="message in messages" :message="message" :sign="sign" />
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
        </div>
      </form>
    </div>
  </div>
</template>
