import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import '@/assets/styles/main.css'
import '@/assets/styles/style.css'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
