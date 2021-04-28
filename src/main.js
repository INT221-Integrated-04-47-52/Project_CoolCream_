import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import router from './router'
import AllProduct from './components/AllProduct'
import RegisterForm from './components/RegisterForm'
const app = createApp(App)
app.component('register-form', RegisterForm)
app.component('all-product', AllProduct)
app.use(router).mount('#app')