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
import FunctionTypes from '../../../../store/modules/ICan/Types/ICanFunctionTypes'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes'
import StepOneCustomer from './ICanStepOne_customer'
import StepOneAbout from './ICanStepOne_about'
import StepOneFooter from './ICanStepOne_footer'

export default {
  created() {
    if (!this.GetICanIsInit) {
      this.FuncICanInit(this.$store.state.UNFINISHID)
      this.$store.state.PLANNAME = 'ICAN'
    }
    console.log('this.$store.state.PLANNAME', this.$store.state.PLANNAME)
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetICanIsInit
    ])
  },
  components: {
    StepOneCustomer,
    StepOneAbout,
    StepOneFooter
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncICanInit
    ])
  }
}

</script>
