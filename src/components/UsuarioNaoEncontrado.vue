<template>
  <div class="row">
    <div class="col-md-12">
      <div class="error-template">
        <h1>Oops!</h1>
        <h2>Usuário não encontrado</h2>
        <div class="error-details">
          Não foi possível identificar o usuário <span class="font-weight-bold">{{ nomeUsuario }}</span> verifique se ele está correto e tente novamente
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Usuario não encontrado',
  data () {
    return {
      nomeUsuario: null
    }
  },
  created () {
    this.nomeUsuario = this.$route.params.nomeUsuario
  }
}
</script>
