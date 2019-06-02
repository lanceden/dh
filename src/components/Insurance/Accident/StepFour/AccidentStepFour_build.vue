<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <VisitTime :stateData="GetAccidentPostData"></VisitTime>
    <CommunityAddressComponent :stateData="GetAccidentPostData" :useType="send"></CommunityAddressComponent>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AccidentGetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'
import StepFourOtherNotify from './AccidentStepFour_othernotify'
import VisitTime from '../../Common/visittime'
import CommunityAddressComponent from '../../Common/communityAddress'
import StepFourFooter from './AccidentStepFour_footer'

export default {
  data() {
    return {
      send: 'send'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      AccidentGetterTypes.GetAccidentPostData
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
