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
    console.log(this.GetIWellPostData.ins_type_name)
  },
  components: {
    StepTwoInsuranceData,
    StepTwoCalculateTitle,
    StepTwoEnsureContent
  }
}

</script>
