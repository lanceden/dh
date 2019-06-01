<template>
  <div>
    <loading v-show="GetLoading" />
    <CustomerComponent :stateData="GetEZCashPostData"></CustomerComponent>
    <StepOneAbout></StepOneAbout>
    <FatcaComponent :stateData="GetEZCashPostData"></FatcaComponent>
    <StepOneFooter></StepOneFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/EZCash/Types/EZCashFunctionTypes'
import EZCashGetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
import CustomerComponent from '../../Common/customer'
import FatcaComponent from '../../Common/fatca'
import StepOneAbout from './EZCashStepOne_about'
import StepOneFooter from './EZCashStepOne_footer'
import { getQueryStringParameterByKey } from '../../../../utils/getQueryStringParameterByKey'

export default {
  created() {
    this.$store.state.UNFINISHID = getQueryStringParameterByKey('id')
    if (!this.GetEZCashIsInit) {
      this.FuncEZCashInit(this.$store.state.UNFINISHID)
      this.$store.state.PLANNAME = 'EZCASH'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      EZCashGetterTypes.GetEZCashIsInit,
      EZCashGetterTypes.GetEZCashPostData
    ])
  },
  components: {
    CustomerComponent,
    StepOneAbout,
    FatcaComponent,
    StepOneFooter
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncEZCashInit
    ])
  }
}

</script>
