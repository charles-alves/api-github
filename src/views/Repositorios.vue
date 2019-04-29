<template>
  <div class="container">
    <div v-if="usuario">
      <routerLink :to="{ name: 'usuario' }" class="d-flex flex-row text-decoration-none">
        <img :src="usuario.avatar_url" :alt="usuario.name" class="avatar mb-4 img-thumbnail">
        <div class="ml-3 d-flex flex-column">
          <h4 class="text-muted">{{ usuario.name || usuario.login }}</h4>
          <footer v-if="usuario.name" class="blockquote-footer">{{ usuario.login }}</footer>
        </div>
      </routerLink>
      <ul v-if="repositorios.length" class="list-group mb-5">
        <li v-for="repo of repositorios" :key="repo.id" class="list-group-item">
          <div class="row">
            <div class="col-9">
              <h5><a :href="repo.html_url" target="_blank">{{ repo.full_name }}</a></h5>
              <p>{{ repo.description }}</p>
            </div>
            <div class="col-3 text-center">
              <p><i class="fas fa-eye"></i> {{ repo.watchers }}</p>
              <p><i class="fas fa-star"></i> {{ repo.stargazers_count }}</p>
            </div>
          </div>
        </li>
      </ul>
      <p v-else class="text-center mt-4">Nenhum repositório encontrado</p>
    </div>
    <UsuarioNaoEncontrado v-else />
  </div>
</template>

<script>
import githubService from '../services/github.service'
import UsuarioNaoEncontrado from '../components/UsuarioNaoEncontrado.vue'

export default {
  name: 'Repositorios',
  components: {
    UsuarioNaoEncontrado
  },
  data () {
    return {
      repositorios: [],
      usuario: {}
    }
  },
  watch: {
    '$route.params.nomeUsuario' (nomeUsuario) {
      this.carregarUsuario()
    }
  },
  async beforeRouteEnter (to, from, next) {
    const { nomeUsuario } = to.params

    const [repositorios, usuario] = await Promise.all([
      to.meta.loadRepositoryData(nomeUsuario),
      githubService.buscarUsuario(nomeUsuario)
    ])

    next(vm => {
      vm.repositorios = repositorios
      vm.usuario = usuario
    })
  },
  methods: {
    async carregarUsuario () {
      const { nomeUsuario } = this.$route.params

      const [repositorios, usuario] = await Promise.all([
        this.$route.meta.loadRepositoryData(nomeUsuario),
        githubService.buscarUsuario(nomeUsuario)
      ])

      this.repositorios = repositorios
      this.usuario = usuario
    }
  }
}
</script>

<style scoped>
.avatar {
  height: 76px;
  width: 76px;
}
</style>
