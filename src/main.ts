import { createApp } from 'vue'
import { Quasar, Notify, Dark } from 'quasar'
import { createI18n } from 'vue-i18n'

import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

import App from './App.vue'
import router from './utils/router/router'
import pinia from './utils/store/storeConfiguration'

const myApp = createApp(App)

export const languages = {
  'en-EN': {
    label: 'English',
    welcome: 'Welcome to Quasar Vue 3 App',
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    settings: 'Settings',
  },
  'it-IT': {
    label: 'Italiano',
    welcome: 'Benvenuto in Quasar Vue 3 App',
    home: 'Casa',
    about: 'Di',
    contact: 'Contatto',
    settings: 'Impostazioni',
  }
}


const i18n = createI18n({
  locale: 'en-EN',
  messages: languages,
})


myApp.use(Quasar, {
  plugins: {
    Notify,
    Dark,
  }, // import Quasar plugins and add here
})

myApp.use(i18n)

myApp.use(router)

myApp.use(pinia)

myApp.mount('#app')
