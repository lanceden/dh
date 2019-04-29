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
import FunctionTypes from '../../../../store/modules/IWell/Types/IWellFunctionTypes'
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes'
import StepOneCustomer from './IWellStepOne_customer'
import StepOneAbout from './IWellStepOne_about'
import StepOneFooter from './IWellStepOne_footer'
export default {
  created() {
    if (!this.GetIWellIsInit) {
      this.FuncIWellIsInit()
      this.FuncIWellInit()
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetIWellIsInit
    ])
  },
  components: {
    StepOneCustomer,
    StepOneAbout,
    StepOneFooter
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncIWellInit,
      FunctionTypes.FuncIWellIsInit
    ])
  }
}

</script>
