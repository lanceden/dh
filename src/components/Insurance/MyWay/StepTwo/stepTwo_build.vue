<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoInsuranceData></StepTwoInsuranceData>
    <StepTwoCalculateTitle></StepTwoCalculateTitle>
    <StepTwoCalculateResult></StepTwoCalculateResult>
    <StepTwoFooter></StepTwoFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import StepTwoInsuranceData from './stepTwo_insurdata'
import StepTwoCalculateTitle from './stepTwo_calculatetitle'
import StepTwoCalculateResult from './stepTwo_calculateresult'
import StepTwoFooter from './stepTwo_footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetMyWayPostData
    ])
  },
  created() {
    console.log(this.GetMyWayPostData.ins_type_name)
  },
  components: {
    StepTwoInsuranceData,
    StepTwoCalculateTitle,
    StepTwoCalculateResult,
    StepTwoFooter
  }
}

</script>
