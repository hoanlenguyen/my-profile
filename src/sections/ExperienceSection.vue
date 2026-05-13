<script setup lang="ts">
import { Building2, MapPin, Calendar, ArrowUpRight } from 'lucide-vue-next'
import SectionHeader from '@/components/SectionHeader.vue'
import TimelineItem from '@/components/TimelineItem.vue'
import Badge from '@/components/Badge.vue'
import { profile } from '@/data/profile'
import { formatDateRange, formatDuration } from '@/utils/format'
</script>

<template>
  <section id="experience" class="scroll-mt-20 py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader label="Experience" title="Work History" />

      <div>
        <TimelineItem
          v-for="(exp, index) in profile.experience"
          :key="exp.id"
          :is-last="index === profile.experience.length - 1"
        >
          <div
            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-colors"
          >
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <h3 class="text-base font-semibold text-gray-900 dark:text-white">
                {{ exp.role }}
              </h3>
              <div class="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 shrink-0 font-mono">
                <Calendar class="w-3.5 h-3.5" />
                <span>{{ formatDateRange(exp.startDate, exp.endDate) }}</span>
                <span>·</span>
                <span>{{ formatDuration(exp.startDate, exp.endDate) }}</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-3">
              <a
                v-if="exp.companyUrl"
                :href="exp.companyUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
              >
                <Building2 class="w-4 h-4" />
                {{ exp.company }}
                <ArrowUpRight class="w-3.5 h-3.5" />
              </a>
              <div v-else class="flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                <Building2 class="w-4 h-4" />
                {{ exp.company }}
              </div>
              <div class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <MapPin class="w-3.5 h-3.5" />
                {{ exp.location }}
                <span
                  v-if="exp.remote"
                  class="ml-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded-full"
                >
                  Remote
                </span>
              </div>
            </div>

            <p v-if="exp.products" class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0.5">
              {{ exp.products }}
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 italic mb-4">
              {{ exp.domain }}
            </p>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <Badge v-for="tech in exp.technologies" :key="tech" variant="indigo">
                {{ tech }}
              </Badge>
            </div>

            <ul class="space-y-2">
              <li
                v-for="achievement in exp.achievements"
                :key="achievement"
                class="flex gap-2.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                <span class="text-indigo-500 mt-0.5 shrink-0 font-mono text-xs leading-5">▸</span>
                <span>{{ achievement }}</span>
              </li>
            </ul>
          </div>
        </TimelineItem>
      </div>
    </div>
  </section>
</template>
