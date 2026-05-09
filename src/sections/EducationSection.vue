<script setup lang="ts">
import { GraduationCap, MapPin, Calendar } from 'lucide-vue-next'
import SectionHeader from '@/components/SectionHeader.vue'
import { profile } from '@/data/profile'
import { formatDateRange } from '@/utils/format'
</script>

<template>
  <section id="education" class="scroll-mt-20 py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader label="Education" title="Academic Background" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="edu in profile.education"
          :key="edu.id"
          class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-colors"
        >
          <div class="flex items-start gap-4">
            <div
              class="shrink-0 w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center"
            >
              <GraduationCap class="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>

            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-1 leading-snug">
                {{ edu.degree }}
              </h3>
              <p class="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-3">
                {{ edu.institution }}
              </p>
              <div class="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                <div class="flex items-center gap-1">
                  <MapPin class="w-3.5 h-3.5" />
                  {{ edu.location }}
                </div>
                <div class="flex items-center gap-1">
                  <Calendar class="w-3.5 h-3.5" />
                  {{ formatDateRange(edu.startDate, edu.endDate) }}
                </div>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ edu.note }}
              </p>
              <span
                v-if="!edu.endDate"
                class="inline-block mt-3 text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full font-medium"
              >
                Currently enrolled
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
