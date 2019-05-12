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
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/MyWay/Types/MyWayFunctionTypes.js'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetMyWayPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncMyWayEstimate
    ]),
    GoToPrev() {
      this.$router.push(`/myway-1?token=${this.$store.state.ApiToken}`)
    },
    Estimate() {
      this.FuncMyWayEstimate({ para: this.GetMyWayPostData, router: this.$router })
    }
  }
}

</script>
