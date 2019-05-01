<template>
  <MoneyTransfer :stateData="GetEZCashPostData"></MoneyTransfer>
</template>

<script>
import { mapGetters } from 'vuex'
import MoneyTransfer from '../../Common/moneyTransfer'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes'
export default {
  components: {
    MoneyTransfer
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetEZCashPostData
    ])
  }
}

</script>
