<template>
  <div>
    <VisitTime :stateData="GetIGoingPostData"></VisitTime>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import VisitTime from '../../Common/visittime'
export default {
  components: {
    VisitTime
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIGoingPostData
    ])
  }
}

</script>
