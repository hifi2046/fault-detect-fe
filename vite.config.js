import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ['localhost', 'hz1.hifiax.com'],
    host: true,
    port: 8000,
    open: false,
    cors: true,
    strictPort: false,
  }
})
