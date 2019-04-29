<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoInsuranceData></StepTwoInsuranceData>
    <StepTwoEnSureContent></StepTwoEnSureContent>
    <StepTwoCalculateTitle></StepTwoCalculateTitle>
    <StepTwoCalculateResult></StepTwoCalculateResult>
    <StepTwoFooter></StepTwoFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import StepTwoInsuranceData from './IGoingStepTwo_insurdata'
import StepTwoEnSureContent from './IGoingStepTwo_ensurecontent'
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
    StepTwoEnSureContent,
    StepTwoCalculateTitle,
    StepTwoCalculateResult,
    StepTwoFooter
  }
}

</script>
