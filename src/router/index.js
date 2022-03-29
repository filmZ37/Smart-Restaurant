import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Payment from '../views/Payment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/billing',
      name: 'payment',
      component: Payment,
    }

  ]
})

export default router
