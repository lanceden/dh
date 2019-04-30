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
import { getQueryStringParameterByKey } from '../../../../utils/getQueryStringParameterByKey.js'
export default {
  created() {
    const tokenArr = getQueryStringParameterByKey('token').split(' ')
    let token = ''
    tokenArr.forEach(item => {
      token += `+${item}`
    })
    this.SetApiToken({ token: token.replace('+', '') })
    if (!this.GetEZCashIsInit) {
      this.FuncEZCashInit()
    }
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
      'SetApiToken',
      FunctionTypes.FuncEZCashInit
    ])
  }
}

</script>
