<template lang="">
  <div>
    <StepFourOtherNotify></StepFourOtherNotify>
    <StepFourPhone></StepFourPhone>
    <StepFourSendType></StepFourSendType>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import StepFourOtherNotify from './ICanStepFour_othernotify'
import StepFourPhone from './ICanStepFour_phone'
import StepFourSendType from './ICanStepFour_sendtype'
import StepFourFooter from './ICanStepFour_footer'
export default {
  components: {
    StepFourOtherNotify,
    StepFourPhone,
    StepFourSendType,
    StepFourFooter
  }
}

</script>
