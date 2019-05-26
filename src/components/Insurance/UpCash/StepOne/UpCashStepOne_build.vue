<template>
  <div>
    <loading v-show="GetLoading" />
    <CustomerComponent :stateData="GetUpCashPostData"></CustomerComponent>
    <StepOneAbout></StepOneAbout>
    <FatcaComponent :stateData="GetUpCashPostData"></FatcaComponent>
    <StepOneFooter></StepOneFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/Upcash/Types/UpCashFunctionTypes'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import CustomerComponent from '../../Common/customer'
import FatcaComponent from '../../Common/fatca'
import StepOneAbout from './UpCashStepOne_about'
import StepOneFooter from './UpCashStepOne_footer'
import { getQueryStringParameterByKey } from '../../../../utils/getQueryStringParameterByKey'

export default {
  created() {
    this.$store.state.UNFINISHID = getQueryStringParameterByKey('id')
    if (!this.GetUpCashIsInit) {
      this.FuncUpCashInit(this.$store.state.UNFINISHID)
      this.$store.state.PLANNAME = 'UPCASH'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetUpCashIsInit,
      GetterTypes.GetUpCashPostData
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
      FunctionTypes.FuncUpCashInit
    ])
  }
}

</script>
