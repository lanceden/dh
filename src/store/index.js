import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import UpCash from './modules/Upcash'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UpCash
  },
  mutations,
  actions,
  state,
  getters
})
