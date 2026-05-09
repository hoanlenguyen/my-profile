<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import Badge from '@/components/Badge.vue'
import { profile } from '@/data/profile'

type BadgeVariant = 'blue' | 'violet' | 'purple' | 'cyan' | 'sky' | 'emerald' | 'amber' | 'slate'

const groupColors: Record<string, BadgeVariant> = {
  Languages:    'blue',
  Frameworks:   'violet',
  'APIs & Auth': 'purple',
  Databases:    'cyan',
  'Cloud & Infra': 'sky',
  Testing:      'emerald',
  'AI Tools':   'amber',
  DevOps:       'slate',
}
</script>

<template>
  <section
    id="skills"
    class="scroll-mt-20 py-20 md:py-28 bg-gray-50 dark:bg-gray-900/40"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader label="Skills" title="Technical Expertise" />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div
          v-for="group in profile.skillGroups"
          :key="group.label"
          class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5"
        >
          <h3 class="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
            {{ group.label }}
          </h3>
          <div class="flex flex-wrap gap-1.5">
            <Badge
              v-for="skill in group.skills"
              :key="skill"
              :variant="groupColors[group.label] ?? 'indigo'"
            >
              {{ skill }}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
