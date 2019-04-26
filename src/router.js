import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Usuario from './views/Usuario.vue'
import Repositorios from './views/Repositorios.vue'
import Favoritos from './views/Favoritos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:nomeUsuario',
      name: 'usuario',
      component: Usuario
    },
    {
      path: '/:nomeUsuario/repositorios',
      name: 'repositorios',
      component: Repositorios
    },
    {
      path: '/:nomeUsuario/starred',
      name: 'favoritos',
      component: Favoritos
    }
  ]
})
