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
import FunctionTypes from '../../../../store/modules/MyWay/Types/MyWayFunctionTypes'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import StepOneCustomer from './MyWayStepOne_customer'
import StepOneAbout from './MyWayStepOne_about'
import StepOneFooter from './MyWayStepOne_footer'

export default {
  created() {
    if (!this.GetMyWayIsInit) {
      this.FuncMyWayInit()
      this.$store.state.PLANNAME = 'MYWAY'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetMyWayIsInit
    ])
  },
  components: {
    StepOneCustomer,
    StepOneAbout,
    StepOneFooter
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncMyWayInit
    ])
  }
}

</script>
