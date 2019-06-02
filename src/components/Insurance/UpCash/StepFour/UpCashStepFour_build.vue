<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <!-- 電訪時間 -->
    <VisitTime :stateData="GetUpCashPostData"></VisitTime>
    <CommunityAddressComponent :stateData="GetUpCashPostData" :useType="send"></CommunityAddressComponent>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UpCashGetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import StepFourOtherNotify from './UpCashStepFour_othernotify'
import VisitTime from '../../Common/visittime.vue'
import CommunityAddressComponent from '../../Common/communityAddress.vue'
import StepFourFooter from './UpCashStepFour_footer'

export default {
  data() {
    return {
      send: 'send'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      UpCashGetterTypes.GetUpCashPostData
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
