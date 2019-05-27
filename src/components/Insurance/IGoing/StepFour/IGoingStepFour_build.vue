<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <VisitTime :stateData="GetIGoingPostData"></VisitTime>
    <StepFourSendType></StepFourSendType>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IGoingGetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import StepFourOtherNotify from './IGoingStepFour_othernotify'
import VisitTime from '../../Common/visittime'
import StepFourSendType from './IGoingStepFour_sendtype'
import StepFourFooter from './IGoingStepFour_footer'

export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      IGoingGetterTypes.GetIGoingPostData
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
