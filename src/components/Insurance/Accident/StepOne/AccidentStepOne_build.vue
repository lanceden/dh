<template>
  <div>
    <loading v-show="GetLoading" />
    <CustomerComponent :stateData="GetAccidentPostData"></CustomerComponent>
    <StepOneAbout></StepOneAbout>
    <StepOneFooter></StepOneFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AccidentGetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'
import FunctionTypes from '../../../../store/modules/Accident/Types/AccidentFunctionTypes'
import CustomerComponent from '../../Common/customer'
import StepOneAbout from './AccidentStepOne_about'
import StepOneFooter from './AccidentStepOne_footer'
import { getQueryStringParameterByKey } from '../../../../utils/getQueryStringParameterByKey'

export default {
  created() {
    this.$store.state.UNFINISHID = getQueryStringParameterByKey('id')
    if (!this.GetAccidentIsInit) {
      this.FuncAccidentInit(this.$store.state.UNFINISHID)
      this.$store.state.PLANNAME = 'ACCIDENT'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      AccidentGetterTypes.GetAccidentIsInit,
      AccidentGetterTypes.GetAccidentPostData
    ])
  },
  components: {
    CustomerComponent,
    StepOneAbout,
    StepOneFooter
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncAccidentInit
    ])
  }
}

</script>
