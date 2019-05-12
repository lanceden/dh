<template>
  <div class="">
    <loading v-show="GetLoading" />
    <!-- 本人 -->
    <TravelThree v-for="n in this.GetEntTravelPostData.PolicyData.InsuredInfo.length" :key="n" :index="n - 1"></TravelThree>
    <!-- 子女 -->
    <TravelChild v-for="n in this.GetEntTravelPostData.PolicyData.InsuredInfo.length" :key="n + 'c'" :index="n - 1"></TravelChild>
    <TravelThreeFooter></TravelThreeFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'
import TravelThree from './enttravel3'
import TravelChild from './enttravel3child'
import TravelThreeFooter from './enttravel3Footer'

export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  },
  components: {
    TravelThree,
    TravelChild,
    TravelThreeFooter
  }
}

</script>
