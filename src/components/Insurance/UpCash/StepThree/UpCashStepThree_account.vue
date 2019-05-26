<template>
  <MoneyTransfer :stateData="GetUpCashPostData"></MoneyTransfer>
</template>

<script>
import { mapGetters } from 'vuex'
import MoneyTransfer from '../../Common/moneyTransfer.vue'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes'
export default {
  components: {
    MoneyTransfer
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData
    ])
  }
}

</script>
