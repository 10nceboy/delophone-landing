import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

const pages = [
  'price',
  'numbers',
  'order',
  'scope/sales',
  'scope/remote',
  'scope/office, scope/phonereplace'
];

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
      partialDirectory: [
        resolve(__dirname, 'src/html/components'),
        resolve(__dirname, 'src/html/sections')
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        price: resolve(__dirname, 'pages/price.html'),
        numbers: resolve(__dirname, 'pages/numbers.html'),
        order: resolve(__dirname, 'pages/order.html'),
        sales: resolve(__dirname, 'pages/scope/sales.html'),
        remote: resolve(__dirname, 'pages/scope/remote.html'),
        office: resolve(__dirname, 'pages/scope/office.html'),
        phone: resolve(__dirname, 'pages/scope/phone-replace.html'),
        away: resolve(__dirname, 'pages/scope/away.html'),
        automatic: resolve(__dirname, 'pages/business/automatic.html'),
        voice: resolve(__dirname, 'pages/business/voice-menu.html'),
        voice: resolve(__dirname, 'pages/business/control.html')
      }
    }
  }
});
