<template>
  <AnnuityDeal :stateData="GetEZCashPostData"></AnnuityDeal>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
import AnnuityDeal from '../../Common/annuityDeal.vue'
export default {
  components: {
    AnnuityDeal
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetEZCashPostData
    ])
  }
}

</script>
