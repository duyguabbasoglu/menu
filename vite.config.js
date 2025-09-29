import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      ignored: ['**/.DS_Store', '**/.git/**', '**/.Spotlight-V100/**', '**/.fseventsd/**', '**/*.tmp']
    }
  }
})