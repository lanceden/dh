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
import { getQueryStringParameterByKey } from '../../../../utils/getQueryStringParameterByKey.js'
export default {
  created() {
    const tokenArr = getQueryStringParameterByKey('token').split(' ')
    let token = ''
    tokenArr.forEach(item => {
      token += `+${item}`
    })
    this.SetApiToken({ token: token.replace('+', '') })
    if (!this.GetMyWayIsInit) {
      this.FuncMyWayInit()
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
      'SetApiToken',
      FunctionTypes.FuncMyWayInit
    ])
  }
}

</script>
