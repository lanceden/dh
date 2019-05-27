<template>
  <div>
    <loading v-show="GetLoading" />
    <CustomerComponent :stateData="GetMyWayPostData"></CustomerComponent>
    <StepOneAbout></StepOneAbout>
    <StepOneFooter></StepOneFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MyWayFunctionTypes from '../../../../store/modules/MyWay/Types/MyWayFunctionTypes'
import MyWayGetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import CustomerComponent from '../../Common/customer'
import StepOneAbout from './MyWayStepOne_about'
import StepOneFooter from './MyWayStepOne_footer'
import { getQueryStringParameterByKey } from '../../../../utils/getQueryStringParameterByKey'

export default {
  created() {
    this.$store.state.UNFINISHID = getQueryStringParameterByKey('id')
    if (!this.GetMyWayIsInit) {
      this.FuncMyWayInit(this.$store.state.UNFINISHID)
      this.$store.state.PLANNAME = 'MYWAY'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      MyWayGetterTypes.GetMyWayIsInit,
      MyWayGetterTypes.GetMyWayPostData
    ])
  },
  components: {
    CustomerComponent,
    StepOneAbout,
    StepOneFooter
  },
  methods: {
    ...mapActions([
      MyWayFunctionTypes.FuncMyWayInit
    ])
  }
}

</script>
