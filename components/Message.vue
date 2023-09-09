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

function renderHtml(content: string){
  return `<p>${content}</p>`
}
</script>

<template>
  <div
    class="flex flex-row md:flex-row gap-4 rounded-xl p-4"
    :class="[
      props.message.role === 'assistant' ? 'bg-violet-100' : 'bg-stone-50',
      props.message.role === 'assistant' ? '' : 'justify-between',
    ]"
  >
    <Logo class="h-12 w-12" v-if="props.message.role === 'assistant'" />
    <img
      v-else
      :src="`/images/${sign}-icon.svg`"
      class="p-[2px] w-12 h-12 shadow-sm bg-purple-500 rounded-full order-last"
    />
    <div class="flex flex-col text-left shrink-[1000] justify-center">
      <p
        class="text-sm font-medium text-black"
        v-if="props.message.role === 'assistant'"
      >
        Astro
      </p>
      <p
        class="text-sm text-black break-words"
        style="white-space: pre-line"
      >
        {{ props.message.content }}
      </p>
    </div>
  </div>
  <PlaceholderMessage v-if="props.message.role === 'placeholder'" />
</template>
