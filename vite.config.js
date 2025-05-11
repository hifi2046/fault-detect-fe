import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    allowedHosts: ['localhost', 'hz1.hifiax.com'],
    host: true,
    port: 8000,
    open: false,
    cors: true,
    strictPort: false,
    proxy: {
      "/api": {
        target: "http://localhost:8080/api/v1",
        changeOrigin: true,
        rewrite:(path) => path.replace(/^\/api/, "")
      },
    }
  }
})
