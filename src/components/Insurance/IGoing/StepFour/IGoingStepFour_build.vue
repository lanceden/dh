<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <VisitTime :stateData="GetIGoingPostData"></VisitTime>
    <CommunityAddressComponent :stateData="GetIGoingPostData" :useType="send"></CommunityAddressComponent>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IGoingGetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import StepFourOtherNotify from './IGoingStepFour_othernotify'
import VisitTime from '../../Common/visittime'
import CommunityAddressComponent from '../../Common/communityAddress'
import StepFourFooter from './IGoingStepFour_footer'

export default {
  data() {
    return {
      send: 'send'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      IGoingGetterTypes.GetIGoingPostData
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
