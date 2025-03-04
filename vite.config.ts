import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
   base: "/udemy-section/",
  resolve: {
    extensions: ['.js', '.jsx'], // Remove TypeScript extensions
  },
})
