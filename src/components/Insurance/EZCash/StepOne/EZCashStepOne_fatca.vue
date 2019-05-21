<template>
  <FatcaComponent :stateData="GetEZCashPostData"></FatcaComponent>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
import FatcaComponent from '../../Common/fatca'

export default {
  components: {
    FatcaComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetEZCashPostData
    ])
  }
}

</script>
