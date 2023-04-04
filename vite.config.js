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
        main: 'index.html',
        ...pages.reduce((acc, page) =>
          Object.assign(acc, {
            [page]: resolve(__dirname, `/pages/${page}.html`)
          })
        )
      }
    }
  }
});
