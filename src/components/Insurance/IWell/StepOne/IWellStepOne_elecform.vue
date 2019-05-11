<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">電子保單</div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        「為響應政府節能減碳政策，愛護地球並為環保盡一份心力，本商品僅提供電子保單。」
      </div>
      <div class="row insure-time-box">
        <div class="col-sm-12" @click="OnCheck(true)">
          <div :class="{ 'insure-times-active': isAgree }" class="insure-times">
            同意<br>
          </div>
        </div>
        <div class="col-sm-12" @click="OnCheck(false)">
          <div :class="{ 'insure-times-active': isDisAgree }" class="insure-times">
            不同意<br>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-radius" v-show="isDisAgree">
      <div class="col-sm-12">
        <div class="insure-tips">很抱歉，本商品目前只提供電子保單</div>
      </div>
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
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import FunctionTypes from '../../../../store/modules/IWell/Types/IWellFunctionTypes.js'
import { toggleModalShow } from '../../../../utils/toggleModal'

export default {
  data() {
    return {
      isAgree: false,
      isDisAgree: false
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIWellElecFormIsRed
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncIWellElecFormIsRead
    ]),
    GoPrev() {
      this.$router.push(`/iwellelecform?leave=true&token=${this.$store.state.ApiToken}`)
    },
    GotoNext() {
      if (this.GetIWellElecFormIsRed) {
        this.$router.push(`/IWell-1?token=${this.$store.state.ApiToken}`)
      } else {
        toggleModalShow('我們將帶您回到網站之首頁。')
      }
    },
    /**
     * 是否同意電子保單
     * @param {bool} value 同意: true 不同意: false
     */
    OnCheck(value) {
      this.FuncIWellElecFormIsRead(value)
      this.isAgree = value
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
