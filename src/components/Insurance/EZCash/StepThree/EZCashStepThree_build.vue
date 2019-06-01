<template>
  <div>
    <loading v-show="GetLoading" />
    <ContactComponent :stateData="GetEZCashPostData"></ContactComponent>
    <MoneyTransfer :stateData="GetEZCashPostData"></MoneyTransfer>
    <StepThreeFooter></StepThreeFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EZCashGetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes'
import MoneyTransfer from '../../Common/moneyTransfer.vue'
import ContactComponent from '../../Common/contact.vue'
import StepThreeFooter from './EZCashStepThree_footer'
export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-3.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      EZCashGetterTypes.GetEZCashPostData
    ])
  },
  components: {
    MoneyTransfer,
    ContactComponent,
    StepThreeFooter
  }
}

</script>
