<template>
  <div>
    <div class='bg-radius'>
      <div class='top'>
        <div class='top-title'>
          <div class='insure-notice-box'>
            <div class='insure-check'><img src='../../../static/img/chat.png' alt=''></div>
            <div class='insure-check-title'>首期繳費管道</div>
          </div>
        </div>
      </div>
      <div class='border-bottom-line'></div>
      <form class='form-bottom'>
        <div class='form-group row'>
          <label for='' class='col-sm-12 col-form-label insure-label'>首期繳費管道</label>
          <div class='col-sm-12'>
            <div class='insure-input-block'>使用信用卡</div>
          </div>
        </div>
        <div class='col-sm-12'>
          <div class='insure-notice-text'>
            (限台灣核發之VISA、MASTER、JCB、UCard信用卡)
          </div>
        </div>
      </form>
      <form class='form-bottom'>
        <div class='col-sm-12'>
          <div class='insure-creditcard'>
            <img src='../../../static/img/creditcard.png' alt=''>
          </div>
        </div>
        <div class='form-group row'>
          <label for='' class='col-sm-12 col-form-label insure-label'>信用卡卡號</label>
          <div class='col-sm-12 insure-select-align row'>
            <input type='tel' pattern='\d{4}' id='codeOne' class='cc-num form-control insure-input insure-input-edit col-sm-3' maxlength='4' v-model='codeOne' @keyup="keyup('codeOne', 'codeTwo')">
            <input type='tel' pattern='\d{4}' id='codeTwo' class='cc-num form-control insure-input insure-input-edit col-sm-3' maxlength='4' v-model='codeTwo' @keyup="keyup('codeTwo', 'codeThree')">
            <input type='tel' pattern='\d{4}' id='codeThree' class='cc-num form-control insure-input insure-input-edit col-sm-3' maxlength='4' v-model='codeThree' @keyup="keyup('codeThree', 'codeFour')">
            <input type='tel' pattern='\d{4}' id='codeFour' class='cc-num form-control insure-input insure-input-edit col-sm-3' maxlength='4' v-model='codeFour' @keyup="keyup('codeFour', 'cc_from_month')">
          </div>
        </div>
        <div class='form-group row'>
          <label for='' class='col-sm-12 col-form-label insure-label'>有效期限起</label>
          <div class='col-sm-12 insure-select-align row'>
            <input type='tel' id='cc_from_month' class='cc-num form-control insure-input insure-input-edit col-sm-3' maxlength='2' placeholder='月份'> /
            <input type='tel' id='cc_from_year' class='cc-num form-control insure-input insure-input-edit col-sm-3' maxlength='2' placeholder='年份'>
          </div>
        </div>
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
            <input type='tel' id='cvv' pattern='\d{3}' class='cc-cvc form-control insure-input insure-input-edit' maxlength='3' v-model="Cvv">
          </div>
        </div>

        <!-- 花旗銀行分期  -->
        <div class="form-group row periodNo" v-show="amount > 3000 && $store.state.ISCITYBANKCARD">
          <label for="" class="col-sm-12 col-form-label insure-label">是否分三期</label>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="top col-sm-12">
            <div class="insure-notice-box radio-group">
              <input id="periodNo0" name="periodNo" type="radio" value="0" checked>
              <div class="insure-check radio-item NoCheck"></div>
              <div class="insure-check-content">
                <label for="periodNo0" class="radio-label" data-val="0" data-group="periodNo">否</label>
              </div>
            </div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="top col-sm-12">
            <div class="insure-notice-box radio-group">
              <input id="periodNo3" name="periodNo" type="radio" value="3">
              <div class="insure-check radio-item NoCheck"></div>
              <div class="insure-check-content">
                <label for="periodNo3" class="radio-label" data-val="3" data-group="periodNo">是</label>
              </div>
            </div>
          </div>
        </div>

        <div class='col-sm-12'>
          <div class='insure-tips-text' @click='OnShowBanks()'>
            <img src='../../../static/img/insure-link.png' alt=''>查詢線上繳費發卡銀行
          </div>
        </div>
      </form>
      <div class='border-bottom-line'></div>
      <div class='col-sm-12'>
        <div class='insure-tips insure-tips-mt-20'>
          請注意！！<br>信用卡若無有效期限起日、起月、年欄位請輸入今天日期。進入繳費畫面後，請勿關閉視窗以完成投保！
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { toggleModalShow } from '../../utils/toggleModal'
export default {
  props: [
    'amount'
  ],
  data() {
    return {
      codeOne: '',
      codeTwo: '',
      codeThree: '',
      codeFour: ''
    }
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
    }
  },
  methods: {
    ...mapActions([
      'FuncIsCityBank'
    ]),
    OnShowBanks() {
      toggleModalShow(`<table class="table table-bordered table-rate table-top"> <tbody> <tr> <td class="text-center table-bank">(001)<br>中央信託</td><td class="text-center table-bank">(003)<br>交通銀行</td><td class="text-center table-bank">(004)<br>台灣銀行</td></tr><tr> <td class="text-center table-bank">(005)<br>土地銀行</td><td class="text-center table-bank">(006)<br>合庫商銀</td><td class="text-center table-bank">(007)<br>第一銀行</td></tr><tr> <td class="text-center table-bank">(008)<br>華南銀行</td><td class="text-center table-bank">(009)<br>彰化銀行</td><td class="text-center table-bank">(010)<br>華僑銀行</td></tr><tr> <td class="text-center table-bank">(011)<br>上海銀行</td><td class="text-center table-bank">(012)<br>台北富邦</td><td class="text-center table-bank">(013)<br>國泰世華</td></tr><tr> <td class="text-center table-bank">(016)<br>高雄銀行</td><td class="text-center table-bank">(017)<br>兆豐商銀</td><td class="text-center table-bank">(018)<br>農業金庫</td></tr><tr> <td class="text-center table-bank">(021)<br>花旗銀行</td><td class="text-center table-bank">(024)<br>運通銀行</td><td class="text-center table-bank">(025)<br>首都銀行</td></tr><tr> <td class="text-center table-bank">(039)<br>荷蘭銀行</td><td class="text-center table-bank">(040)<br>中華開發</td><td class="text-center table-bank">(050)<br>臺灣企銀</td></tr><tr> <td class="text-center table-bank">(051)<br>台北商銀</td><td class="text-center table-bank">(052)<br>新竹商銀</td><td class="text-center table-bank">(053)<br>台中商銀</td></tr><tr> <td class="text-center table-bank">(054)<br>京城商銀</td><td class="text-center table-bank">(056)<br>花蓮企銀</td><td class="text-center table-bank">(057)<br>台東企銀</td></tr><tr> <td class="text-center table-bank">(075)<br>東亞銀行</td><td class="text-center table-bank">(081)<br>匯豐銀行</td><td class="text-center table-bank">(083)<br>渣打銀行</td></tr><tr> <td class="text-center table-bank">(822)<br>中信銀行</td><td class="text-center table-bank">(101)<br>台北一信</td><td class="text-center table-bank">(102)<br>華泰銀行</td></tr><tr> <td class="text-center table-bank">(103)<br>臺灣新光商銀</td><td class="text-center table-bank">(104)<br>台北五信</td><td class="text-center table-bank">(106)<br>台北九信</td></tr><tr> <td class="text-center table-bank">(108)<br>陽信銀行</td><td class="text-center table-bank">(114)<br>基隆一信</td><td class="text-center table-bank">(115)<br>基隆二信</td></tr><tr> <td class="text-center table-bank">(118)<br>板信銀行</td><td class="text-center table-bank">(119)<br>淡水一信</td><td class="text-center table-bank">(120)<br>淡水信合社</td></tr></tbody> </table>`)
    },
    keyup(fromId, toId) {
      this.$store.state.CREDITCARD = `${this.codeOne}${this.codeTwo}${this.codeThree}${this.codeFour}`
      let result = document.getElementById(fromId).value.length
      if (fromId === 'codeTwo' && result >= 2) {
        this.FuncIsCityBank(`${this.codeOne}${this.codeTwo}`)
      }
      if (result === 4) document.getElementById(toId).focus()
    }
  }
}

</script>
