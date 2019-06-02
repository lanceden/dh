<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <VisitTime :stateData="GetIWellPostData"></VisitTime>
    <ElecFormComponent :stateData="GetIWellPostData"></ElecFormComponent>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IWellGetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import StepFourOtherNotify from './IWellStepFour_othernotify'
import VisitTime from '../../Common/visittime'
import ElecFormComponent from '../../Common/elecform'
import StepFourFooter from './IWellStepFour_footer'

export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      IWellGetterTypes.GetIWellPostData
    ])
  },
  components: {
    StepFourOtherNotify,
    VisitTime,
    ElecFormComponent,
    StepFourFooter
  }
}

</script>
