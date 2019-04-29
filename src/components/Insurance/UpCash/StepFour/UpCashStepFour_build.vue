<template lang="">
  <div>
    <StepFourOtherNotify></StepFourOtherNotify>
    <StepFourPhone></StepFourPhone>
    <StepFourSendType></StepFourSendType>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import StepFourOtherNotify from './UpCashStepFour_othernotify'
import StepFourPhone from './UpCashStepFour_phone'
import StepFourSendType from './UpCashStepFour_sendtype'
import StepFourFooter from './UpCashStepFour_footer'
export default {
  components: {
    StepFourOtherNotify,
    StepFourPhone,
    StepFourSendType,
    StepFourFooter
  }
}

</script>
