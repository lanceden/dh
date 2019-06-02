<template>
  <div v-cloak>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../static/img/cointitle.png" alt=""></div>
            <div class="insure-check-title">請選擇繳費方式</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="bg-money">
        <div class="col-sm-12">
          <div class="font-label">本次投保的保險費為：</div>
          <div class="font-money" v-if="($store.state.PLANNAME.toLowerCase() === 'travel' || $store.state.PLANNAME.toLowerCase() === 'enttravel')">NT$ {{stateData.PolicyData.TotalPremium}} 元</div>
          <div class="font-money" v-else> NT$ {{stateData.mode_prem|decimalComma}} 元</div>
          <div class="money-icon"><img src="../../../static/img/coins.png" alt=""></div>
        </div>
      </div>
      <!-- 使用7-11統一超商ibon繳費 -->
      <div v-show="isSuperStore">
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnEnsure('P')">
            <div class="insure-check"><img :src="ensure.superStore" /></div>
            <div class="insure-check-content">使用7-11統一超商ibon繳費</div>
          </div>
        </div>
      </div>
      <!-- 使用信用卡 -->
      <div v-show="isCredieCard">
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnEnsure('C')">
            <div class="insure-check"><img :src="ensure.creditcard" /></div>
            <div class="insure-check-content">使用信用卡</div>
          </div>
        </div>
      </div>
      <!-- 使用活期性存款帳戶(手續費0元) -->
      <div v-show="isEbill">
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnEnsure('B')">
            <div class="insure-check"><img :src="ensure.ebill" /></div>
            <div class="insure-check-content">使用活期性存款帳戶(手續費0元)</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>
      <div class="col-sm-6 dib" @click='OnShowBanks()'>
        <div class="insure-tips-text">
          <img src="../../../static/img/insure-link.png">查詢線上繳費刷卡銀行
        </div>
      </div>
      <div class="col-sm-6 dib" @click='OnShowNotice()'>
        <div class="insure-tips-text">
          <img src="../../../static/img/insure-link.png">線上繳費注意事項
        </div>
      </div>
      <form class="form-bottom">
        <div class="col-sm-12">
          <div class="insure-tips-text text-red-i">
            請注意：<br />
            選擇活期性存款帳戶或信用卡進行繳費，必須使用要保人本人的帳戶或信用卡，且必須立即完成繳費成功才算完成投保!
          </div>
        </div>
      </form>
    </div>
    <!-- 選擇使用信用卡才顯示 -->
    <div class='bg-radius' v-show="init_method === 'C'">
      <div class='top'>
        <div class='top-title'>
          <div class='insure-notice-box'>
            <div class='insure-check'><img src='../../../static/img/creditcard2.png' alt=''></div>
            <div class='insure-check-title'>請填寫信用卡資訊</div>
          </div>
        </div>
      </div>
      <!-- 信用卡卡號 -->
      <form class='form-bottom'>
        <div class='insure-text'>
          限台灣核發之VISA、MASTER、JCB、UCard信用卡
        </div>
        <!-- 信用卡卡號 -->
        <div class='form-group row'>
          <label for='' class='col-sm-12 col-form-label insure-label'>信用卡卡號</label>
          <div class='col-sm-3' style="padding:0">
            <input  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type="number"
            id='codeOne' class='cc-num form-control insure-input otp-form-input font45px paymentColor' maxlength='4' v-model='codeOne' @keyup="keyup('codeOne', 'codeTwo')">
          </div>
          <div class='col-sm-3' style="padding:0">
            <input  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type="number" id='codeTwo' class='cc-num form-control insure-input otp-form-input font45px paymentColor' maxlength='4' v-model='codeTwo' @keyup="keyup('codeTwo', 'codeThree')">
          </div>
          <div class='col-sm-3' style="padding:0">
            <input  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type="number" id='codeThree' class='cc-num form-control insure-input otp-form-input font45px paymentColor' maxlength='4' v-model='codeThree' @keyup="keyup('codeThree', 'codeFour')">
          </div>
          <div class='col-sm-3' style="padding:0">
            <input  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type="number" id='codeFour' class='cc-num form-control insure-input otp-form-input font45px paymentColor' maxlength='4' v-model='codeFour' @keyup="keyup('codeFour', 'cc_from_month')">
          </div>
        </div>
        <!-- 有效期限起:UpCash才會顯示 -->
        <div class='form-group row' v-show="planName === 'upcash'">
          <label for='' class='col-sm-12 col-form-label insure-label'>有效期限起</label>
          <div class='col-sm-5 insure-select-align row'>
            <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type="number" id='cc_from_month' class='cc-num form-control insure-input font45px paymentColor' maxlength='2' v-model="sMonth" placeholder='請填寫'>
          </div>
          <div class='col-sm-5 insure-select-align row'>
            <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type="number" id='cc_from_year' class='cc-num form-control insure-input font45px paymentColor' maxlength='2' v-model="sYear"  placeholder='請填寫'>
          </div>
        </div>

        <!-- 有效期限迄 -->
        <div class='form-group row'>
          <label for='' class='col-sm-12 col-form-label insure-label'>有效期限迄</label>
          <div class='col-sm-5 insure-select-align row'>
            <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type="number" id='cc_exp_month' class='cc-num form-control insure-input font45px paymentColor' maxlength='2' placeholder='請填寫'>
          </div>
          <div class="col-sm-5 insure-select-align row">
            <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type="number" id='cc_exp_year' class='cc-num form-control insure-input font45px paymentColor' maxlength='2' placeholder='請填寫'>
          </div>
        </div>
        <div class='form-group row'>
          <label for='' class='col-sm-12 col-form-label insure-label'>卡片背後三碼</label>
          <div class='col-sm-12 insure-select-align'>
            <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type="number" id='cvv' pattern='\d{3}' class='cc-cvc form-control insure-input font45px paymentColor' placeholder="請填寫" maxlength='3' v-model='Cvv'>
          </div>
        </div>
        <!-- 花旗銀行分期  -->
        <div class="bg-radius" v-show='stateData.mode_prem > 3000 && $store.state.ISCITYBANKCARD'>
          <div class="top">
            <div class="top-title">
              <div class="insure-notice-box">
                <div class="insure-check"><img src="../../../static/img/notepad.png" alt=""></div>
                <div class="insure-check-title">是否分三期</div>
              </div>
            </div>
          </div>
          <div>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="top col-sm-12">
              <div class="insure-notice-box" @click="OnInstallmen(false)">
                <div class="insure-check"><img :src="ensure.installmentno" /></div>
                <div class="insure-check-content">否</div>
              </div>
            </div>
          </div>
          <div>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="top col-sm-12">
              <div class="insure-notice-box" @click="OnInstallmen(true)">
                <div class="insure-check"><img :src="ensure.installmentyes" /></div>
                <div class="insure-check-content">是</div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <form class="form-bottom">
        <div class="col-sm-12">
          <div class="insure-tips-text text-red-i">
            請注意<br>
            進入繳費畫面後即無法變更繳費方式，並請勿關閉視窗以完成投保！
          </div>
        </div>
      </form>
    </div>

    <div class="bg-radius" v-show="init_method === 'B'">
      <!-- 非約定-全繳網 -->
      <div @click="OnAccount(false)">
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box">
            <div class="insure-check"><img :src="ensure.eachNo" /></div>
            <div class="insure-check-content">非約定帳戶(e-Bill全國繳費網)</div>
          </div>
        </div>
      </div>
      <div 
      v-show="GetAccountData.AccountNo !== undefined && GetAccountData.AccountNo !== '' && GetAccountData.AccountNo !== null" 
      @click="OnAccount(true)">
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box">
            <div class="insure-check"><img :src="ensure.eachYes" /></div>
            <div class="insure-check-content">已約定帳戶</div>
          </div>
        </div>
      </div>
      <!-- 約定-EACH -->
      <div v-show="$store.state.PAYMENTPREFER">
        <div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">委託人姓名</label>
            <div class="col-sm-12">
              <div class="form-control insure-input-block">{{GetAccountData.CustName}}</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">委託人身分證字號</label>
            <div class="col-sm-12">
              <div class="form-control insure-input-block">{{GetAccountData.CustIDN}}</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">金融機構代碼</label>
            <div class="col-sm-12">
              <div class="form-control insure-input-block">{{GetEachAccount === null ? '' : GetEachAccount.BankCode}}</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">金融機構中文名稱</label>
            <div class="col-sm-12">
              <div class="form-control insure-input-block">{{GetEachAccount === null ? '' : GetEachAccount.BankName}}</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">銀行帳戶</label>
            <div class="col-sm-12">
              <div class="form-control insure-input-block">{{GetEachAccount === null ? '' : GetEachAccount.AccountNo}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: [
    'stateData',
    'planName'
  ],
  data() {
    return {
      ensure: {
        ebill: `../../../static/img/oval.png`,
        creditcard: '../../../static/img/oval.png',
        superStore: '../../../static/img/oval.png',
        installmentyes: '../../../static/img/oval.png',
        installmentno: '../../../static/img/oval.png',
        eachNo: '../../../static/img/oval.png',
        eachYes: '../../../static/img/oval.png'
      },
      isCredieCard: false,
      isSuperStore: false,
      isEbill: false,
      codeOne: '',
      codeTwo: '',
      codeThree: '',
      codeFour: '',
      cardSMonth: '',
      cardSYear: ''
    }
  },
  created() {
    this.$store.state.PAYMENTPREFER = this.stateData.Renewed_Prefer
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-5.png'
  },
  mounted() {
    // 年金險需額外判斷首期付款方式
    // EZCash 只有全繳網
    if (this.planName === 'ezcash') {
      this.isEbill = true
      this.init_method = 'B'
      this.OnEnsure('B')
      this.FuncEachAccount()
      console.log('this.$store.state.PAYMENTPREFER', this.$store.state.PAYMENTPREFER)
    } else if (this.planName === 'upcash') { // UPCASH 依保戶選擇之首期繳費管道顯示
      let result = this.stateData.init_method.toLowerCase()
      switch (result) {
        case 'c': // 選擇信用卡繳費
          this.isCredieCard = true
          this.OnEnsure('C')
          break
        case 'b': // 選擇全繳網繳費
          this.isEbill = true
          this.OnEnsure('B')
          this.FuncEachAccount()
          break
      }
    } else { // 其他8個險種
      // 判斷是否顯示超商繳費
      if (this.planName === 'travel' || this.planName === 'enttravel') {
        this.isSuperStore = this.stateData.ConvenientStorePayment
      } else {
        this.isSuperStore = this.GetAccountData.JoinSource === '2' && this.stateData.IsSuperStore
      }
      this.isEbill = true
      this.isCredieCard = true
      this.FuncEachAccount()
      this.OnEnsure('C')
      this.OnInstallmen(false)
    }
  },
  computed: {
    ...mapGetters([
      'GetAccountData',
      'GetEachAccount'
    ]),
    Cvv: {
      get() {
        return this.$store.state.CVV
      },
      set(value) {
        this.$store.state.CVV = value
        console.log(this.$store.state.CREDITCARD)
        console.log(this.$store.state.CVV)
      }
    },
    init_method: {
      get() {
        return this.$store.state.PAYTYPE
      },
      set(value) {
        this.$store.state.PAYTYPE = value
      }
    },
    sMonth: {
      get() {
        return this.cardSMonth
      },
      set(value) {
        this.cardSMonth = value
      }
    },
    sYear: {
      get() {
        return this.cardSYear
      },
      set(value) {
        this.cardSYear = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncIsCityBank',
      'FuncEachAccount'
    ]),
    /**
     * 帳戶繳費方式
     * @param {bool} target false:全繳網 true:EACH
     */
    OnAccount(target) {
      if (target) {
        this.ensure.eachYes = '../../../static/img/oval-ed.png'
        this.ensure.eachNo = '../../../static/img/oval.png'
      } else {
        this.ensure.eachYes = '../../../static/img/oval.png'
        this.ensure.eachNo = '../../../static/img/oval-ed.png'
      }
      this.$store.state.PAYMENTPREFER = target
    },
    /**
     * 花旗銀行是否分三期
     * @param {bool} target false:不分期 true:分三期
     */
    OnInstallmen(target) {
      if (target) {
        this.ensure.installmentyes = '../../../static/img/oval-ed.png'
        this.ensure.installmentno = '../../../static/img/oval.png'
      } else {
        this.ensure.installmentyes = '../../../static/img/oval.png'
        this.ensure.installmentno = '../../../static/img/oval-ed.png'
      }
      this.$store.state.PERIODNO = target ? 3 : 0
    },
    /**
     * 鍵盤KeyUp事件
     * @param {string} fromId 來源輸入框
     * @param {string} toId 跳轉輸入框
     */
    keyup(fromId, toId) {
      this.$store.state.CREDITCARD = `${this.codeOne}${this.codeTwo}${this.codeThree}${this.codeFour}`
      let result = document.getElementById(fromId).value.length
      if (fromId === 'codeTwo' && result >= 3) {
        this.FuncIsCityBank(`${this.codeOne}${this.codeTwo}`)
      }
      if (result === 4) document.getElementById(toId).focus()
    },
    /**
     * 確認繳費管道
     * @param {string} target C:信用卡 B:全繳網 P:超商
     */
    OnEnsure(target) {
      switch (target) {
        case 'C': // 信用卡
          this.ensure.creditcard = '../../../static/img/oval-ed.png'
          this.ensure.ebill = '../../../static/img/oval.png'
          this.ensure.superStore = '../../../static/img/oval.png'
          this.init_method = 'C'
          break
        case 'B': // 轉帳
          this.ensure.creditcard = '../../../static/img/oval.png'
          this.ensure.ebill = '../../../static/img/oval-ed.png'
          this.ensure.superStore = '../../../static/img/oval.png'
          this.init_method = 'B'
          this.OnAccount(this.GetAccountData !== null && this.GetAccountData.hasOwnProperty('AccountNo'))
          break
        case 'P': // 超商繳費
          this.ensure.creditcard = '../../../static/img/oval.png'
          this.ensure.ebill = '../../../static/img/oval.png'
          this.ensure.superStore = '../../../static/img/oval-ed.png'
          this.init_method = 'P'
          break
      }
    },
    OnShowNotice() {
      this.$router.push(`/PaymentNotice`)
    },
    OnShowBanks() {
      this.$router.push(`/PaymentBanks`)
    }
  }
}

</script>

<style scoped>
.font45px {
  font-size: 35px !important;
}

.paymentColor {
  color: #A57248 !important;
}

</style>
