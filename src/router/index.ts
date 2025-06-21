import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import("../views/Auth.vue"),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue"),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: () => import('../components/Navbar.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
