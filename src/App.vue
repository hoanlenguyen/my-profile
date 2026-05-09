<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/sections/HeroSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import ExperienceSection from '@/sections/ExperienceSection.vue'
import SkillsSection from '@/sections/SkillsSection.vue'
import EducationSection from '@/sections/EducationSection.vue'
import ContactSection from '@/sections/ContactSection.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
    <footer class="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-400 dark:text-gray-500">
      <p>© 2026 Le Nguyen Han Hoan · Built with Vue 3 + Tailwind CSS</p>
    </footer>
  </div>
</template>
