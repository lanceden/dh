<template lang="">
  <div>
    <StepFourOtherNotify></StepFourOtherNotify>
    <StepFourPhone></StepFourPhone>
    <StepFourSendType></StepFourSendType>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import StepFourOtherNotify from './IGoingStepFour_othernotify'
import StepFourPhone from './IGoingStepFour_phone'
import StepFourSendType from './IGoingStepFour_sendtype'
import StepFourFooter from './IGoingStepFour_footer'
export default {
  components: {
    StepFourOtherNotify,
    StepFourPhone,
    StepFourSendType,
    StepFourFooter
  }
}

</script>
