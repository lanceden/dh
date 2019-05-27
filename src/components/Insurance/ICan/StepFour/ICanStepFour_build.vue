<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <VisitTime :stateData="GetICanPostData"></VisitTime>
    <StepFourSendType></StepFourSendType>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ICanGetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
import StepFourOtherNotify from './ICanStepFour_othernotify'
import VisitTime from '../../Common/visittime'
import StepFourSendType from './ICanStepFour_sendtype'
import StepFourFooter from './ICanStepFour_footer'

export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      ICanGetterTypes.GetICanPostData
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
