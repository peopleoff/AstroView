<script lang="ts" setup>
const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="relative flex items-center space-x-3 rounded-lg bg-blue-700 px-6 py-5 shadow-sm"
    v-if="props.message.role != 'system' && props.message.role != 'placeholder'"
  >
    <div class="min-w-0 flex-1">
      <a href="#" class="focus:outline-none">
        <p class="text-sm font-medium text-white">
          {{ props.message.role === "assistant" ? "AstroAnswers" : "Me" }}
        </p>
        <p class="text-sm text-white">{{ props.message.content }}</p>
      </a>
    </div>
  </div>
  <PlaceholderMessage v-if="props.message.role === 'placeholder'" />
</template>
