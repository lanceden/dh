// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Loading from './components/Loading'
import store from './store'
import filters from './filters'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Loading)

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

axios.interceptors.request.use(function (config) {
  store.dispatch('ShowLoading')
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  store.dispatch('HideLoading')
  return response
}, function (error) {
  return Promise.reject(error)
})
console.log(store)
// axios({
//   method: 'put',
//   url: `/api/Account/put/1`,
//   data: {
//     AccountGroupId: 1,
//     AccountName: 'administrator'
//   }
// }).then(val => console.log(val))

Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
