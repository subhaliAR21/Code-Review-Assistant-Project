import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This is the crucial proxy setup for full-stack development
    proxy: {
      // Any request to /api will be forwarded to the Express server on port 5000
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false, // Set to true if your backend uses HTTPS
      },
    },
  },
})