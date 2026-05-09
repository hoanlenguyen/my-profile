<script setup lang="ts">
type Variant = 'indigo' | 'blue' | 'violet' | 'purple' | 'cyan' | 'sky' | 'emerald' | 'amber' | 'slate'

const props = defineProps<{ variant?: Variant }>()

const classes: Record<Variant, string> = {
  indigo:  'bg-indigo-100  text-indigo-700  ring-indigo-500/20  dark:bg-indigo-500/10  dark:text-indigo-400  dark:ring-indigo-500/20',
  blue:    'bg-blue-100    text-blue-700    ring-blue-500/20    dark:bg-blue-500/10    dark:text-blue-400    dark:ring-blue-500/20',
  violet:  'bg-violet-100  text-violet-700  ring-violet-500/20  dark:bg-violet-500/10  dark:text-violet-400  dark:ring-violet-500/20',
  purple:  'bg-purple-100  text-purple-700  ring-purple-500/20  dark:bg-purple-500/10  dark:text-purple-400  dark:ring-purple-500/20',
  cyan:    'bg-cyan-100    text-cyan-700    ring-cyan-500/20    dark:bg-cyan-500/10    dark:text-cyan-400    dark:ring-cyan-500/20',
  sky:     'bg-sky-100     text-sky-700     ring-sky-500/20     dark:bg-sky-500/10     dark:text-sky-400     dark:ring-sky-500/20',
  emerald: 'bg-emerald-100 text-emerald-700 ring-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20',
  amber:   'bg-amber-100   text-amber-700   ring-amber-500/20   dark:bg-amber-500/10   dark:text-amber-400   dark:ring-amber-500/20',
  slate:   'bg-slate-100   text-slate-700   ring-slate-500/20   dark:bg-slate-500/10   dark:text-slate-400   dark:ring-slate-500/20',
}
</script>

<template>
  <span
    class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
    :class="classes[props.variant ?? 'indigo']"
  >
    <slot />
  </span>
</template>
