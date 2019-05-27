<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <VisitTime :stateData="GetIWellPostData"></VisitTime>
    <StepFourSendType></StepFourSendType>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IWellGetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import StepFourOtherNotify from './IWellStepFour_othernotify'
import VisitTime from '../../Common/visittime'
import StepFourSendType from './IWellStepFour_sendtype'
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
    StepFourSendType,
    StepFourFooter
  }
}

</script>
