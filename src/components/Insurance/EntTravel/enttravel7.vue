<template>
  <TravelSeven :stateData="GetEntTravelPostData"></TravelSeven>
</template>

<script>
import { mapGetters } from 'vuex'
import EntTravelGetterTypes from '../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'
import TravelSeven from '../Common/travel/travelSeven.vue'

export default {
  components: {
    TravelSeven
  },
  computed: {
    ...mapGetters([
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  }
}

</script>
