<template>
  <div class="bg-radius" @click="OnToggle()">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img :src="read" alt=""></div>
          <div class="insure-check-title text-left">{{provisionname}}</div>
        </div>
      </div>
    </div>
    <div class="insure-text">
      <div class="decimal" v-show="isToggle || this.$store.state.AGREEMENTTOGGLE" :class="{ height100: isToggle || this.$store.state.AGREEMENTTOGGLE }" v-html="GetProvisionData[this.provisionindex] !== undefined ? GetProvisionData[this.provisionindex].Result.Content : ''">條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容。容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容。</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      isToggle: false,
      read: '../../../static/img/oval.png'
    }
  },
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
      if (!this.isToggle) this.$store.state.AGREEMENTCOUNT -= 1
      this.isToggle = !this.isToggle
      this.read = '../../../static/img/oval-ed.png'
    }
  }
}

</script>
<style scoped>
.text-left {
  text-align: left;
}

.height100 {
  height: 100%;
}

</style>
