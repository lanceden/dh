<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <VisitTime :stateData="GetMyWayPostData"></VisitTime>
    <StepFourSendType></StepFourSendType>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MyWayGetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import StepFourOtherNotify from './MyWayStepFour_othernotify'
import VisitTime from '../../Common/visittime'
import StepFourSendType from './MyWayStepFour_sendtype'
import StepFourFooter from './MyWayStepFour_footer'

export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      MyWayGetterTypes.GetMyWayPostData
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
