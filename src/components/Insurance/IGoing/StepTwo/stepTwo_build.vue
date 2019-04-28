<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoInsuranceData></StepTwoInsuranceData>
    <StepTwoBaoZhangContent></StepTwoBaoZhangContent>
    <StepTwoCalculateTitle></StepTwoCalculateTitle>
    <StepTwoCalculateResult></StepTwoCalculateResult>
    <StepTwoFooter></StepTwoFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import StepTwoInsuranceData from './stepTwo_insurdata'
import StepTwoBaoZhangContent from './stepTwo_baozhangcontent'
import StepTwoCalculateTitle from './stepTwo_calculatetitle'
import StepTwoCalculateResult from './stepTwo_calculateresult'
import StepTwoFooter from './stepTwo_footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetIGoingPostData
    ])
  },
  created() {
    console.log(this.GetIGoingPostData.ins_type_name)
  },
  components: {
    StepTwoInsuranceData,
    StepTwoBaoZhangContent,
    StepTwoCalculateTitle,
    StepTwoCalculateResult,
    StepTwoFooter
  }
}

</script>
