import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContentView from '../views/ContentView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/content',
    name: 'content',
    component: ContentView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ex1',
    name: 'ex1',
    component: () => import(/* webpackChunkName: "about" */ '../views/ex1.vue')
  },
  {
    path: '/ex2',
    name: 'ex2',
    component: () => import(/* webpackChunkName: "about" */ '../views/ex2.vue')
  },
  {
    path: '/ex3',
    name: 'ex3',
    component: () => import(/* webpackChunkName: "about" */ '../views/ex3.vue')
  },  {
    path: '/ex4',
    name: 'ex4',
    component: () => import(/* webpackChunkName: "about" */ '../views/ex4.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
