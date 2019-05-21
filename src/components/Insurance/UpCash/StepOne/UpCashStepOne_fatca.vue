<template>
  <FatcaComponent :stateData="GetUpCashPostData"></FatcaComponent>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import FatcaComponent from '../../Common/fatca'

export default {
  components: {
    FatcaComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData
    ])
  }
}

</script>
