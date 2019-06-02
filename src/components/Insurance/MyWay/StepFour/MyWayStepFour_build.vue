<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <VisitTime :stateData="GetMyWayPostData"></VisitTime>
    <CommunityAddressComponent :stateData="GetMyWayPostData" :useType="send"></CommunityAddressComponent>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MyWayGetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import StepFourOtherNotify from './MyWayStepFour_othernotify'
import VisitTime from '../../Common/visittime'
import CommunityAddressComponent from '../../Common/communityAddress'
import StepFourFooter from './MyWayStepFour_footer'

export default {
  data() {
    return {
      send: 'send'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      MyWayGetterTypes.GetMyWayPostData
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
