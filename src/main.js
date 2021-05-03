import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import router from './router'
import AllProduct from './components/AllProduct'
import RegisterForm from './components/RegisterForm'
import HomeView from './components/HomeView'
import BlogTopping from  './components/BlogTopping'
import FirstHome from  './components/FirstHome'

const app = createApp(App)
app.component('register-form', RegisterForm)
app.component('home-view', HomeView)
app.component('all-product', AllProduct)
app.component('blog-topping', BlogTopping)
app.component('first-home', FirstHome)
app.use(router).mount('#app')