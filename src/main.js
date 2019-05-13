// The Vue build version to load with the `import` command.
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import extension from './components/extension'
import store from './store'
import Lockr from 'lockr'
import filters from './filters'
import axios from 'axios'
import { GetErrorMsg } from '../src/utils/getErrorMsg'
import { toggleModalShow } from './utils/toggleModal'

Vue.config.productionTip = false
Vue.use(extension)

Object.keys(filters)
  .forEach(key => Vue.filter(key, filters[key]))

Vue.prototype.$http = { axios }

axios.interceptors.request.use(function(config) {
  store.dispatch('SetShowLoading')
  if (vm.$store.state.ApiToken === '') {
    vm.$store.state.ApiToken = window.Lockr.get('ApiToken')
  }
  config.headers['Authorization'] = 'Bearer ' + vm.$store.state.ApiToken
  return config
}, function(error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function(response) {
  store.dispatch('SethideLoading')
  if (response.data.ResultCode !== '0000') {
    if (response.request.responseURL.match('IsCityBank') === null) {
      toggleModalShow(GetErrorMsg(response.data.ErrorMessage), '貼心提醒您')
    }
    return response
  }
  return response
}, function(error) {
  if (error.response === undefined) {
    console.log(`${error.config.url} , errorMessage: ${error.message}`)
  } else {
    if (error.response.status === 401) {
      toggleModalShow('親愛的保戶您好，操作已逾時請重新登入。')
    } else if (error.response.status === 501) {
      toggleModalShow('親愛的保戶您好，操作已逾時請重新登入。')
    } else {
      toggleModalShow('親愛的保戶您好，操作已逾時請重新登入。')
    }
  }
  store.dispatch('SethideLoading')
  return Promise.reject(error)
})
window.Lockr = Lockr

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  template: `<App/>`,
  components: {
    App
  }
})
