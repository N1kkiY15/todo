import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './router/router'
import { createPinia } from 'pinia'

createApp(App)
.use(createPinia())
.use(router)
.mount('#app')
