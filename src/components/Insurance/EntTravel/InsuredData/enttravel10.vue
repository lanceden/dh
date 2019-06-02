<template>
  <TravelTen :stateData="GetEntTravelPostData"></TravelTen>
</template>

<script>
import { mapGetters } from 'vuex'
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'
import TravelTen from '../../Common/travel/travelTen'

export default {
  computed: {
    ...mapGetters([
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  },
  components: {
    TravelTen
  }
}

</script>
