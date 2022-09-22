import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component:()=> import ('../views/PokemonsView.vue')
    },
    {
      path: '/pokemons/:name',
      name: 'poke',
      component:()=> import ('../views/PokeView.vue')
    },
    {
      path: '/:patchMatch(.*)',
      name: 'Not Found',
      component:()=> import ('../views/NotFoundRoute.vue')
    },
    {
      path: '/Favorites',
      name: 'Favorites',
      component:()=> import ('../views/FavoritesView.vue')
    },

  ]
})

export default router
