<script setup lang="ts">
defineProps<{
  label: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="mb-12">
    <p class="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
      {{ label }}
    </p>
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
      {{ subtitle }}
    </p>
  </div>
</template>
