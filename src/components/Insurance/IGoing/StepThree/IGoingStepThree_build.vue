<template>
  <div>
    <loading v-show="GetLoading" />
    <StepThreeContact></StepThreeContact>
    <StepThreeFooter></StepThreeFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StepThreeContact from './IGoingStepThree_contact'
import StepThreeFooter from './IGoingStepThree_footer'
export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-3.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    StepThreeContact,
    StepThreeFooter
  }
}

</script>
