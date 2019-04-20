<template>
  <div>
    <StepTwoInsuranceData></StepTwoInsuranceData>
    <StepTwoNoteACH></StepTwoNoteACH>
    <StepTwoEach></StepTwoEach>
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
import StepTwoEach from './stepTwo_each'
import StepTwoNotify from './stepTwo_notify'
import StepTwoCalculateTitle from './stepTwo_calculatetitle'
import StepTwoCalculateResult from './stepTwo_calculateresult'
import StepTwoFooter from './stepTwo_footer'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetPostData
    ])
  },
  created() {
    console.log(this.GetPostData.ins_type_name)
  },
  components: {
    StepTwoInsuranceData,
    StepTwoNoteACH,
    StepTwoEach,
    StepTwoNotify,
    StepTwoCalculateTitle,
    StepTwoCalculateResult,
    StepTwoFooter
  }
}

</script>
