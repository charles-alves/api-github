<template>
  <nav class="navbar navbar-light bg-light">
    <RouterLink :to="{ name: 'home' }" class="navbar-brand">Api Github</RouterLink>

    <NomeUsuarioForm />
  </nav>
</template>

<script>
import NomeUsuarioForm from './NomeUsuarioForm.vue'

export default {
  name: 'AppHeader',
  components: {
    NomeUsuarioForm
  }
}
</script>
