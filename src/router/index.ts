import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Auth from '../views/Auth.vue'
import Customers from '../views/customers/index.vue'
import Products from '../views/products/index.vue'
import Vendors from '../views/vendors/index.vue'
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
          path: '/products',
          name: 'products',
          component: Products
        },
        {
          path: '/vendors',
          name: 'Vendors',
          component: Vendors
        }
      ]
    },
  
  ]
})

export default router
