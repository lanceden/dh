<template>
  <div>
    <div class="bg-radius" :id="contentId" @click="OnToggle" v-scroll-to="{
      el: '#divAgreement' + 
        ((parseInt(this.provisionindex) + 1) !== this.$store.state.AGREEMENTCOUNT 
        ? (parseInt(this.provisionindex) + 1) : 'Footer'),
      duration: 1500,
      offset: -60,
      easing: 'linear',
      force: true,
      onDone: onDone
    }">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img :src="read" alt=""></div>
            <div class="insure-check-title text-left">{{provisionname}}</div>
          </div>
        </div>
      </div>
      <div class="insure-text">
        <div class="decimal" 
        v-show="isToggle || this.$store.state.AGREEMENTTOGGLE" 
        :class="{ height100: isToggle || this.$store.state.AGREEMENTTOGGLE }" 
        v-html="provisionContent"></div>
      </div>
    </div>
    <div v-if="(parseInt(this.provisionindex) + 1) === this.$store.state.AGREEMENTCOUNT " id="divAgreementFooter"></div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { scroller } from 'vue-scrollto/src/scrollTo'

export default {
  data() {
    return {
      isToggle: false,
      ensure: {
        toggle: false
      },
      read: '../../../static/img/oval.png'
    }
  },
  mounted() {
    setTimeout(() => {
      this.FuncGetProvision(this.provisionname)
    }, 1000)
  },
  props: [
    'provisionindex',
    'provisionname'
  ],
  computed: {
    ...mapGetters([
      'GetProvision',
      'GetProvisionData'
    ]),
    provisionContent() {
      let result = ''
      this.GetProvisionData.forEach(item => {
        if(item.provisionName === this.provisionname) {
          result = item.Result.Content
        }
      })
      return result
    },
    contentId() {
      return `divAgreement${this.provisionindex}`
    },
    isToggleAll() {
      return this.$store.state.AGREEMENTTOGGLE
    }
  },
  methods: {
    ...mapActions([
      'FuncGetProvision'
    ]),
    onDone(target) {
      const firstScrollTo = scroller()
      if (target === 'divAgreementFooter') {
        firstScrollTo('#divAgreementFooter')
      }
    },
    OnToggle(event) {
      this.isToggle = !this.isToggle
      if (!this.ensure.toggle) {
        this.ensure.toggle = true
        this.$store.state.CHECKAGREEMENTCOUNT += 1
      }
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

}
