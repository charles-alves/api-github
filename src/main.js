import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

const options = {
  color: '#f67e0d',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
