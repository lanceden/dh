<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <VisitTime :stateData="GetAccidentPostData"></VisitTime>
    <StepFourSendType></StepFourSendType>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AccidentGetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'
import StepFourOtherNotify from './AccidentStepFour_othernotify'
import VisitTime from '../../Common/visittime'
import StepFourSendType from './AccidentStepFour_sendtype'
import StepFourFooter from './AccidentStepFour_footer'

export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      AccidentGetterTypes.GetAccidentPostData
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
