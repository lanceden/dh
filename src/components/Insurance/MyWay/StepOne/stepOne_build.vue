<template>
  <div>
    <StepOneCustomer></StepOneCustomer>
    <StepOneAbout></StepOneAbout>
    <StepOneFooter></StepOneFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/MyWay/Types/MyWayFunctionTypes'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import StepOneCustomer from './stepOne_customer'
import StepOneAbout from './stepOne_about'
import StepOneFooter from './stepOne_footer'
export default {
  created() {
    if (!this.MyWayGetIsInit) {
      this.FuncMyWayInit()
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.MyWayGetIsInit
    ])
  },
  components: {
    StepOneCustomer,
    StepOneAbout,
    StepOneFooter
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncMyWayInit
    ])
  }
}

</script>
