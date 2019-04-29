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
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import StepTwoInsuranceData from './IWellStepTwo_insurdata'
import StepTwoBaoZhangContent from './IWellStepTwo_baozhangcontent'
import StepTwoCalculateTitle from './IWellStepTwo_calculatetitle'
import StepTwoCalculateResult from './IWellStepTwo_calculateresult'
import StepTwoFooter from './IWellStepTwo_footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetIWellPostData
    ])
  },
  created() {
    console.log(this.GetIWellPostData.ins_type_name)
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
