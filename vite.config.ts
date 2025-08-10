import { defineConfig } from 'vite';
import path from 'path';

// Vite configuration for a TypeScript project. The resolve.alias entries
// mirror those defined in tsconfig.json to provide convenient import paths.
export default defineConfig({
  resolve: {
    alias: {
      '@domain': path.resolve(__dirname, 'src/domain'),
      '@state': path.resolve(__dirname, 'src/state'),
      '@ui': path.resolve(__dirname, 'src/canvas/ui'),
      '@export': path.resolve(__dirname, 'src/export'),
      '@persistence': path.resolve(__dirname, 'src/persistence'),
      '@seeds': path.resolve(__dirname, 'src/seeds')
    }
  },
  server: {
    port: 5173,
    open: true
  }
});
