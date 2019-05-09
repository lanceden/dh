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
import IWellFunctionTypes from '../../../../store/modules/IWell/Types/IWellFunctionTypes.js'
import IWellGetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      IWellGetterTypes.GetIWellPostData
    ])
  },
  methods: {
    ...mapActions([
      IWellFunctionTypes.FuncIWellEstimate
    ]),
    GoToPrev() {
      this.$router.push(`/ICan-1`)
    },
    Estimate() {
      this.FuncIWellEstimate({ para: this.GetIWellPostData, router: this.$router })
    }
  }
}

</script>
