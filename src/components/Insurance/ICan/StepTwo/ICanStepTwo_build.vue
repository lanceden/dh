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
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
import StepTwoInsuranceData from './ICanStepTwo_insurdata'
import StepTwoEnSureContent from './ICanStepTwo_ensurecontent'
import StepTwoCalculateTitle from './ICanStepTwo_calculatetitle'
import StepTwoCalculateResult from './ICanStepTwo_calculateresult'
import StepTwoFooter from './ICanStepTwo_footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetICanPostData
    ])
  },
  created() {
    console.log(this.GetICanPostData.ins_type_name)
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
