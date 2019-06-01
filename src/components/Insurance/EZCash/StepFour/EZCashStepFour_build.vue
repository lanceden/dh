<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <!-- 電訪時間 -->
    <VisitTime :stateData="GetEZCashPostData"></VisitTime>
    <StepFourSendType></StepFourSendType>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EZCashGetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes'
import StepFourOtherNotify from './EZCashStepFour_othernotify'
import VisitTime from '../../Common/visittime.vue'
import StepFourSendType from './EZCashStepFour_sendtype'
import StepFourFooter from './EZCashStepFour_footer'

export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      EZCashGetterTypes.GetEZCashPostData
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
