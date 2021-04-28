import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProduct from '../views/AddProduct.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Members',
    name: 'Members',
    // route level code-splitting
    // this generates a separate chunk (Members.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Members" */ '../views/Members.vue')
  },{ path: '/AddProduct', name: 'AddProduct',
  component: AddProduct
    }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
