<template>
  <div>
    <loading v-show="GetLoading" />
    <TravelOne></TravelOne>
    <!-- 基本資料 End -->
    <template>
      <div v-if="this.GetTravelPostData.length !== 0">
        <template>
          <div v-if="this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo !== null">
            <TravelOneInsureData
              v-for="n in this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.length" :key="n" :index="n - 1"></TravelOneInsureData>
          </div>
        </template>
      </div>
    </template>
    <TravelOneFooter></TravelOneFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/Travel/Types/TravelFunctionTypes.js'
import GetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'
import TravelOne from './travel1'
import TravelOneInsureData from './travel1-insuredata'
import TravelOneFooter from './travel1Footer'
export default {
  created() {
    if (!this.GetTravelIsInit) {
      // 初始化旅平險資料
      this.FuncTravelInit()
      this.$store.state.PLANNAME = 'TRAVEL'
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetTravelIsInit,
      GetterTypes.GetTravelPostData
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
      FunctionTypes.FuncTravelInit
    ])
  }
}

</script>
