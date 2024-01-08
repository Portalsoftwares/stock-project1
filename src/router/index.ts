import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Auth from '../views/Auth.vue'
import Customers from '../views/customers/index.vue'
import Items from '../views/items/index.vue'
import Home from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'auth',
      component: Auth
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/customers',
          name: 'customer',
          component: Customers
        },
        {
          path: '/items',
          name: 'items',
          component: Items
        }
      ]
    },
  
  ]
})

export default router
