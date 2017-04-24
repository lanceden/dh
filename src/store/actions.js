import types from './types'

export default {
  [types.ShowLoading]({commit}) {
    commit(types.ShowLoading)
  },
  [types.HideLoading]({commit}) {
    commit(types.HideLoading)
  }
}
