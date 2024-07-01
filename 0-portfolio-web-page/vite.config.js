import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      // Enabling SVGR for SVG files with ?react query
      include: '**/*.svg?react'
    }),
  ],
});