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
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'
import TravelFunctionTypes from '../../../../store/modules/Travel/Types/TravelFunctionTypes.js'
// import { toggleModalShow } from '../../../../utils/toggleModal'

export default {
  computed: {
    ...mapGetters([
      TravelGetterTypes.GetTravelPostData
    ])
  },
  methods: {
    ...mapActions([
      TravelFunctionTypes.FuncTravelEstimate
    ]),
    GoToPrev() {
      this.$router.go(-1)
    },
    Estimate() {
      console.log(JSON.stringify(this.GetTravelPostData))
      this.FuncTravelEstimate({
        para: this.GetTravelPostData,
        router: this.$router
      })
    }
  }
}

</script>
