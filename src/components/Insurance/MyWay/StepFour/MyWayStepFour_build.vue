<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <StepFourPhone></StepFourPhone>
    <StepFourSendType></StepFourSendType>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StepFourOtherNotify from './MyWayStepFour_othernotify'
import StepFourPhone from './MyWayStepFour_phone'
import StepFourSendType from './MyWayStepFour_sendtype'
import StepFourFooter from './MyWayStepFour_footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    StepFourOtherNotify,
    StepFourPhone,
    StepFourSendType,
    StepFourFooter
  }
}

</script>
