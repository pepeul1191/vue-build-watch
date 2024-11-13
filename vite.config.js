import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'public',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        manualChunks: null, // Esto evita la división del código en múltiples archivos
        entryFileNames: 'dist/main.js', // Nombre fijo para el archivo de entrada (JS)
        chunkFileNames: 'dist/[name].js', // Nombre fijo para los archivos de chunks
        assetFileNames: 'dist/[name][extname]',
      }
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
