<template>
  <div>
    <loading v-show="GetLoading" />
    <CustomerComponent :stateData="GetIWellPostData"></CustomerComponent>
    <StepOneAbout></StepOneAbout>
    <StepOneFooter></StepOneFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/IWell/Types/IWellFunctionTypes'
import IWellGetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes'
import CustomerComponent from '../../Common/customer'
import StepOneAbout from './IWellStepOne_about'
import StepOneFooter from './IWellStepOne_footer'

export default {
  created() {
    if (!this.GetIWellIsInit) {
      this.FuncIWellInit(this.$store.state.UNFINISHID)
      this.$store.state.PLANNAME = 'IWELL'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      IWellGetterTypes.GetIWellIsInit,
      IWellGetterTypes.GetIWellPostData
    ])
  },
  components: {
    CustomerComponent,
    StepOneAbout,
    StepOneFooter
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncIWellInit
    ])
  }
}

</script>
