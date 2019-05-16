<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoToPrev()">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="Estimate()">保費試算</div>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'
import EntTravelFunctionTypes from '../../../../store/modules/EntTravel/Types/EntTravelFunctionTypes.js'

export default {
  computed: {
    ...mapGetters([
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  },
  methods: {
    ...mapActions([
      EntTravelFunctionTypes.FuncEntTravelEstimate
    ]),
    GoToPrev() {
      this.$router.push(`/enttravel-2`)
    },
    Estimate() {
      this.FuncEntTravelEstimate({
        para: this.GetEntTravelPostData,
        router: this.$router
      })
    }
  }
}

</script>
