<script setup lang="ts">
import { PaperAirplaneIcon } from "@heroicons/vue/20/solid";

interface Message {
  role: string;
  content: string;
}

const { data } = await useFetch("/api/getHoroscopes");
const messages: Ref<Message[]> = ref([
  { role: "user", content: "What should I eat today?" },
  {
    role: "assistant",
    content:
      "As a Cancer, it is important for you to nourish your body and create a sense of comfort through your meals. Today, opt for foods that make you feel grounded and satisfied. Consider having a home-cooked meal that is rich in nutrients and familiar flavors. Comfort foods like soups, stews, or dishes made with root vegetables can be particularly satisfying for you. Don't be afraid to indulge in some homemade desserts or a warm cup of herbal tea to further enhance your sense of well-being. Trust your instincts when it comes to choosing what feels nourishing to both your body and soul.",
  },
  { role: "user", content: "What about if I was a scorpio?" },
  {
    role: "assistant",
    content:
      "If you were a Scorpio, your approach to food and nourishment would be different. Scorpios have a deep intensity and passion for everything they do, including their food choices. Today, focus on meals that awaken your senses and provide a sense of transformation. Consider incorporating spices and flavors that ignite your taste buds and bring excitement to your palate. Foods with deep, rich flavors and bold spices like Thai, Indian, or Mexican cuisine may be particularly appealing to you. Additionally, prioritize meals that promote detoxification and cleansing for your body, such as incorporating fresh herbs, leafy greens, and hydrating foods. Lastly, don't forget to indulge in some decadent treats or desserts that bring pleasure and satisfaction. Enjoy your meal exploration, and let your passion guide your choices.",
  },
  { role: "user", content: "Do you know the future?" },
  {
    role: "assistant",
    content:
      "As an astrologer, I can provide insights and predictions based on astrology and personal horoscopes. However, it is important to remember that the future is not set in stone and can be influenced by various factors, including personal choices and actions. Astrology offers guidance and potential outcomes based on celestial alignments, but it does not provide definitive knowledge of the future. It is always up to you to make decisions and create your own path in life.",
  },
]);
const question = ref("");
const defaultMessage = {
  role: "assistant",
  content: "How can I assist you today?",
};
async function askQuestion() {
  const newMessage = {
    role: "user",
    content: question.value,
  };
  //Push the users question into the stack of messages
  messages.value.push(newMessage);
  //Clear the question
  question.value = "";
  const { data, pending, error, refresh } = await useFetch("/api/askQuestion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      messages: messages.value,
    },
  });
  const returnedMessages = data.value as Message;
  //Push the resposne from the AI into the stack of messages
  messages.value.push(returnedMessages);
}
</script>

<template>
  <div class="flex flex-col justify-between h-[90vh]">
    <div class="max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h1
          class="text-3xl font-bold tracking-tight text-white sm:text-4xl italic"
        >
          {{ data[0].sign.split(" ")[0] }}
          <br />
          ({{ data[0].sign.split(" (")[1] }}
        </h1>
      </div>
      <p class="text-lg mt-4 text-white">
        {{ data[0].horoscope }}
      </p>
    </div>
    <main class=" max-w-7xl px-6 lg:px-8">
      <div class="">
        <!-- Chat Messages -->
        <div class="h-64 overflow-y-auto">
          <!-- Replace this with your chat messages -->
          <div class="flex flex-col space-y-2">
            <div class="bg-blue-100 py-2 px-4 rounded-lg self-start max-w-md">
              <p class="text-sm">Hello! How can I assist you today?</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>
            <div class="bg-gray-100 py-2 px-4 rounded-lg self-end max-w-md">
              <p class="text-sm">I have a question about onboarding.</p>
            </div>

            <!-- Add more chat messages here -->
          </div>
        </div>

        <!-- User Input -->
        <div class="mt-4 flex">
          <input
            type="text"
            placeholder="Type your message..."
            class="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none"
          />
          <button class="bg-blue-500 text-white px-4 rounded-r-lg">Send</button>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
html {
  background-image: url("/images/aries.svg");
  background-position: center;
  background-size: cover;
}
</style>
