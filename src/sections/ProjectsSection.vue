<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import SectionHeader from '@/components/SectionHeader.vue'
import Badge from '@/components/Badge.vue'
import { profile } from '@/data/profile'
</script>

<template>
  <section id="projects" class="scroll-mt-20 py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader label="Projects" title="Personal Projects" />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="project in profile.projects"
          :key="project.id"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative flex flex-col bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-500/5 transition-all"
        >
          <!-- External link icon -->
          <div
            class="absolute top-4 right-4 w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 group-hover:border-indigo-400 group-hover:text-indigo-500 dark:group-hover:border-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
          >
            <ArrowUpRight class="w-4 h-4" />
          </div>

          <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-3 pr-10">
            {{ project.name }}
          </h3>

          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-1">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-1.5">
            <Badge
              v-for="tech in project.technologies"
              :key="tech"
              variant="indigo"
            >
              {{ tech }}
            </Badge>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
