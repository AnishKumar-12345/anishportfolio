import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', // This ensures relative paths
  build: {
    rollupOptions: {
      external: ['vue', 'vuetify', 'tsparticles'], // Add other dependencies if needed
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})