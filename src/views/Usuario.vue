<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <img :src="this.usuario.avatar_url" :alt="usuario.name" class="avatar mb-4 img-thumbnail">
        <h1 v-if="usuario.name">{{ usuario.name }}</h1>
        <h5 class="text-secondary mb-3">({{usuario.login}})</h5>
        <h5 v-if="usuario.location"><i class="fas fa-map-marker-alt"></i> {{ usuario.location }}</h5>
        <p v-if="usuario.blog">
          <a :href="usuario.blog" class="text-decoration-none">
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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Usuario',
  data () {
    return {
      usuario: {}
    }
  },
  async beforeRouteEnter (to, from, next) {
    const { nomeUsuario } = to.params

    const response = await axios.get(`https://api.github.com/users/${nomeUsuario}`)

    next(vm => {
      vm.usuario = response.data
    })
  },
  watch: {
    '$route.params.nomeUsuario' (nomeUsuario) {
      this.carregarUsuario(nomeUsuario)
    }
  },
  methods: {
    async carregarUsuario (nomeUsuario) {
      const response = await axios.get(`https://api.github.com/users/${nomeUsuario}`)

      this.usuario = response.data
    }
  }
}
</script>

<style>
.container {
  margin-top: 30px;
}

.avatar {
  height: 150px;
  width: 150px;
}
</style>
