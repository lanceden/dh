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
import FunctionTypes from '../../../../store/modules/Health/Types/HealthFunctionTypes.js'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetHealthPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncHealthEstimate
    ]),
    GoToPrev() {
      this.$router.push(`/health-1?token=${this.$store.state.ApiToken}`)
    },
    Estimate() {
      this.FuncHealthEstimate({ para: this.GetHealthPostData, router: this.$router })
    }
  }
}

</script>
