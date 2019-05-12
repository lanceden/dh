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
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import StepTwoInsuranceData from './IWellStepTwo_insurdata'
import StepTwoCalculateTitle from './IWellStepTwo_calculatetitle'
import StepTwoEnsureContent from './IWellStepTwo_ensurecontent'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetIWellPostData
    ])
  },
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-2.png'
  },
  components: {
    StepTwoInsuranceData,
    StepTwoCalculateTitle,
    StepTwoEnsureContent
  }
}

</script>
