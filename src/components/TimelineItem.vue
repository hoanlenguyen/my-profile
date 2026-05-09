<script setup lang="ts">
defineProps<{ isLast?: boolean }>()
</script>

<template>
  <div class="relative flex gap-6">
    <div class="flex flex-col items-center shrink-0">
      <div
        class="w-3 h-3 rounded-full bg-indigo-500 mt-1.5 ring-4 ring-gray-50 dark:ring-gray-950 shrink-0"
      />
      <div v-if="!isLast" class="flex-1 w-px bg-gray-200 dark:bg-gray-800 mt-1" />
    </div>
    <div class="flex-1 pb-10">
      <slot />
    </div>
  </div>
</template>
