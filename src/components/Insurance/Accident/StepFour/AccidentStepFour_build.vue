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
import StepFourOtherNotify from './AccidentStepFour_othernotify'
import StepFourPhone from './AccidentStepFour_phone'
import StepFourSendType from './AccidentStepFour_sendtype'
import StepFourFooter from './AccidentStepFour_footer'
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
