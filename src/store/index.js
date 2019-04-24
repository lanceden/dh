import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import UpCash from './modules/Upcash'
import MyWay from './modules/MyWay'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UpCash,
    MyWay
  },
  mutations,
  actions,
  state,
  getters
})
