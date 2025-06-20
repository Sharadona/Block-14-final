import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from "../components/Navbar.vue";

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
