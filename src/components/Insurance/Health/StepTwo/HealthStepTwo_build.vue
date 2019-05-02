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
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
import StepTwoInsuranceData from './HealthStepTwo_insurdata'
import StepTwoEnsureContent from './HealthStepTwo_ensurecontent'
import StepTwoCalculateTitle from './HealthStepTwo_calculatetitle'
import StepTwoCalculateResult from './HealthStepTwo_calculateresult'
import StepTwoFooter from './HealthStepTwo_footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetHealthPostData
    ])
  },
  created() {
    console.log(this.GetHealthPostData.ins_type_name)
  },
  components: {
    StepTwoInsuranceData,
    StepTwoEnsureContent,
    StepTwoCalculateTitle,
    StepTwoCalculateResult,
    StepTwoFooter
  }
}

</script>
