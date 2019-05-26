<template>
  <div>
    <loading v-show="GetLoading" />
    <ContactComponent :stateData="GetIWellPostData"></ContactComponent>
    <StepThreeFooter></StepThreeFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContactComponent from '../../Common/contact'
import StepThreeFooter from './IWellStepThree_footer'
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'

export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-3.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetIWellPostData
    ])
  },
  components: {
    ContactComponent,
    StepThreeFooter
  }
}

</script>
