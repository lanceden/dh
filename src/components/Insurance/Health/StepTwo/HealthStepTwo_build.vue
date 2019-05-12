<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoInsuranceData></StepTwoInsuranceData>
    <StepTwoEnsureContent></StepTwoEnsureContent>
    <StepTwoCalculateTitle></StepTwoCalculateTitle>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
import StepTwoInsuranceData from './HealthStepTwo_insurdata'
import StepTwoEnsureContent from './HealthStepTwo_ensurecontent'
import StepTwoCalculateTitle from './HealthStepTwo_calculatetitle'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetHealthPostData
    ])
  },
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-2.png'
  },
  components: {
    StepTwoInsuranceData,
    StepTwoEnsureContent,
    StepTwoCalculateTitle
  }
}

</script>
