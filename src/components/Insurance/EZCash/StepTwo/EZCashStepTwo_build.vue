<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoInsuranceData></StepTwoInsuranceData>
    <StepTwoAnnuity></StepTwoAnnuity>
    <StepTwoNotify></StepTwoNotify>
    <StepTwoCalculateTitle></StepTwoCalculateTitle>
    <StepTwoCalculateResult></StepTwoCalculateResult>
    <StepTwoFooter></StepTwoFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes'
import StepTwoInsuranceData from './EZCashStepTwo_insurdata'
import StepTwoAnnuity from './EZCashStepTwo_annuity'
import StepTwoNotify from './EZCashStepTwo_notify'
import StepTwoCalculateTitle from './EZCashStepTwo_calculatetitle'
import StepTwoCalculateResult from './EZCashStepTwo_calculateresult'
import StepTwoFooter from './EZCashStepTwo_footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetEZCashPostData
    ])
  },
  created() {
    console.log(this.GetEZCashPostData.ins_type_name)
  },
  components: {
    StepTwoInsuranceData,
    StepTwoAnnuity,
    StepTwoNotify,
    StepTwoCalculateTitle,
    StepTwoCalculateResult,
    StepTwoFooter
  }
}

</script>
