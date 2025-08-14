import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/my-portfolio-vue/', // For GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
