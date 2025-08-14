import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// IMPORTANT: Replace 'my-portfolio-vue' with your GitHub repo name
export default defineConfig({
  plugins: [vue()],
  base: '/my-portfolio-vue/'
})
