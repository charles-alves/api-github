<template>
  <form @submit.prevent="buscarUsuario(nomeUsuario)" class="form-inline">
    <div class="input-group">
      <input v-model="nomeUsuario" name="busca-usuario" type="search" class="form-control" placeholder="Usuario" arial-label="Usuario">
      <div class="input-group-append">
        <button type="submit" class="btn btn-outline-success">Buscar</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'NomeUsuarioForm',
  data () {
    return {
      nomeUsuario: ''
    }
  },
  methods: {
    buscarUsuario (nomeUsuario) {
      if (!nomeUsuario) return

      this.$router.push({ name: 'usuario', params: { nomeUsuario } })
    }
  }
}
</script>
