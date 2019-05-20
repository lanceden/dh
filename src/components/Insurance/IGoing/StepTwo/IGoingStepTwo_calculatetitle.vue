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
import FunctionTypes from '../../../../store/modules/IGoing/Types/IGoingFunctionTypes'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes'
import { toggleModalShow } from '../../../../utils/toggleModal'

export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetIGoingPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncIGoingEstimate
    ]),
    GoToPrev() {
      this.$router.push(`/igoing-1?token=${this.$store.state.ApiToken}`)
    },
    Estimate() {
      let result = parseInt(window.jQuery('#face_amt').val())
      if (result === 0) {
        toggleModalShow('請填寫投保額度', '貼心提醒您')
        return
      }
      this.FuncIGoingEstimate({ para: this.GetIGoingPostData, router: this.$router })
    }
  }
}

</script>
