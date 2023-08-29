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
        control: resolve(__dirname, 'pages/business/control.html'),
        num8800: resolve(__dirname, 'pages/business/num8800.html'),
        crm: resolve(__dirname, 'pages/business/crm.html'),
        pcprogramm: resolve(__dirname, 'pages/using-methods/pc-programm.html'),
        smartphone: resolve(__dirname, 'pages/using-methods/smartphone.html'),
        iptel: resolve(__dirname, 'pages/using-methods/ip-telephone.html'),
        ipdelofon: resolve(__dirname, 'pages/using-methods/ip-delofon.html'),
        sim: resolve(__dirname, 'pages/using-methods/sim-fmc.html'),
        forwarding: resolve(__dirname, 'pages/using-methods/forwarding.html'),
        transition: resolve(__dirname, 'pages/using-methods/transition.html'),
        detalization: resolve(__dirname, 'pages/seo/detalization.html'),
        record: resolve(__dirname, 'pages/seo/record.html'),
        blacklist: resolve(__dirname, 'pages/seo/blacklist.html'),
        ip: resolve(__dirname, 'pages/seo/ip.html'),
        sip: resolve(__dirname, 'pages/seo/sip.html'),
        multinumber: resolve(__dirname, 'pages/seo/multinumber.html'),
        additional: resolve(__dirname, 'pages/seo/additional.html'),
        ulk: resolve(__dirname, 'pages/seo/united-lk.html'),
        docs: resolve(__dirname, 'pages/services/docs.html'),
        contacts: resolve(__dirname, 'pages/services/contacts.html'),
        login: resolve(__dirname, 'pages/login/login.html'),
        loginbase: resolve(__dirname, 'pages/login/login-base.html'),
        loginoutbase: resolve(__dirname, 'pages/login/login-out-base.html'),
        uni: resolve(__dirname, 'pages/cases/unipizza.html'),
        zvonok: resolve(__dirname, 'pages/cases/zvonok.html'),
        goodseller: resolve(__dirname, 'pages/cases/goodseller.html'),
        educa: resolve(__dirname, 'pages/cases/educa.html'),
        floart: resolve(__dirname, 'pages/cases/floart.html'),
        sputnik: resolve(__dirname, 'pages/cases/sputnik.html')
      }
    }
  }
});
