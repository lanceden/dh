<template>
  <div>
    <VisitTime :stateData="GetHealthPostData"></VisitTime>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
import VisitTime from '../../Common/visittime'
export default {
  components: {
    VisitTime
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetHealthPostData
    ])
  }
}

</script>
