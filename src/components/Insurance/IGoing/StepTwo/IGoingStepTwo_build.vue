<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoInsuranceData></StepTwoInsuranceData>
    <StepTwoBaoZhangContent></StepTwoBaoZhangContent>
    <StepTwoCalculateTitle></StepTwoCalculateTitle>
    <StepTwoCalculateResult></StepTwoCalculateResult>
    <StepTwoFooter></StepTwoFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import StepTwoInsuranceData from './IGoingStepTwo_insurdata'
import StepTwoBaoZhangContent from './IGoingStepTwo_baozhangcontent'
import StepTwoCalculateTitle from './IGoingStepTwo_calculatetitle'
import StepTwoCalculateResult from './IGoingStepTwo_calculateresult'
import StepTwoFooter from './IGoingStepTwo_footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetIGoingPostData
    ])
  },
  created() {
    console.log(this.GetIGoingPostData.ins_type_name)
  },
  components: {
    StepTwoInsuranceData,
    StepTwoBaoZhangContent,
    StepTwoCalculateTitle,
    StepTwoCalculateResult,
    StepTwoFooter
  }
}

</script>
