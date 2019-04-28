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
import StepOneCustomer from './stepOne_customer'
import StepOneAbout from './stepOne_about'
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
    if (!this.GetIGoingIsInit) {
      this.FuncIGoingInit()
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
      'SetApiToken',
      FunctionTypes.FuncIGoingInit
    ])
  }
}

</script>
