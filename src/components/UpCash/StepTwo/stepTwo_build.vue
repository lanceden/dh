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
import GetterTypes from '../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import StepTwoInsuranceData from './stepTwo_insurdata'
import StepTwoNoteACH from './stepTwo_noteach'
import StepTwoAnnuity from './stepTwo_annuity'
import StepTwoNotify from './stepTwo_notify'
import StepTwoCalculateTitle from './stepTwo_calculatetitle'
import StepTwoCalculateResult from './stepTwo_calculateresult'
import StepTwoFooter from './stepTwo_footer'
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
