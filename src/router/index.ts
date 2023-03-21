import { createRouter, createWebHistory } from 'vue-router'
import ImageSearchView from '../views/ImageSearchView.vue'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/search-Image',
      name: 'search-image',
      component: ImageSearchView,
    },
  ]
})

export default router
