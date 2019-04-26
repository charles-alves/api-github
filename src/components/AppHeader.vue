<template>
  <nav class="navbar navbar-light bg-light">
    <RouterLink :to="{ name: 'Home' }" class="navbar-brand">Api Github</RouterLink>
    <form @submit.prevent="buscarUsuario(nomeUsuario)" class="form-inline">
      <input v-model="nomeUsuario" name="busca-usuario" type="search" class="form-control" placeholder="Usuario" arial-label="Usuario">
      <button type="submit" class="btn btn-outline-success">Buscar</button>
    </form>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      nomeUsuario: ''
    }
  },
  methods: {
    buscarUsuario (nomeUsuario) {
      this.$router.push({ name: 'usuario', params: { nomeUsuario } })
    }
  }
}
</script>
