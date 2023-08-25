<script lang="ts" setup>
const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
  sign: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex gap-4 rounded-xl p-4"
    :class="[
      props.message.role === 'assistant' ? 'bg-violet-100' : 'bg-stone-50',
      props.message.role === 'assistant' ? '' : 'justify-between',
    ]"
  >
    <img
      :src="`/images/${sign}-icon.svg`"
      class="w-12 h-12 rounded-full"
      :class="[
        props.message.role === 'assistant' ? 'order-first' : 'order-last',
      ]"
      alt=""
    />
    <div class="flex flex-col text-left">
      <p class="text-sm font-medium text-black">
        {{ props.message.role === "assistant" ? "Astro:" : "" }}
      </p>
      <p
        class="text-sm text-black whitespace-pre break-words"
        style="text-wrap: balance"
      >
        {{ props.message.content }}
      </p>
    </div>
  </div>
  <PlaceholderMessage v-if="props.message.role === 'placeholder'" />
</template>
