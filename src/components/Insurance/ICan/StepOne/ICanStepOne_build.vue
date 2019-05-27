<template>
  <div>
    <loading v-show="GetLoading" />
    <CustomerComponent :stateData="GetICanPostData"></CustomerComponent>
    <StepOneAbout></StepOneAbout>
    <StepOneFooter></StepOneFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/ICan/Types/ICanFunctionTypes'
import ICanGetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes'
import CustomerComponent from '../../Common/customer'
import StepOneAbout from './ICanStepOne_about'
import StepOneFooter from './ICanStepOne_footer'

export default {
  created() {
    if (!this.GetICanIsInit) {
      this.FuncICanInit(this.$store.state.UNFINISHID)
      this.$store.state.PLANNAME = 'ICAN'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      ICanGetterTypes.GetICanIsInit,
      ICanGetterTypes.GetICanPostData
    ])
  },
  components: {
    CustomerComponent,
    StepOneAbout,
    StepOneFooter
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncICanInit
    ])
  }
}

</script>
