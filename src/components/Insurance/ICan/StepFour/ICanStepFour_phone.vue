<template>
  <div>
    <VisitTime :stateData="GetICanPostData"></VisitTime>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
import VisitTime from '../../Common/visittime'
export default {
  components: {
    VisitTime
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetICanPostData
    ])
  }
}

</script>
