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
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import StepTwoInsuranceData from './MyWayStepTwo_insurdata'
import StepTwoEnsureContent from './MyWayStepTwo_ensurecontent'
import StepTwoCalculateTitle from './MyWayStepTwo_calculatetitle'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetMyWayPostData
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
