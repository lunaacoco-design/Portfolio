import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogDetail from '../views/BlogDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/lebenslauf',
    name: 'lebenslauf',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LebenslaufView.vue')
  },
  {
    path: '/Kontakt',
    name: 'kontakt',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/impressum',
    name: 'impressum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Impressum.vue')
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Datenschutz.vue')
  },
  {
    path: '/blog/:slug',
    name: 'BlogDetail',
    component: BlogDetail,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router