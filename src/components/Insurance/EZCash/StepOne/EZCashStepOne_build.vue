<template>
  <div>
    <loading v-show="GetLoading" />
    <StepOneCustomer></StepOneCustomer>
    <StepOneAbout></StepOneAbout>
    <StepOneFatca></StepOneFatca>
    <StepOneFooter></StepOneFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/EZCash/Types/EZCashFunctionTypes'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
import StepOneCustomer from './EZCashStepOne_customer'
import StepOneAbout from './EZCashStepOne_about'
import StepOneFatca from './EZCashStepOne_fatca'
import StepOneFooter from './EZCashStepOne_footer'

export default {
  created() {
    if (!this.GetEZCashIsInit) {
      this.FuncEZCashInit()
      this.$store.state.PLANNAME = 'EZCASH'
    }
    console.log('this.$store.state.PLANNAME', this.$store.state.PLANNAME)
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetEZCashIsInit
    ])
  },
  components: {
    StepOneCustomer,
    StepOneAbout,
    StepOneFatca,
    StepOneFooter
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncEZCashInit
    ])
  }
}

</script>
