import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves project sites from /<repo>/, so assets need that prefix.
  // Override with BASE_PATH=/ when deploying to a custom domain or a root host.
  base: process.env.BASE_PATH ?? '/northline-commercial/',
  plugins: [react(), tailwindcss()],
})
