import { createRouter, createWebHistory } from 'vue-router'
import shopping from '../components/shopping.vue'

const routes = [
  {
    path: '/',
    name: 'shopping',
    component: shopping
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
