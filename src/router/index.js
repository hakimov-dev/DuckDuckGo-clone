import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import searchResult from '@/views/SearchResult'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search/?q=:value',
    name: 'search',
    component: searchResult
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
