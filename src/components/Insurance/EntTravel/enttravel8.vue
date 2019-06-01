<template>
  <TravelEight :stateData="GetEntTravelPostData"></TravelEight>
</template>

<script>
import { mapGetters } from 'vuex'
import EntTravelGetterTypes from '../../../store/modules/EntTravel/Types/EntTravelGetterTypes'
import TravelEight from '../Common/travelEight.vue'

export default {
  components: {
    TravelEight
  },
  computed: {
    ...mapGetters([
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  }
}

</script>
