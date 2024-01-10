import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Auth.vue'
import Customers from '../views/customers/index.vue'
import Products from '../views/products/index.vue'
import Vendors from '../views/vendors/index.vue'
import Home from '../views/Index.vue'
import Dashboard from '../views/Dashboard.vue'
import Invoices from '../views/invoices/index.vue'
import Purhcases from '../views/purchases/index.vue'

import { authMiddleware } from '../midlewares/auth';

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
      beforeEnter: authMiddleware,
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
        },
        {
          path: '/invoices',
          name: 'Invoices',
          component: Invoices
        },
        {
          path: '/purchases',
          name: 'Purchases',
          component: Purhcases
        }
      ]
    },
  
  ]
})

export default router
