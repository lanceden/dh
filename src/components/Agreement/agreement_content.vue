<template>
  <div class="bg-radius" @click="OnToggle()">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img :src="read" alt=""></div>
          <div class="insure-check-title">{{provisionname}}</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="col-sm-12">
      <div class="provision" v-show="isToggle || this.$store.state.AGREEMENTTOGGLE" :class="{ height100: isToggle || this.$store.state.AGREEMENTTOGGLE }" v-html="GetProvisionData[this.provisionindex] !== undefined ? GetProvisionData[this.provisionindex].Result.Content : ''">
      </div>
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
.provision {
  height: 300px;
  overflow: hidden;
  overflow-x: hidden;
}

.height100 {
  height: 100%;
}

</style>
