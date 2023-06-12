import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import BaseDateDisplay from '@/components/BaseDateDisplay.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import firebaseConfig from '@/config/firebase'

const fbApp = initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(fbApp)

app.component('BaseDateDisplay', BaseDateDisplay)

app.mount('#app')
