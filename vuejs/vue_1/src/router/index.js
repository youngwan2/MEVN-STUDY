import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContentView from '../views/ContentView.vue'
import Day1View from '../views/Day1View.vue'
import Day2View from '../views/Day2View.vue'
import Day3View from '../views/Day3View.vue'

const routes = [
  {
    path: '/', // 경로
    name: 'home',
    component: HomeView
  },
  {
    path: '/content', // 경로
    name: 'content',
    component: ContentView
    // component: () => import(/* webpackChunkName: "about" */ '../views/ContentView.vue')
  },
  {
    path: '/day1', // 경로
    name: 'day1',
    component: Day1View
    // component: () => import(/* webpackChunkName: "about" */ '../views/ContentView.vue')
  },
  {
    path: '/day2', // 경로
    name: 'day2',
    component: Day2View
    // component: () => import(/* webpackChunkName: "about" */ '../views/ContentView.vue')
  },
  {
    path: '/day3', // 경로
    name: 'day3',
    component: Day3View
    // component: () => import(/* webpackChunkName: "about" */ '../views/ContentView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
