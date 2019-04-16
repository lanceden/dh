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

axios.interceptors.request.use(function (config) {
  // { headers: {"Authorization" : `Bearer ${JWTToken}`}
  axios.defaults.headers['Authorization'] = `Bearer ${config}`
  axios.defaults.headers.common['Authorization'] = JSON.stringify(store.getters.token)
  store.dispatch('ShowLoading')
  return config
}, function(error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function(response) {
  store.dispatch('HideLoading')
  return response
}, function (error) {
  console.log('main.js')
  alert('請先登入!')
  store.state.login.auth = false
  router.push('/Login')
  return Promise.reject(error)
})
window.Lockr = Lockr
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created() {
    if (Lockr.get('auth')) {
      /* 判斷重新整理 */
      this.$store.state.login.auth = true
      axios.defaults.headers['X-XSRF-Token'] = Lockr.get('antiKey')
    } else {
      Lockr.rm('antiKey')
      Lockr.rm('auth')
    }
  },
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
