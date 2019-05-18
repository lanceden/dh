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
