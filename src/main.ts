import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
// Import icon libraries
// https://fonts.google.com/icons?icon.set=Material+Icons
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue';
import LittleUi from './little-ui/index';
import router from './router'
import i18n from './locales/index'
import './assets/main.css'
import './assets/theme.scss'

const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(LittleUi);
app.use(i18n);

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
  /*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
})

app.mount('#app')
