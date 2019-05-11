<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../static/img/notepad.png" alt=""></div>
            <div class="insure-check-title">請選擇繳費方式</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="bg-money">
        <div class="col-sm-12">
          <div class="font-label">本次投保的保險費為：</div>
          <div class="font-money" v-if="(this.$store.state.PLANNAME.toLowerCase() === 'travel' || this.$store.state.PLANNAME.toLowerCase() === 'enttravel')">NT$ {{this.stateData.PolicyData.TotalPremium}} 元</div>
          <div class="font-money" v-else> NT$ {{this.stateData.mode_prem}} 元</div>
          <div class="money-icon"><img src="../../../static/img/coins.png" alt=""></div>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>
      <div class="top col-sm-12">
        <div class="insure-notice-box" @click="OnEnsure('C')">
          <div class="insure-check"><img :src="ensure.creditcard" /></div>
          <div class="insure-check-content">使用信用卡</div>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>
      <div class="top col-sm-12">
        <div class="insure-notice-box" @click="OnEnsure('B')">
          <div class="insure-check"><img :src="ensure.ebill" /></div>
          <div class="insure-check-content">使用活期性存款帳戶(手續費0元)</div>
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

    <div class='bg-radius' v-show='!isEbill'>
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
          <div class='col-sm-12 insure-select-align row'>
            <input type='tel' pattern='\d{4}' id='codeOne' class='cc-num form-control insure-input insure-input-edit col-sm-3' maxlength='4' v-model='codeOne' @keyup="keyup('codeOne', 'codeTwo')">
            <input type='tel' pattern='\d{4}' id='codeTwo' class='cc-num form-control insure-input insure-input-edit col-sm-3' maxlength='4' v-model='codeTwo' @keyup="keyup('codeTwo', 'codeThree')">
            <input type='tel' pattern='\d{4}' id='codeThree' class='cc-num form-control insure-input insure-input-edit col-sm-3' maxlength='4' v-model='codeThree' @keyup="keyup('codeThree', 'codeFour')">
            <input type='tel' pattern='\d{4}' id='codeFour' class='cc-num form-control insure-input insure-input-edit col-sm-3' maxlength='4' v-model='codeFour' @keyup="keyup('codeFour', 'cc_from_month')">
          </div>
        </div>
        <!-- 有效期限起 -->
        <div class='form-group row'>
          <label for='' class='col-sm-12 col-form-label insure-label'>有效期限</label>
          <div class='col-sm-12 insure-select-align row'>
            <input type='tel' id='cc_from_month' class='cc-num form-control insure-input insure-input-edit col-sm-3' maxlength='2' v-model="sMonth" placeholder='月份'> /
            <input type='tel' id='cc_from_year' class='cc-num form-control insure-input insure-input-edit col-sm-3' maxlength='2' v-model="sYear" placeholder='年份'>
          </div>
        </div>
        <!-- 有效期限迄 -->
        <div class='form-group row'>
          <label for='' class='col-sm-12 col-form-label insure-label'>有效期限迄</label>
          <div class='col-sm-12 insure-select-align row'>
            <input type='tel' id='cc_exp_month' class='cc-num form-control insure-input insure-input-edit col-sm-3' maxlength='2' placeholder='月份'> /
            <input type='tel' id='cc_exp_year' class='cc-num form-control insure-input insure-input-edit col-sm-3' maxlength='2' placeholder='年份'>
          </div>
        </div>
        <div class='form-group row'>
          <label for='' class='col-sm-12 col-form-label insure-label'>卡片背後三碼</label>
          <div class='col-sm-12 insure-select-align'>
            <input type='tel' id='cvv' pattern='\d{3}' class='cc-cvc form-control insure-input insure-input-edit' maxlength='3' v-model='Cvv'>
          </div>
        </div>
        <!-- 花旗銀行分期  -->
        <div class='form-group row periodNo' v-show='stateData.mode_prem > 3000 && $store.state.ISCITYBANKCARD'>
          <label for='' class='col-sm-12 col-form-label insure-label'>是否分三期</label>
          <div class='border-bottom-line col-sm-12'></div>
          <div class='top col-sm-12'>
            <div class='insure-notice-box radio-group'>
              <input id='periodNo0' name='periodNo' type='radio' value='0' checked>
              <div class='insure-check radio-item NoCheck'></div>
              <div class='insure-check-content'>
                <label for='periodNo0' class='radio-label' data-val='0' data-group='periodNo'>否</label>
              </div>
            </div>
          </div>
          <div class='border-bottom-line col-sm-12'></div>
          <div class='top col-sm-12'>
            <div class='insure-notice-box radio-group'>
              <input id='periodNo3' name='periodNo' type='radio' value='3'>
              <div class='insure-check radio-item NoCheck'></div>
              <div class='insure-check-content'>
                <label for='periodNo3' class='radio-label' data-val='3' data-group='periodNo'>是</label>
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { toggleModalShow } from '../../utils/toggleModal'
export default {
  props: [
    'stateData'
  ],
  data() {
    return {
      ensure: {
        ebill: `../../../static/img/oval.png`,
        creditcard: '../../../static/img/oval.png'
      },
      codeOne: '',
      codeTwo: '',
      codeThree: '',
      codeFour: '',
      cardSMonth: '',
      cardSYear: ''
    }
  },
  created() {
    console.log(this.stateData)
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-5.png'
  },
  mounted() {
    this.OnEnsure('C')
  },
  computed: {
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
    isEbill: {
      get() {
        return this.$store.state.PAYTYPE === 'B'
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
      'FuncIsCityBank'
    ]),
    keyup(fromId, toId) {
      this.$store.state.CREDITCARD = `${this.codeOne}${this.codeTwo}${this.codeThree}${this.codeFour}`
      let result = document.getElementById(fromId).value.length
      if (fromId === 'codeTwo' && result >= 2) {
        this.FuncIsCityBank(`${this.codeOne}${this.codeTwo}`)
      }
      if (result === 4) document.getElementById(toId).focus()
    },
    OnShowNotice() {
      toggleModalShow(`<div class="bg-radius"> <div class="top"> <div class="top-title"> <div class="insure-notice-box"> <div class="insure-check"><img src="images/notepad.png" alt=""></div><div class="insure-check-title">注意事項</div></div></div></div><div class="border-bottom-line"></div><form class="form-bottom"><div class="col-sm-12"><ul class=" insure-text-product font-label"><li>目前提供以下繳款方式：<BR>1.信用卡線上付款（限本人持有之VISA、MASTER、JCB、UCard信用卡）。<br>2.銀行帳戶線上轉帳付款(限本人持有之銀行帳戶)。</li><li>繳費前請確認您的信用卡∕帳戶餘額足夠繳納保費，若餘額不足，將無法完成本項交易。</li><li>當您選擇信用卡或銀行帳戶進行付款交易時，請勿關閉視窗、回到上一畫面或跳離交易畫面，避免請款作業錯誤，影響您的權益。</li><li>本項交易採即時扣款，本交易款項經確認後，將立即自您的信用卡∕帳戶中扣繳、無法取消，付款前請務必確認您的交易內容。</li><li>如您使用個人銀行帳戶進行線上轉帳無需負擔交易手續費。</li><li>您的交易經完成確認後，我們將另行寄發收據(若您已申請電子單據，將以e-mail方式將收據寄至您的電子郵件信箱)。</li><li>交易過程中，有發現任何錯誤訊息導致交易不成功者，請洽本公司電話服務中心0800-031-115。</li><li>為保護您的個人資料之隱密性、完整性及可用性，新光人壽係使用國際安全認證SSL（Secure Sockets Layer）128位元機制進行資料傳輸加密，並透過防火牆、定期對主機系統網路弱點掃描及漏洞檢查、入侵防禦系統與全公司防毒機制輔助等安控機制，以防止不法侵入及惡意程式之破壞。</li></ul></div></form></div>`)
    },
    OnShowBanks() {
      toggleModalShow(`<table class='table table-bordered table-rate table-top'> <tbody> <tr> <td class='text-center table-bank'>(001)<br>中央信託</td><td class='text-center table-bank'>(003)<br>交通銀行</td><td class='text-center table-bank'>(004)<br>台灣銀行</td></tr><tr> <td class='text-center table-bank'>(005)<br>土地銀行</td><td class='text-center table-bank'>(006)<br>合庫商銀</td><td class='text-center table-bank'>(007)<br>第一銀行</td></tr><tr> <td class='text-center table-bank'>(008)<br>華南銀行</td><td class='text-center table-bank'>(009)<br>彰化銀行</td><td class='text-center table-bank'>(010)<br>華僑銀行</td></tr><tr> <td class='text-center table-bank'>(011)<br>上海銀行</td><td class='text-center table-bank'>(012)<br>台北富邦</td><td class='text-center table-bank'>(013)<br>國泰世華</td></tr><tr> <td class='text-center table-bank'>(016)<br>高雄銀行</td><td class='text-center table-bank'>(017)<br>兆豐商銀</td><td class='text-center table-bank'>(018)<br>農業金庫</td></tr><tr> <td class='text-center table-bank'>(021)<br>花旗銀行</td><td class='text-center table-bank'>(024)<br>運通銀行</td><td class='text-center table-bank'>(025)<br>首都銀行</td></tr><tr> <td class='text-center table-bank'>(039)<br>荷蘭銀行</td><td class='text-center table-bank'>(040)<br>中華開發</td><td class='text-center table-bank'>(050)<br>臺灣企銀</td></tr><tr> <td class='text-center table-bank'>(051)<br>台北商銀</td><td class='text-center table-bank'>(052)<br>新竹商銀</td><td class='text-center table-bank'>(053)<br>台中商銀</td></tr><tr> <td class='text-center table-bank'>(054)<br>京城商銀</td><td class='text-center table-bank'>(056)<br>花蓮企銀</td><td class='text-center table-bank'>(057)<br>台東企銀</td></tr><tr> <td class='text-center table-bank'>(075)<br>東亞銀行</td><td class='text-center table-bank'>(081)<br>匯豐銀行</td><td class='text-center table-bank'>(083)<br>渣打銀行</td></tr><tr> <td class='text-center table-bank'>(822)<br>中信銀行</td><td class='text-center table-bank'>(101)<br>台北一信</td><td class='text-center table-bank'>(102)<br>華泰銀行</td></tr><tr> <td class='text-center table-bank'>(103)<br>臺灣新光商銀</td><td class='text-center table-bank'>(104)<br>台北五信</td><td class='text-center table-bank'>(106)<br>台北九信</td></tr><tr> <td class='text-center table-bank'>(108)<br>陽信銀行</td><td class='text-center table-bank'>(114)<br>基隆一信</td><td class='text-center table-bank'>(115)<br>基隆二信</td></tr><tr> <td class='text-center table-bank'>(118)<br>板信銀行</td><td class='text-center table-bank'>(119)<br>淡水一信</td><td class='text-center table-bank'>(120)<br>淡水信合社</td></tr></tbody> </table>`)
    },
    OnEnsure(target) {
      switch (target) {
        case 'C': // 信用卡
          this.ensure.creditcard = '../../../static/img/oval-ed.png'
          this.ensure.ebill = '../../../static/img/oval.png'
          this.init_method = 'C'
          break
        case 'B': // 轉帳
          this.ensure.creditcard = '../../../static/img/oval.png'
          this.ensure.ebill = '../../../static/img/oval-ed.png'
          this.init_method = 'B'
          break
      }
    }
  }
}

</script>
