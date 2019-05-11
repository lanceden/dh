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
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'
import StepTwoInsuranceData from './AccidentStepTwo_insurdata'
import StepTwoEnSureContent from './AccidentStepTwo_ensurecontent'
import StepTwoCalculateTitle from './AccidentStepTwo_calculatetitle'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetAccidentPostData
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
