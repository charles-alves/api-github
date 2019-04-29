<template>
  <div class="container">
    <div v-if="usuario" class="row">
      <div class="col-12 text-center">
        <img :src="this.usuario.avatar_url" :alt="usuario.name" class="avatar mb-4 img-thumbnail">
        <h1 v-if="usuario.name">{{ usuario.name }}</h1>
        <h5 class="text-secondary mb-3">({{usuario.login}})</h5>
        <h5 v-if="usuario.location"><i class="fas fa-map-marker-alt"></i> {{ usuario.location }}</h5>
        <p v-if="usuario.blog">
          <a :href="usuario.blog" target="_blank" class="text-decoration-none">
            <i class="fas fa-map-marker-alt"></i> {{ usuario.blog }}
          </a>
        </p>
        <div v-if="usuario.bio" class="row">
          <div class="col-6 offset-3">
            <p>{{ usuario.bio }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-6 p-3">
            <routerLink :to="{ name: 'repositorios' }" type="buttom" class="btn btn-primary btn-block">
              <i class="fas fa-code"></i> Repositórios
            </routerLink>
          </div>
          <div class="col-6 p-3">
            <routerLink :to="{ name: 'favoritos' }" type="buttom" class="btn btn-primary btn-block">
              <i class="fas fa-star"></i> Favoritos
            </routerLink>
          </div>
        </div>
      </div>
    </div>
    <UsuarioNaoEncontrado v-else />
  </div>
</template>

<script>
import githubService from '../services/github.service'
import UsuarioNaoEncontrado from '../components/UsuarioNaoEncontrado.vue'

export default {
  name: 'Usuario',
  components: {
    UsuarioNaoEncontrado
  },
  data () {
    return {
      usuario: {}
    }
  },
  async beforeRouteEnter (to, from, next) {
    const { nomeUsuario } = to.params

    let usuario = await githubService.buscarUsuario(nomeUsuario)

    next(vm => { vm.usuario = usuario })
  },
  watch: {
    '$route.params.nomeUsuario' (nomeUsuario) {
      this.carregarUsuario(nomeUsuario)
    }
  },
  methods: {
    async carregarUsuario (nomeUsuario) {
      this.usuario = await githubService.buscarUsuario(nomeUsuario)
    }
  }
}
</script>

<style scoped>
.avatar {
  height: 150px;
  width: 150px;
}
</style>
