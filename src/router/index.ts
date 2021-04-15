import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('../views/Games.vue'),
    props: true
  },
  {
    path: '/games/:gameId',
    name: 'GameDetails',
    component: () => import('../views/GamesDetails.vue'),
    props: true
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
  },
  {
    path: '/charts',
    name: 'Charts',
    component: () => import('../views/Charts.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
