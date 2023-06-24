import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StrView from '../views/StrView.vue'
import InputView from '../views/InputView.vue'
// import SelectView from '../views/SelectView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/strhtml',
    name: 'strhtml',
    component: StrView
  },
  {
    path: '/input',
    name: 'input',
    component: InputView
  },
  {
    path: '/select',
    name: 'select',
    component: () => import(/* webpackChunkName: "about", webpackPrefetch:true*/  '../views/SelectView.vue')
  },
  {
    path: '/checkbox',
    name: 'chekcbox',
    component: () => import(/* webpackChunkName: "about", webpackPrefetch:true*/  '../views/CheckboxView.vue')
  },
  {
    path: '/attr',
    name: 'attribute',
    component: () => import(/* webpackChunkName: "about", webpackPrefetch:true*/  '../views/AttributeView.vue')
  },
  {
    path: '/bindlist',
    name: 'bindlist',
    component: () => import(/* webpackChunkName: "about", webpackPrefetch:true*/  '../views/BindlistView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
