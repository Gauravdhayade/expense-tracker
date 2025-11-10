import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/expense-tracker/',   // 👈 हा तुझ्या GitHub repo नावाशी जुळायला हवा
})
