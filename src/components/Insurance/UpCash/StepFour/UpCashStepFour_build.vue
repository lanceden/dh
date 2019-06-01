<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <!-- 電訪時間 -->
    <VisitTime :stateData="GetUpCashPostData"></VisitTime>
    <StepFourSendType></StepFourSendType>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UpCashGetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import StepFourOtherNotify from './UpCashStepFour_othernotify'
import VisitTime from '../../Common/visittime.vue'
import StepFourSendType from './UpCashStepFour_sendtype'
import StepFourFooter from './UpCashStepFour_footer'

export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      UpCashGetterTypes.GetUpCashPostData
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
