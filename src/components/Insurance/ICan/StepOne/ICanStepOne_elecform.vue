<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
          <div class="insure-check-title">電子保單</div>
        </div>
      </div>
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
        <label v-show="isDisAgree">很抱歉，本商品目前只提供電子保單</label>
      </div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-12 footer-title footer-right" @click="GotoNext()">下一步</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes'
import FunctionTypes from '../../../../store/modules/ICan/Types/ICanFunctionTypes'
import { getQueryStringParameterByKey } from '../../../../utils/getQueryStringParameterByKey'
import { toggleModalShow } from '../../../../utils/toggleModal'
export default {
  data() {
    return {
      isAgree: false,
      isDisAgree: false
    }
  },
  created() {
    const tokenArr = getQueryStringParameterByKey('token').split(' ')
    let token = ''
    tokenArr.forEach(item => {
      token += `+${item}`
    })
    this.SetApiToken({ token: token.replace('+', '') })
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetICanElecFormIsRed
    ])
  },
  methods: {
    ...mapActions([
      'SetApiToken',
      FunctionTypes.FuncICanElecFormIsRead
    ]),
    GotoNext() {
      if (this.GetICanElecFormIsRed) {
        this.$router.push(`/ICan-1?token=${this.$store.state.ApiToken}`)
      } else {
        toggleModalShow('我們將帶您回到網站之首頁。')
      }
    },
    /**
     * 是否同意電子保單
     * @param {bool} value 同意: true 不同意: false
     */
    OnCheck(value) {
      this.FuncICanElecFormIsRead(value)
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
