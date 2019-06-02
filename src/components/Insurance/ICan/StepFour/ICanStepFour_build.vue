<template>
  <div>
    <loading v-show="GetLoading" />
    <StepFourOtherNotify></StepFourOtherNotify>
    <VisitTime :stateData="GetICanPostData"></VisitTime>
    <ElecFormComponent :stateData="GetICanPostData"></ElecFormComponent>
    <StepFourFooter></StepFourFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ICanGetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
import StepFourOtherNotify from './ICanStepFour_othernotify'
import VisitTime from '../../Common/visittime'
import ElecFormComponent from '../../Common/elecform.vue'
import StepFourFooter from './ICanStepFour_footer'

export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      ICanGetterTypes.GetICanPostData
    ])
  },
  components: {
    StepFourOtherNotify,
    VisitTime,
    ElecFormComponent,
    StepFourFooter
  }
}

</script>
