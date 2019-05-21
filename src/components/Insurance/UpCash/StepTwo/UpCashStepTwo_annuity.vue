<template>
  <AnnuityDeal :stateData="GetUpCashPostData"></AnnuityDeal>
</template>
<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import AnnuityDeal from '../../Common/annuityDeal'
export default {
  components: {
    AnnuityDeal
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData
    ])
  }
}

</script>
