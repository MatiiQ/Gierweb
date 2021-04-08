import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue') 
  },
  {
    path: '/library/:userId',
    name: 'Library',
    component: () => import('../views/UsersLibraries.vue'), 
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
