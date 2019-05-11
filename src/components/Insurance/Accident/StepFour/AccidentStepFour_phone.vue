<template>
  <div>
    <VisitTime :stateData="GetAccidentPostData"></VisitTime>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'
import VisitTime from '../../Common/visittime'
export default {
  components: {
    VisitTime
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetAccidentPostData
    ])
  }
}

</script>
