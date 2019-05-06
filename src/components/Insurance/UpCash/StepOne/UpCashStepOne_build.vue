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
import FunctionTypes from '../../../../store/modules/Upcash/Types/UpCashFunctionTypes'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import StepOneCustomer from './UpCashStepOne_customer'
import StepOneAbout from './UpCashStepOne_about'
import StepOneFatca from './UpCashStepOne_fatca'
import StepOneFooter from './UpCashStepOne_footer'
import { getQueryStringParameterByKey } from '../../../../utils/getQueryStringParameterByKey.js'
import { data } from './UpCashInitMockData'
export default {
  created() {
    if (!this.GetUpCashIsInit) {
      this.$store.state.UpCash.POSTDATA = data.Data.Result
      this.$store.state.PLANNAME = 'UPCASH'
      const tokenArr = getQueryStringParameterByKey('token').split(' ')
      let token = ''
      tokenArr.forEach(item => {
        token += `+${item}`
      })
      this.SetApiToken({ token: token.replace('+', '') })
      this.FuncUpCashInit()
      this.$store.state.PLANNAME = 'UPCASH'
    }
    console.log('this.$store.state.PLANNAME', this.$store.state.PLANNAME)
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
