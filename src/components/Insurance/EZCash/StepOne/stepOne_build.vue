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
import StepOneCustomer from './stepOne_customer'
import StepOneAbout from './stepOne_about'
import StepOneFatca from './stepOne_fatca'
import StepOneFooter from './stepOne_footer'
export default {
  created() {
    const urlParams = new URLSearchParams(window.location.search)
    const tokenArr = urlParams.get('token').split(' ')
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
