import types from './types'

export default {
  [types.ShowLoading](state) {
    state.ShowLoading = true
  },
  [types.HideLoading](state) {
    setTimeout(() => {
      state.ShowLoading = false
    }, 1000)
  }
}
