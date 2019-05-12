<template>
  <div>
    <VisitTime :stateData="GetMyWayPostData"></VisitTime>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import VisitTime from '../../Common/visittime'
export default {
  components: {
    VisitTime
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetMyWayPostData
    ])
  }
}

</script>
