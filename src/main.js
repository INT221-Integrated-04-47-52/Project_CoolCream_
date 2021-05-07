import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'


import router from './router'
import AllProduct from './components/AllProduct'
import RegisterForm from './components/RegisterForm'
import HomeView from './UI/HomeView'
import BaseTopping from  './blogs/Baseopping'
import FirstHome from  './UI/FirstHome'
import BaseBrand from  './blogs/BaseBrand'

const app = createApp(App)
app.component('register-form', RegisterForm)
app.component('home-view', HomeView)
app.component('all-product', AllProduct)
app.component('base-topping', BaseTopping)
app.component('first-home', FirstHome)
app.component('base-brand', BaseBrand)
app.use(router).mount('#app')