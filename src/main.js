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

Vue.prototype.$http = axios
Vue.prototype.$RequestToken = ''

axios.interceptors.response.use(function(response) {
  store.dispatch('HideLoading')
  return response
}, function(error) {
  console.log('main.js')
  alert('請先登入!')
  store.state.login.auth = false
  // router.push('/Login')
  return Promise.reject(error)
})
window.Lockr = Lockr

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  created() {
    axios.interceptors.request.use(function (config) {
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
