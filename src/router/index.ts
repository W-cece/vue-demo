//引入路由
import { createRouter, createWebHistory } from "vue-router"

export const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login')
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})
export default router



