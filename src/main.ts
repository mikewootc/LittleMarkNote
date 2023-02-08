import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'

import App from './App.vue';
import LittleUi from './little-ui/index.ts';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import router from './router'

import './assets/main.css'
import './assets/theme.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(LittleUi);

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
