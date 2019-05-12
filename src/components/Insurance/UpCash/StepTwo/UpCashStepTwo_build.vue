<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoInsuranceData></StepTwoInsuranceData>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes'
import StepTwoInsuranceData from './UpCashStepTwo_insurdata'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetUpCashPostData
    ])
  },
  components: {
    StepTwoInsuranceData
  }
}

</script>
