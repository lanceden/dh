<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <VisitTime :stateData="GetHealthPostData"></VisitTime>
    <StepFourSendType></StepFourSendType>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HealthGetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
import StepFourOtherNotify from './HealthStepFour_othernotify'
import VisitTime from '../../Common/visittime'
import StepFourSendType from './HealthStepFour_sendtype'
import StepFourFooter from './HealthStepFour_footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      HealthGetterTypes.GetHealthPostData
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
