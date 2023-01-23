import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/delophone-landing/',
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.scss']
  }
});
