<template>
  <div>
    <loading v-show="GetLoading" />
    <CustomerComponent :stateData="GetHealthPostData"></CustomerComponent>
    <StepOneAbout></StepOneAbout>
    <StepOneFooter></StepOneFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/Health/Types/HealthFunctionTypes'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
import CustomerComponent from '../../Common/customer'
import StepOneAbout from './HealthStepOne_about'
import StepOneFooter from './HealthStepOne_footer'
import { getQueryStringParameterByKey } from '../../../../utils/getQueryStringParameterByKey'

export default {
  created() {
    this.$store.state.UNFINISHID = getQueryStringParameterByKey('id')
    if (!this.GetHealthIsInit) {
      this.FuncHealthInit(this.$store.state.UNFINISHID)
      this.$store.state.PLANNAME = 'HEALTH'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetHealthIsInit,
      GetterTypes.GetHealthPostData
    ])
  },
  components: {
    CustomerComponent,
    StepOneAbout,
    StepOneFooter
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncHealthInit
    ])
  }
}

</script>
