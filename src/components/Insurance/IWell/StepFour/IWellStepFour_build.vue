<template lang="">
  <div>
    <StepFourOtherNotify></StepFourOtherNotify>
    <StepFourPhone></StepFourPhone>
    <StepFourSendType></StepFourSendType>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import StepFourOtherNotify from './IWellStepFour_othernotify'
import StepFourPhone from './IWellStepFour_phone'
import StepFourSendType from './IWellStepFour_sendtype'
import StepFourFooter from './IWellStepFour_footer'
export default {
  components: {
    StepFourOtherNotify,
    StepFourPhone,
    StepFourSendType,
    StepFourFooter
  }
}

</script>
