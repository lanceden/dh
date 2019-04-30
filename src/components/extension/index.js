import LoadingComponent from './Loading.vue'
import ModalComponent from './Modal.vue'

const ext = {
  install: function(Vue) {
    Vue.component('loading', LoadingComponent)
    Vue.component('modal', ModalComponent)
  }
}
export default ext
