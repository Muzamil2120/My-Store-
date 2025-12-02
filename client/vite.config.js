// client/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    copyPublicDir: true,
    rollupOptions: {
      input: './index.html'
    }
  },
  // Important for SPA routing
  base: './'
})