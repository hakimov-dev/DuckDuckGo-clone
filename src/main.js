import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import '@/assets/styles/main.css'
import '@/assets/styles/style.css'

createApp(App).use(router).mount('#app')
