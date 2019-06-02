<template>
  <TravelTen :stateData="GetTravelPostData"></TravelTen>
</template>

<script>
import { mapGetters } from 'vuex'
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'
import TravelTen from '../../Common/travel/travelTen'

export default {
  computed: {
    ...mapGetters([
      TravelGetterTypes.GetTravelPostData
    ])
  },
  components: {
    TravelTen
  }
}

</script>
