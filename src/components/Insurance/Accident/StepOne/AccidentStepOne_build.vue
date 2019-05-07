<template>
  <div>
    <loading v-show="GetLoading" />
    <StepOneCustomer></StepOneCustomer>
    <StepOneAbout></StepOneAbout>
    <StepOneFooter></StepOneFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/Accident/Types/AccidentFunctionTypes'
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes'
import StepOneCustomer from './AccidentStepOne_customer'
import StepOneAbout from './AccidentStepOne_about'
import StepOneFooter from './AccidentStepOne_footer'

export default {
  created() {
    if (!this.GetAccidentIsInit) {
      this.FuncAccidentInit()
      this.$store.state.PLANNAME = 'ACCIDENT'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetAccidentIsInit
    ])
  },
  components: {
    StepOneCustomer,
    StepOneAbout,
    StepOneFooter
  },
  methods: {
    ...mapActions([
      'FuncGetAccountData',
      FunctionTypes.FuncAccidentInit
    ])
  }
}

</script>
