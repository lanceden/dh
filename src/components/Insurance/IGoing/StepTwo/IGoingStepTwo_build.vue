<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoInsuranceData></StepTwoInsuranceData>
    <StepTwoEnSureContent></StepTwoEnSureContent>
    <StepTwoCalculateTitle></StepTwoCalculateTitle>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import StepTwoInsuranceData from './IGoingStepTwo_insurdata'
import StepTwoEnSureContent from './IGoingStepTwo_ensurecontent'
import StepTwoCalculateTitle from './IGoingStepTwo_calculatetitle'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetIGoingPostData
    ])
  },
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-2.png'
  },
  components: {
    StepTwoInsuranceData,
    StepTwoEnSureContent,
    StepTwoCalculateTitle
  }
}

</script>
