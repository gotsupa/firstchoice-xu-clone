import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      $pages: path.resolve(__dirname, './src/pages'),
      $containers: path.resolve(__dirname, './src/containers'),
      $constants: path.resolve(__dirname, './src/constants'),
    },
  },
})
