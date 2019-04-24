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
import FunctionTypes from '../../../store/modules/Upcash/Types/UpCashFunctionTypes'
import GetterTypes from '../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import StepOneCustomer from './stepOne_customer'
import StepOneAbout from './stepOne_about'
import StepOneFatca from './stepOne_fatca'
import StepOneFooter from './stepOne_footer'
export default {
  created() {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')
    this.SetApiToken({ token: token })
    this.$RequestToken = token
    if (!this.GetUpCashIsInit) {
      this.FuncUpCashInit()
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
      'SetApiToken',
      FunctionTypes.FuncUpCashInit
    ])
  }
}

</script>
