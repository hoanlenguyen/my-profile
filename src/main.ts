import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// Default to dark mode if no preference is stored
if (!localStorage.getItem('vueuse-color-scheme')) {
  localStorage.setItem('vueuse-color-scheme', 'dark')
  document.documentElement.classList.add('dark')
}

createApp(App).mount('#app')
