<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/outline";
import { XMarkIcon } from "@heroicons/vue/20/solid";

const show = ref(false);

const email = ref("");
async function signUp() {
  const { data } = await useFetch("/api/newsletterSignup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      email: email.value,
    },
  });
  if (data) {
    show.value = true;
  }
  email.value = "";
  setTimeout(() => {
    show.value = false;
  }, 2500);
}
</script>

<template>
  <div class="py-16 mt-10">
    <div
      class="mx-auto grid max-w-7xl grid grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8"
    >
      <div
        class="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7"
      >
        <h2 class="inline sm:block lg:inline xl:block">
          Want to know the vibe?
        </h2>
        <br />
        <p class="inline sm:block lg:inline xl:block">
          Sign up for a daily horoscope.
        </p>
      </div>
      <form
        @submit.prevent="signUp()"
        class="w-full max-w-md lg:col-span-5 lg:pt-2"
      >
        <div class="flex gap-x-4">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            v-model="email"
            class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Subscribe
          </button>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-300">
          Never spam, only good vibes.
        </p>
      </form>
    </div>
  </div>
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-10"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="show"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-700 shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon
                  class="h-6 w-6 text-green-400"
                  aria-hidden="true"
                />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-white">Signed up!</p>
                <p class="mt-1 text-sm text-gray-200">
                  Thank you for signing up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
