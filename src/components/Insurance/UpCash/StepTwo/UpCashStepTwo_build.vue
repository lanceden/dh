<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoInsuranceData></StepTwoInsuranceData>
    <StepTwoNoteACH></StepTwoNoteACH>
    <StepTwoAnnuity></StepTwoAnnuity>
    <StepTwoNotify></StepTwoNotify>
    <StepTwoCalculateTitle></StepTwoCalculateTitle>
    <StepTwoCalculateResult></StepTwoCalculateResult>
    <StepTwoFooter></StepTwoFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import StepTwoInsuranceData from './UpCashStepTwo_insurdata'
import StepTwoNoteACH from './UpCashStepTwo_noteach'
import StepTwoAnnuity from './UpCashStepTwo_annuity'
import StepTwoNotify from './UpCashStepTwo_notify'
import StepTwoCalculateTitle from './UpCashStepTwo_calculatetitle'
import StepTwoCalculateResult from './UpCashStepTwo_calculateresult'
import StepTwoFooter from './UpCashStepTwo_footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetUpCashPostData
    ])
  },
  created() {
    console.log(this.GetUpCashPostData.ins_type_name)
  },
  components: {
    StepTwoInsuranceData,
    StepTwoNoteACH,
    StepTwoAnnuity,
    StepTwoNotify,
    StepTwoCalculateTitle,
    StepTwoCalculateResult,
    StepTwoFooter
  }
}

</script>
