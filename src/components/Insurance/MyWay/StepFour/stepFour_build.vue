<template lang="">
  <div>
    <StepFourOtherNotify></StepFourOtherNotify>
    <StepFourPhone></StepFourPhone>
    <StepFourSendType></StepFourSendType>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import StepFourOtherNotify from './stepFour_othernotify'
import StepFourPhone from './stepFour_phone'
import StepFourSendType from './stepFour_sendtype'
import StepFourFooter from './stepFour_footer'
export default {
  components: {
    StepFourOtherNotify,
    StepFourPhone,
    StepFourSendType,
    StepFourFooter
  }
}

</script>
