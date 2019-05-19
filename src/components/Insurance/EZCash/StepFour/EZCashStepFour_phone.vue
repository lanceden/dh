<template>
  <div>
    <VisitTime :stateData="GetEZCashPostData"></VisitTime>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
import VisitTime from '../../Common/visittime'

export default {
  components: {
    VisitTime
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetEZCashPostData
    ])
  }
}

</script>
