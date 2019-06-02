<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <VisitTime :stateData="GetHealthPostData"></VisitTime>
    <CommunityAddressComponent :stateData="GetHealthPostData" :useType="send"></CommunityAddressComponent>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HealthGetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
import StepFourOtherNotify from './HealthStepFour_othernotify'
import VisitTime from '../../Common/visittime'
import CommunityAddressComponent from '../../Common/communityAddress'
import StepFourFooter from './HealthStepFour_footer'
export default {
  data() {
    return {
      send: 'send'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      HealthGetterTypes.GetHealthPostData
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
