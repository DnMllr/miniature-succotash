import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solidPlugin(), vanillaExtractPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
