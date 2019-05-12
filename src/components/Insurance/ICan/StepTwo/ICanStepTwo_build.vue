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
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
import StepTwoInsuranceData from './ICanStepTwo_insurdata'
import StepTwoEnSureContent from './ICanStepTwo_ensurecontent'
import StepTwoCalculateTitle from './ICanStepTwo_calculatetitle'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetICanPostData
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
