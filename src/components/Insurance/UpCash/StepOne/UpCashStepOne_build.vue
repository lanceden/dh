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
import FunctionTypes from '../../../../store/modules/Upcash/Types/UpCashFunctionTypes'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import StepOneCustomer from './UpCashStepOne_customer'
import StepOneAbout from './UpCashStepOne_about'
import StepOneFatca from './UpCashStepOne_fatca'
import StepOneFooter from './UpCashStepOne_footer'

export default {
  created() {
    if (!this.GetUpCashIsInit) {
      this.FuncUpCashInit()
      this.$store.state.PLANNAME = 'UPCASH'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetUpCashIsInit
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
      FunctionTypes.FuncUpCashInit
    ])
  }
}

</script>
