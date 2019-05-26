<template>
  <div>
    <loading v-show="GetLoading" />
    <ContactComponent :stateData="GetICanPostData"></ContactComponent>
    <StepThreeFooter></StepThreeFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContactComponent from '../../Common/contact'
import StepThreeFooter from './ICanStepThree_footer'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'

export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-3.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetICanPostData
    ])
  },
  components: {
    ContactComponent,
    StepThreeFooter
  }
}

</script>
