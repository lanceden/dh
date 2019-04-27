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
    if (!this.GetICanIsInit) {
      this.FuncICanInit()
    }
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
      'SetApiToken',
      FunctionTypes.FuncICanInit
    ])
  }
}

</script>
