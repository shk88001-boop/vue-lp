import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // 👈 ADD THIS
import './style.css'

createApp(App)
  .use(router)                  // 👈 ADD THIS
  .mount('#app')
