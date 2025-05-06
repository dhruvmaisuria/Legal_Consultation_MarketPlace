import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@fullcalendar/core', '@fullcalendar/daygrid', '@fullcalendar/timegrid']
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `
          @import "~@fullcalendar/core/main.css";
          @import "~@fullcalendar/daygrid/main.css";
          @import "~@fullcalendar/timegrid/main.css";
        `
      }
    }
  }
})

