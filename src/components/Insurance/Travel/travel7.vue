<template>
  <TravelSeven :stateData="GetTravelPostData"></TravelSeven>
</template>

<script>
import { mapGetters } from 'vuex'
import TravelGetterTypes from '../../../store/modules/Travel/Types/TravelGetterTypes.js'
import TravelSeven from '../Common/travel/travelSeven.vue'

export default {
  components: {
    TravelSeven
  },
  computed: {
    ...mapGetters([
      TravelGetterTypes.GetTravelPostData
    ])
  }
}

</script>
