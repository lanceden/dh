<template>
  <div>
    <loading v-show="false" />
    <TravelOne></TravelOne>
    <TravelOneFooter></TravelOneFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/Travel/Types/TravelFunctionTypes.js'
import GetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'
import TravelOne from './travel1'
import TravelOneFooter from './travel1Footer'

export default {
  created() {
    if (!this.GetTravelIsInit) {
      // 初始化旅平險資料
      this.FuncTravelInit()
      this.$store.state.PLANNAME = 'TRAVEL'
    }
    console.log('this.$store.state.PLANNAME', this.$store.state.PLANNAME)
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetTravelIsInit
    ])
  },
  components: {
    TravelOne,
    TravelOneFooter
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncTravelInit
    ])
  }
}

</script>
