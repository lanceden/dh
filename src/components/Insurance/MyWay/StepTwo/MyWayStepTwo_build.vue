<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoInsuranceData></StepTwoInsuranceData>
    <StepTwoCalculateTitle></StepTwoCalculateTitle>
    <StepTwoCalculateResult></StepTwoCalculateResult>
    <StepTwoFooter></StepTwoFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import StepTwoInsuranceData from './MyWayStepTwo_insurdata'
import StepTwoCalculateTitle from './MyWayStepTwo_calculatetitle'
import StepTwoCalculateResult from './MyWayStepTwo_calculateresult'
import StepTwoFooter from './MyWayStepTwo_footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetMyWayPostData
    ])
  },
  created() {
    console.log(this.GetMyWayPostData.ins_type_name)
  },
  components: {
    StepTwoInsuranceData,
    StepTwoCalculateTitle,
    StepTwoCalculateResult,
    StepTwoFooter
  }
}

</script>
