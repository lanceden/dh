<template>
  <div>
    <loading v-show="GetLoading" />
    <TravelOne></TravelOne>
    <!-- 基本資料 End -->
    <TravelOneInsureData 
    v-for="n in TravelDataLength" :key="n" :index="n - 1"></TravelOneInsureData>
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
    ]),
    TravelDataLength: {
      get() {
        if (!this.GetTravelPostData.PolicyData || this.GetTravelPostData.PolicyData.InsuredInfo === null) return 0
        return this.GetTravelPostData.PolicyData.InsuredInfo.length
      }
    }
  },
  components: {
    TravelOne,
    TravelOneInsureData,
    TravelOneFooter
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncTravelInit
    ])
  }
}

</script>
