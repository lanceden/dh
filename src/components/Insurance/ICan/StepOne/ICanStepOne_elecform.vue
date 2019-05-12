<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
            <div class="insure-check-title">電子保單</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="insure-text">
        「為響應政府節能減碳政策，愛護地球並為環保盡一份心力，本商品僅提供電子保單。」
      </div>
      <div class="border-bottom-line"></div>

      <form class="form-bottom">
        <div class="top col-sm-12" @click="OnCheck(true)">
          <div class="insure-notice-box">
            <div class="insure-check"><img :src="ensure.yes" alt=""></div>
            <div class="insure-check-content">同意</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnCheck(false)">
          <div class="insure-notice-box">
            <div class="insure-check"><img :src="ensure.no" alt=""></div>
            <div class="insure-check-content">不同意</div>
          </div>
        </div>
      </form>
    </div>
    <div class="form-group rowx" v-show="isDisAgree">
      <label for="" class="col-sm-12 col-form-label insure-label text-with-select sorry">很抱歉，本商品目前只提供電子保單。</label>
    </div>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-4 footer-title footer-left" @click="GoPrev()">回前一頁</div>
          <div class="col-sm-8 footer-title " :class="{ 'footer-gary': false, 'footer-right': true }" @click="GotoNext()">確定送出</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes'
import FunctionTypes from '../../../../store/modules/ICan/Types/ICanFunctionTypes'
import { toggleModalShow } from '../../../../utils/toggleModal'
export default {
  data() {
    return {
      ensure: {
        yes: '../../../../../static/img/oval.png',
        no: '../../../../../static/img/oval.png'
      },
      isDisAgree: false
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetICanElecFormIsRed
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncICanElecFormIsRead
    ]),
    GoPrev() {
      this.$router.push(`/icanelecform?leave=true&token=${this.$store.state.ApiToken}`)
    },
    GotoNext() {
      if (this.GetICanElecFormIsRed) {
        this.$router.push(`/ICan-1?token=${this.$store.state.ApiToken}`)
      } else {
        toggleModalShow('我們將帶您回首頁。')
        this.$router.push(`/icanelecform?leave=true&token=${this.$store.state.ApiToken}`)
      }
    },
    /**
     * 是否同意電子保單
     * @param {bool} value 同意: true 不同意: false
     */
    OnCheck(value) {
      this.FuncICanElecFormIsRead(value)
      if (value) {
        this.ensure.yes = '../../../../../static/img/oval-ed.png'
        this.ensure.no = '../../../../../static/img/oval.png'
      } else {
        this.ensure.yes = '../../../../../static/img/oval.png'
        this.ensure.no = '../../../../../static/img/oval-ed.png'
      }
      this.isDisAgree = !value
    }
  }
}

</script>
<style scoped>
.insure-times-active {
  color: red;
}

</style>
