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
import FunctionTypes from '../../../../store/modules/Accident/Types/AccidentFunctionTypes'
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetAccidentPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncAccidentEstimate
    ]),
    GoToPrev() {
      this.$router.push(`/accident-1?token=${this.$store.state.ApiToken}`)
    },
    Estimate() {
      this.FuncAccidentEstimate({ para: this.GetAccidentPostData, router: this.$router })
    }
  }
}

</script>
