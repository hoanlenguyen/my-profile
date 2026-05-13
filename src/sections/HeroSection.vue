<script setup lang="ts">
import { Mail, ArrowUpRight, ChevronDown, Download } from 'lucide-vue-next'
import { profile } from '@/data/profile'

const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
  >
    <div class="absolute inset-0 dot-grid opacity-60 dark:opacity-100" aria-hidden="true" />

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/50 text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 mb-8"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
        Available for opportunities
      </div>

      <h1 class="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
        {{ profile.name }}
      </h1>

      <p class="text-xl sm:text-2xl font-medium text-indigo-600 dark:text-indigo-400 mb-6">
        {{ profile.title }}
      </p>

      <p class="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        6+ years building enterprise web apps with
        <span class="font-mono font-medium text-gray-900 dark:text-white">.NET</span>
        and
        <span class="font-mono font-medium text-gray-900 dark:text-white">Vue.js</span>.
        Currently pursuing an MSc at the University of Oulu, Finland.
      </p>

      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="#contact"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium text-sm transition-colors"
        >
          <Mail class="w-4 h-4" />
          Get in Touch
        </a>
        <a
          :href="`https://${profile.linkedin}`"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm"
        >
          View LinkedIn
          <ArrowUpRight class="w-4 h-4" />
        </a>
        <a
          :href="`${baseUrl}resume.pdf`"
          download="LeNguyenHanHoan_CV.pdf"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-medium text-sm transition-colors shadow-sm"
        >
          <Download class="w-4 h-4" />
          Download CV
        </a>
      </div>

      <div class="mt-8 flex flex-wrap justify-center gap-3 text-xs font-mono text-gray-400 dark:text-gray-600">
        <span>C# · TypeScript · Vue 3 · .NET 8 · Azure · SQL Server</span>
      </div>
    </div>

    <a
      href="#about"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors animate-bounce"
      aria-label="Scroll to About section"
    >
      <ChevronDown class="w-6 h-6" />
    </a>
  </section>
</template>
