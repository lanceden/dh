<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoInsuranceData></StepTwoInsuranceData>
    <StepTwoEnsureContent></StepTwoEnsureContent>
    <StepTwoCalculateTitle></StepTwoCalculateTitle>
    <StepTwoCalculateResult></StepTwoCalculateResult>
    <StepTwoFooter></StepTwoFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import StepTwoInsuranceData from './IWellStepTwo_insurdata'
import StepTwoCalculateTitle from './IWellStepTwo_calculatetitle'
import StepTwoCalculateResult from './IWellStepTwo_calculateresult'
import StepTwoEnsureContent from './IWellStepTwo_ensurecontent'
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
    StepTwoCalculateTitle,
    StepTwoCalculateResult,
    StepTwoEnsureContent,
    StepTwoFooter
  }
}

</script>
