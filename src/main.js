// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import extension from './components/extension'
import store from './store'
import Lockr from 'lockr'
import filters from './filters'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(extension)

Object.keys(filters)
  .forEach(key => Vue.filter(key, filters[key]))

Vue.prototype.$http = { axios }
Vue.prototype.$RequestToken = 'HYmXVtPXTuZuoqGWZkKkNyyUsa7iERiPQgfdAqiF3bQU3SFevDkcDoCrefLHtcNzPIFkPiZNU9I2ni+6ceuI8TcKGkXt101mW/IFc3wKIziNQz+zFGpvqCPTRBlxa9JIng6KZwnscSpnM8bD27UIYklhE/7rVj9MovYRnx+r+mKTMt/gKYwcOVdfFYd0R1ullruGeXhGGX1xmlMCblyeWdg0+8k5ChoWef6eNLLcjn4KUYai23ORfXdZ67LXW+lAmYke01n2A3Lau/s87Y9o39ggtpbr/Lms+k0baBFxqbE='

axios.interceptors.response.use(function(response) {
  return response
}, function(error) {
  console.log(error)
  return Promise.reject(error)
})
window.Lockr = Lockr

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  created() {
    axios.interceptors.request.use(function(config) {
      config.headers['Authorization'] = 'Bearer ' + vm.$RequestToken
      return config
    }, function(error) {
      return Promise.reject(error)
    })
  },
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
