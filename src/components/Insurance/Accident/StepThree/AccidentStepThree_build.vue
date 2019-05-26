<template>
  <div>
    <loading v-show="GetLoading" />
    <ContactComponent :stateData="GetAccidentPostData"></ContactComponent>
    <StepThreeFooter></StepThreeFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContactComponent from '../../Common/contact'
import StepThreeFooter from './AccidentStepThree_footer'
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'

export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-3.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetAccidentPostData
    ])
  },
  components: {
    ContactComponent,
    StepThreeFooter
  }
}

</script>
