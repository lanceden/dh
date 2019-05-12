<template>
  <div>
    <MoneyTransfer :stateData="GetMyWayPostData"></MoneyTransfer>
    <MyWayStepThreeFooter></MyWayStepThreeFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MyWayStepThreeFooter from './MyWayStepThree_footer'
import MoneyTransfer from '../../Common/moneyTransfer'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes'
export default {
  components: {
    MoneyTransfer,
    MyWayStepThreeFooter
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetMyWayPostData
    ])
  }
}

</script>
