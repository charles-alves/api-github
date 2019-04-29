import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import githubService from './services/github.service'

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
      component: () => import(/* webpackChunkName: "usuario" */ './views/Usuario.vue')
    },
    {
      path: '/:nomeUsuario/repositorios',
      name: 'repositorios',
      component: () => import(/* webpackChunkName: "repositorios" */ './views/Repositorios.vue'),
      meta: {
        async loadRepositoryData (nomeUsuario) {
          return githubService.listarRepositirios(nomeUsuario)
        }
      }
    },
    {
      path: '/:nomeUsuario/favoritos',
      name: 'favoritos',
      component: () => import(/* webpackChunkName: "repositorios" */ './views/Repositorios.vue'),
      meta: {
        async loadRepositoryData (nomeUsuario) {
          return githubService.listarRepositiriosFavoritos(nomeUsuario)
        }
      }
    },
    {
      path: '/not-found',
      name: 'Not Found',
      component: NotFound
    },
    {
      path: '*',
      redirect: { name: 'Not Found' }
    }
  ]
})
