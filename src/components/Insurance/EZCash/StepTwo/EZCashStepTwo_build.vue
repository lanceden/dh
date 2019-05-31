<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoInsuranceData></StepTwoInsuranceData>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes'
import StepTwoInsuranceData from './EZCashStepTwo_insurdata'
export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-2.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetEZCashPostData
    ])
  },
  components: {
    StepTwoInsuranceData
  }
}

</script>
