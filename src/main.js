// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Loading from './components/Loading'
import store from './store'
import filters from './filters'

Vue.config.productionTip = false
Vue.use(Loading)

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
// axios.interceptors.request.use(function (config) {  //配置发送请求的信息
//   stores.dispatch('showLoading')
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// axios.interceptors.response.use(function (response) { //配置请求回来的信息
//   stores.dispatch('hideLoading')
//   return response;
// }, function (error) {

//   return Promise.reject(error);
// });

// Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
