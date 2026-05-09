<script setup lang="ts">
import { Mail, Phone, Linkedin, MapPin } from 'lucide-vue-next'
import { profile } from '@/data/profile'
</script>

<template>
  <section
    id="contact"
    class="scroll-mt-20 py-20 md:py-28 bg-gray-50 dark:bg-gray-900/40"
  >
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
        Contact
      </p>
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
        Let's Work Together
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10">
        Open to new opportunities, collaborations, and interesting projects.
        Feel free to reach out.
      </p>

      <div class="flex flex-col sm:flex-row gap-3 justify-center mb-12">
        <a
          :href="`mailto:${profile.email}`"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium text-sm transition-colors"
        >
          <Mail class="w-4 h-4" />
          {{ profile.email }}
        </a>
        <a
          :href="`https://${profile.linkedin}`"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-600 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-sm transition-colors"
        >
          <Linkedin class="w-4 h-4" />
          LinkedIn
        </a>
      </div>

      <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-400 dark:text-gray-500">
        <div class="flex items-center gap-1.5">
          <Phone class="w-4 h-4" />
          <span>{{ profile.phone }}</span>
        </div>
        <div class="flex items-center gap-1.5">
          <MapPin class="w-4 h-4" />
          <span>{{ profile.location }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
