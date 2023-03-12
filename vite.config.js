import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.scss']
  },
  plugins: [
    handlebars({
      partialDirectory: [resolve(__dirname, 'src/html/components'), resolve(__dirname, 'src/html/sections')]
    })
  ],
  build: {
    rollupOptions: {
      input:
        [resolve(__dirname, 'index.html'),
        resolve(__dirname, 'price/price.html'),
        resolve(__dirname, 'numbers/numbers.html'),
        resolve(__dirname, 'order/order.html')]


    }
  }
});