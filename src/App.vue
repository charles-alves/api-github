<template>
  <div id="app">
    <AppHeader />
    <router-view/>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  mounted () {
    this.$Progress.finish()
  },
  created () {
    this.$Progress.start()

    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()

      next()
    })

    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }
}
</script>

<style lang="scss">
@import './assets/style'
</style>
