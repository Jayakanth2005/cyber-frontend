import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // ← ADD THIS LINE
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
})