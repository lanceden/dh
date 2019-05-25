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
import { toggleModalShow } from './utils/toggleModal'
import vueAwesomeCountdown from 'vue-awesome-countdown'
import VueScrollTo from 'vue-scrollto'
Vue.config.productionTip = false
Vue.use(extension)
Vue.use(VueScrollTo)
Vue.use(vueAwesomeCountdown, 'vac') // Component name, `countdown` and `vac` by default

Object.keys(filters)
  .forEach(key => Vue.filter(key, filters[key]))

Vue.prototype.$http = { axios }

axios.defaults.retry = 4
axios.defaults.retryDelay = 1000

axios.interceptors.request.use((config) => {
  store.dispatch('SetShowLoading')
  config.headers['Content-Type'] = 'application/json'
  config.headers['Authorization'] = 'Bearer ' + vm.$store.state.ApiToken
  return config
}, function(error) {
  return Promise.reject(error)
})
// 設置axios請求回傳時之處理
axios.interceptors.response.use((response) => {
  store.dispatch('SethideLoading')
  if (response.data.ResultCode !== '0000') {
    if (response.request.responseURL.match('IsCityBank') === null && response.request.responseURL.match('VerifyEmploymentId') === null) {
      toggleModalShow(response.data.Data.Message, '貼心提醒您')
    }
    return response
  }
  return response
}, function(error) {
  store.dispatch('SethideLoading')
  var config = error.config
  // If config does not exist or the retry option is not set, reject
  if (!config || !config.retry) return Promise.reject(error)
  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0
  // Check if we've maxed out the total number of retries
  if (config.__retryCount >= config.retry) {
    // Reject with the error
    if (!error.response) {
      toggleModalShow('親愛的保戶您好，操作已逾時請重新登入。')
    } else if (error.response.status === 401) {
      toggleModalShow('親愛的保戶您好，操作已逾時請重新登入。')
    } else if (error.response.status === 501) {
      toggleModalShow('親愛的保戶您好，操作已逾時請重新登入。')
    } else {
      toggleModalShow(error.response.data.Data.Message)
    }
    return Promise.reject(error)
  }
  // Increase the retry count
  config.__retryCount += 1

  // Create new promise to handle exponential backoff
  var backoff = new Promise(function(resolve) {
    setTimeout(function() {
      resolve()
    }, config.retryDelay || 1)
  })

  // Return the promise in which recalls axios to retry the request
  return backoff.then(function() {
    return axios(config)
  })
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
