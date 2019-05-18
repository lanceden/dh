<template>
  <div>
    <loading v-show="GetLoading" />
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-4 footer-title footer-left" @click="GoToPrev()">回前一頁</div>
          <div class="col-sm-8 footer-title footer-right" @click="Estimate()">保費試算</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import FunctionTypes from '../../../../store/modules/ICan/Types/ICanFunctionTypes'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes'
import { toggleModalShow } from '../../../../utils/toggleModal'

export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetICanPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncICanEstimate
    ]),
    GoToPrev() {
      this.$router.push(`/ICan-1`)
    },
    Estimate() {
      if (parseInt(this.GetICanPostData.face_amt) === 0) {
        toggleModalShow(`請選擇投保額度`)
        return
      }
      this.FuncICanEstimate({ para: this.GetICanPostData, router: this.$router })
    }
  }
}

</script>
