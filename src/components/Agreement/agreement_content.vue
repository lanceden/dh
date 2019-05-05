<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check insure-checked"><img src="../../../static/img/oval.png" alt=""></div>
            <div class="insure-check-title">{{provisionname}}</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="col-sm-12">
        <ul class="insure-text-notice">
          <li :class="{ height100: this.$store.state.AGREEMENTTOGGLE }" class="provision" v-html="GetProvisionData[this.provisionindex] !== undefined ? GetProvisionData[this.provisionindex].Result.Content : ''"></li>
        </ul>
        <div class="text-center table-more insure-more-img" @click="OnToggle()">{{this.$store.state.AGREEMENTTOGGLE ? '已閱讀' : '展開閱讀更多'}}<img src="../../../static/img/table-more.png" alt=""></div>
        </div>
      </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  created() {
    this.FuncGetProvision(this.GetProvision[this.provisionindex])
  },
  props: [
    'provisionindex',
    'provisionname'
  ],
  computed: {
    ...mapGetters([
      'GetProvision',
      'GetProvisionData'
    ])
  },
  methods: {
    ...mapActions([
      'FuncGetProvision'
    ]),
    OnToggle() {
      this.$store.state.AGREEMENTTOGGLE = !this.$store.state.AGREEMENTTOGGLE
    }
  }
}

</script>
<style scoped>
.provision {
  height: 300px;
  overflow: hidden;
  overflow-x: hidden;
}

.height100 {
  height: 100%;
}

</style>
