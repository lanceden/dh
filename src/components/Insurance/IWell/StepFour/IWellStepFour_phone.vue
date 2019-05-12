<template>
  <div>
    <VisitTime :stateData="GetIWellPostData"></VisitTime>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import VisitTime from '../../Common/visittime'
export default {
  components: {
    VisitTime
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIWellPostData
    ])
  }
}

</script>
