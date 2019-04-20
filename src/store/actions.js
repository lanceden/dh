export default {
  SetHttp({ commit }, { http }) {
    commit('SetHttp', { http })
  },
  SetApiToken({ commit }, { token }) {
    commit('SetApiToken', { token })
  },
  SetHeaderIsActive({ commit }, isActive) {
    commit('SetHeaderIsActive', isActive)
  }
}
