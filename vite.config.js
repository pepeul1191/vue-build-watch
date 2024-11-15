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
      input: {
        web: fileURLToPath(new URL('./src/entries/web.js', import.meta.url)), // Cambia la ruta de entrada
        error: fileURLToPath(new URL('./src/entries/error.js', import.meta.url)), // Cambia la ruta de entrada
        access: fileURLToPath(new URL('./src/entries/access.js', import.meta.url)) // Cambia la ruta de entrada
      },
      output: {
        manualChunks: null, // Esto evita la división del código en múltiples archivos
        entryFileNames: 'dist/[name].js', // Nombre fijo para el archivo de entrada (JS)
        chunkFileNames: 'dist/[name].js', // Nombre fijo para los archivos de chunks
        //assetFileNames: 'dist/[name][extname]',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'dist/[name].css';  // Ejemplo: dist/style.123abc.css
          }
          return 'dist/[name].[extname]';
        },
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
