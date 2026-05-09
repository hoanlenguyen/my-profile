<script setup lang="ts">
import { MapPin, GraduationCap, Code2 } from 'lucide-vue-next'
import SectionHeader from '@/components/SectionHeader.vue'
import { profile } from '@/data/profile'
</script>

<template>
  <section
    id="about"
    class="scroll-mt-20 py-20 md:py-28 bg-gray-50 dark:bg-gray-900/40"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeader label="About" title="Who I Am" />
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {{ profile.summary }}
          </p>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="lang in profile.languages"
              :key="lang.name"
              class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2"
            >
              <span class="font-medium text-gray-900 dark:text-gray-200">{{ lang.name }}</span>
              <span class="text-gray-400 dark:text-gray-500">{{ lang.level }}</span>
            </div>
            <div
              class="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2"
            >
              <MapPin class="w-4 h-4 text-indigo-500" />
              {{ profile.location }}
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div
            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6"
          >
            <div class="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">6+</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
          </div>

          <div
            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6"
          >
            <div class="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">3</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Companies</div>
          </div>

          <div
            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 col-span-2"
          >
            <div class="flex items-center gap-2 mb-2">
              <GraduationCap class="w-4 h-4 text-indigo-500" />
              <span class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Currently Studying</span>
            </div>
            <div class="font-semibold text-gray-900 dark:text-white text-sm">MSc Software Engineering</div>
            <div class="text-indigo-600 dark:text-indigo-400 text-sm font-medium">University of Oulu, Finland · 2025–Present</div>
          </div>

          <div
            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 col-span-2"
          >
            <div class="flex items-center gap-2 mb-2">
              <Code2 class="w-4 h-4 text-indigo-500" />
              <span class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Core Stack</span>
            </div>
            <div class="font-mono text-sm text-gray-700 dark:text-gray-300">
              .NET 8 &nbsp;·&nbsp; Vue 3 &nbsp;·&nbsp; TypeScript &nbsp;·&nbsp; Azure
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
