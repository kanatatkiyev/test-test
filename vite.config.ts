import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';
import * as path from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react(), nodePolyfills()],
});
