<template>
  <div>
    <loading v-show="GetLoading" />
    <ContactComponent :stateData="GetIGoingPostData"></ContactComponent>
    <StepThreeFooter></StepThreeFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IGoingGetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import ContactComponent from '../../Common/contact'
import StepThreeFooter from './IGoingStepThree_footer'

export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-3.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      IGoingGetterTypes.GetIGoingPostData
    ])
  },
  components: {
    ContactComponent,
    StepThreeFooter
  }
}

</script>
