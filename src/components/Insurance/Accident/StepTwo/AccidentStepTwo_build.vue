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
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'
import StepTwoInsuranceData from './AccidentStepTwo_insurdata'
import StepTwoEnSureContent from './AccidentStepTwo_ensurecontent'
import StepTwoCalculateTitle from './AccidentStepTwo_calculatetitle'
import StepTwoCalculateResult from './AccidentStepTwo_calculateresult'
import StepTwoFooter from './AccidentStepTwo_footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetAccidentPostData
    ])
  },
  created() {
    console.log(this.GetAccidentPostData.ins_type_name)
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
