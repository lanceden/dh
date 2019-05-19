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
import FunctionTypes from '../../../../store/modules/IGoing/Types/IGoingFunctionTypes'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes'
import StepOneCustomer from './IGoingStepOne_customer'
import StepOneAbout from './IGoingStepOne_about'
import StepOneFooter from './IGoingStepOne_footer'
import { getQueryStringParameterByKey } from '../../../../utils/getQueryStringParameterByKey'

export default {
  created() {
    this.$store.state.UNFINISHID = getQueryStringParameterByKey('id')
    if (!this.GetIGoingIsInit) {
      this.FuncIGoingInit(this.$store.state.UNFINISHID)
      this.$store.state.PLANNAME = 'IGOING'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetIGoingIsInit
    ])
  },
  components: {
    StepOneCustomer,
    StepOneAbout,
    StepOneFooter
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncIGoingInit
    ])
  }
}

</script>
