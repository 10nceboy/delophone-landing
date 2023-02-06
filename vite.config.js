import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.scss']
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        nested: path.resolve(__dirname, 'pages/full.html')
      }
    }
  }
});
