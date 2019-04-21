export default {
  SetHttp(state, { http }) {
    state.Http = http
  },
  SetApiToken(state, { token }) {
    state.ApiToken = token
  },
  SetHeaderIsActive(state, isAcvie) {
    state.HeaderIsActive = isAcvie
  },
  SetBenfinheritDisable(state, isDisable) {
    state.BenfinheritDisable = isDisable
  }
}
