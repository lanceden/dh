<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <!-- 電訪時間 -->
    <VisitTime :stateData="GetEZCashPostData"></VisitTime>
    <CommunityAddressComponent :stateData="GetEZCashPostData" :useType="send"></CommunityAddressComponent>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EZCashGetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes'
import StepFourOtherNotify from './EZCashStepFour_othernotify'
import VisitTime from '../../Common/visittime.vue'
import CommunityAddressComponent from '../../Common/communityAddress.vue'
import StepFourFooter from './EZCashStepFour_footer'

export default {
  data() {
    return {
      send: 'send'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      EZCashGetterTypes.GetEZCashPostData
    ])
  },
  components: {
    StepFourOtherNotify,
    VisitTime,
    CommunityAddressComponent,
    StepFourFooter
  }
}

</script>
