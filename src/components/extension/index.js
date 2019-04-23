const LoadingComponent = require('./Loading.vue')
const ext = {
  install: function (Vue) {
    Vue.component('loading', LoadingComponent)
  }
}
module.exports = ext
