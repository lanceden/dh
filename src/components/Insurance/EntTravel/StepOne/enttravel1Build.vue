<template>
  <div>
    <loading v-show="GetLoading" />
    <TravelOne></TravelOne>
    <!-- 基本資料 End -->
    <template>
      <div v-if="this.GetEntTravelPostData.length !== 0">
        <template>
          <div v-if="this.GetEntTravelPostData.PolicyData.InsuredInfo !== null">
            <TravelOneInsureData
              v-for="n in this.GetEntTravelPostData.PolicyData.InsuredInfo.length" :key="n" :index="n - 1"></TravelOneInsureData>
          </div>
        </template>
      </div>
    </template>
    <TravelOneFooter></TravelOneFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EntTravelFunctionTypes from '../../../../store/modules/EntTravel/Types/EntTravelFunctionTypes.js'
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'
import TravelOne from './enttravel1'
import TravelOneInsureData from './enttravel1-insuredata'
import TravelOneFooter from './enttravel1Footer'
export default {
  created() {
    if (!this.GetEntTravelIsInit) {
      // 初始化旅平險資料
      this.FuncEntTravelInit()
      this.$store.state.PLANNAME = 'TRAVEL'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      EntTravelGetterTypes.GetEntTravelIsInit,
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  },
  components: {
    TravelOne,
    TravelOneInsureData,
    TravelOneFooter
  },
  methods: {
    ...mapActions([
      'SetTitle',
      EntTravelFunctionTypes.FuncEntTravelInit
    ])
  }
}

</script>
