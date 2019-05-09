<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check">
            <img src="../../../../../static/img/chat.png" alt>
          </div>
          <div class="insure-check-title">請填寫投保資料</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <form class="form-bottom">
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">主險種名稱</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetEZCashPostData.ins_type_name}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">投保始期</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{poIssueDate}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">第一期保險費</label>
        <div class="col-sm-12">
          <input type="number" class="form-control insure-input insure-input-edit" ref="face_amt" v-model="face_amt" placeholder="請輸入" />
        </div>
      </div>
      <div class="col-sm-12">
        <div class="insure-tips" v-show="GetEZCashPostData.IsOneTimePayment">限輸入10,000 至 750,000元</div>
        <div class="insure-tips" v-show="!GetEZCashPostData.IsOneTimePayment">限輸入 3,000 至 750,000元</div>
        <div class="insure-tips-text">備註：單筆保費限75萬，單一公司累積限750萬。</div>
      </div>
      <!-- v-show: 非躉繳才顯示續期繳法別 -->
      <div class="form-group row" v-show="!GetEZCashPostData.IsOneTimePayment">
        <label for class="col-sm-12 col-form-label insure-label insure-label">約定續期繳法別</label>
        <div class="col-sm-12 insure-select-align">
          <select id class="form-control data-input insure-select insure-input-edit" v-model="modx_99_ind">
            <option value="1">不定期繳</option>
            <option value="2">分期繳付</option>
          </select>
        </div>
      </div>

      <!--Start 分期繳付 -->
      <div class="form-group row" v-show="(GetEZCashPostData.modx_99_ind === 'N' && !GetEZCashPostData.IsOneTimePayment)">
        <label for class="col-sm-12 col-form-label insure-label insure-label">分期繳付之續期保險費每期</label>
        <div class="col-sm-12">
          <input type="number" min="0" class="form-control insure-input insure-input-edit" v-model="qpoop_25_prem">
        </div>
        <label for class="col-sm-12 col-form-label insure-label insure-label">元</label>
      </div>
      <div class="form-group row" v-show="(GetEZCashPostData.modx_99_ind === 'N' && !GetEZCashPostData.IsOneTimePayment)">
        <label for class="col-sm-12 col-form-label insure-label insure-label">繳別</label>
        <div class="col-sm-12 insure-select-align">
          <select id class="form-control data-input insure-select insure-input-edit" v-model="qpoop_25_modx">
            <option selected="selected" value="0">未選擇</option>
            <option value="12">年</option>
            <option value="6">半年</option>
            <option value="3">季</option>
            <option value="1">月</option>
          </select>
        </div>
      </div>
      <!-- End 分期繳付-->

      <!--Start 不定期繳-全國新光人壽行政中心繳費 -->
      <div class="form-group row" v-show="!GetEZCashPostData.IsOneTimePayment">
        <label for class="col-sm-12 col-form-label insure-label">續期繳費管道</label>
        <div class="col-sm-12">
          <select id class="form-control data-input" v-model="method">
            <option v-for="(item, index) in payType" :key="index" :value="item.method">{{item.name}}</option>
          </select>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="insure-tips-text" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#service-center">
              <img src="../../../../../static/img/insure-link.png">
              查詢各服務中心資訊
            </div>
          </div>
          <div class="col-sm-6">
            <div class="insure-tips-text">
              <img src="../../../../../static/img/insure-link.png">繳費方式
            </div>
          </div>
        </div>
      </div>
      <!-- End 不定期繳-全國新光人壽行政中心繳費-->

      <div class="col-sm-12">
        <div class="insure-tips">續期繳費管道同時約定為信用卡，會同首期信用卡卡號做繳費。</div>
      </div>

      <div v-show="GetEZCashPostData.modx_99_ind === 'N' && GetEZCashPostData.method === 'B'">
        <div class="form-group row" @click="OnAccount('isEdda')">
          <div class="checkbox " :class="{ checked: isEdda }"></div>
          <div class="insure-tips">已約定帳戶</div>
          <div class="col-sm-12">
            <div class="insure-input-block">委託人姓名: </div>
            <div class="insure-input-block">委託人身分證字號: </div>
            <div class="insure-input-block">金融機構代碼: </div>
            <div class="insure-input-block">金融機構中文名稱: </div>
            <div class="insure-input-block">銀行帳號: </div>
          </div>
        </div>
        <div class="form-group row" @click="OnAccount('isNotEdda')">
          <div class="checkbox" :class="{ checked: !isEdda }"></div>
          <div class="insure-tips">非約定帳戶</div>
          <div class="col-sm-12">
            <div class="insure-input-block">委託人姓名: </div>
            <div class="insure-input-block">委託人身分證字號:
            </div>
            <div class="insure-input-block">金融機構代碼:
              <select id="" class="form-control data-input insure-select insure-input-edit" v-model="bank_code_1">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in GetBankData" :key="index" :value="item.bank_code + '-' + item.bank_name">{{item.bank_code}} {{item.bank_name}}</option>
              </select>
            </div>
            <div class="insure-input-block">金融機構中文名稱:
              <input type="text" class="form-control insure-input-block" id placeholder :value="branchName.split('-')[1]" disabled="disabled" />
            </div>
            <div class="insure-input-block">銀行帳號:
              <input type="number" min="0" class="form-control insure-input insure-input-edit" placeholder="請輸入銀行帳號" v-model="account">
            </div>
          </div>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
export default {
  data() {
    return {
      isEdda: true,
      poIssueDate: '',
      branchName: '0',
      accountComputed: '',
      payType: [
        { name: '全國新光人壽行政中心繳費', method: 'P' },
        { name: '銀行或郵局帳戶轉帳', method: 'B' },
        { name: '信用卡', method: 'C' }
      ]
    }
  },
  created() {
    this.FuncGetBank()
    this.GetEZCashPostData.AccountData[0] = {}
    this.poIssueDate = moment().format(`民國${parseInt(new Date().getFullYear()) - 1911}年MM月DD日起`)
    this.GetEZCashPostData.po_issue_date = moment().format(`YYYY-MM-DD`)
    this.OnUntimed(1)
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetEZCashPostData,
      'GetBankData',
      'GetBankBranches'
    ]),
    // 非約定帳戶金融機構代碼
    bank_code_1: {
      get() {
        return this.branchName
      },
      set(value) {
        let data = value.split('-')
        this.FuncGetBankBranches(data[0])
        this.GetEZCashPostData.AccountData[0].account = this.accountComputed
        this.GetEZCashPostData.AccountData[0].bank_code_1 = data[0]
        this.GetEZCashPostData.AccountData[0].bank_name_1 = data[1]
        this.branchName = value
      }
    },
    // 非約定帳戶銀行帳號
    account: {
      get() {
        return this.accountComputed
      },
      set(value) {
        this.GetEZCashPostData.AccountData[0].account = value
        this.GetEZCashPostData.AccountData[0].bank_code_1 = this.branchName.split('-')[0]
        this.GetEZCashPostData.AccountData[0].bank_name_1 = this.branchName.split('-')[1]
        this.accountComputed = value
      }
    },
    /**
     * 首期繳費管道
     */
    init_method: {
      get() {
        if (this.GetEZCashPostData.init_method === undefined ||
          this.GetEZCashPostData.init_method === null ||
          this.GetEZCashPostData.init_method === '') {
          return 0
        }
        return this.GetEZCashPostData.init_method
      },
      set(value) {
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.init_method = value
        this.OnUntimed(this.GetEZCashPostData.modx_99_ind)
      }
    },
    // 續期繳費管道
    method: {
      get() {
        // 約定續期繳法別:不定期選P 分期選C
        return this.GetEZCashPostData.method || 'C'
      },
      set(value) {
        this.GetEZCashPostData.method = value
      }
    },
    /**
     * 是否躉繳(一次繳清)
     */
    IsOneTimePayment: {
      get() {
        return this.GetEZCashPostData.IsOneTimePayment
      },
      set(value) {
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.IsOneTimePayment = value === 'true'
      }
    },
    /**
     * 第一期保險費
     */
    face_amt: {
      get() {
        this.GetEZCashPostData.face_amt = 66666
        return this.GetEZCashPostData.face_amt
      },
      set(value) {
        if (value === '' || value <= 0) {
          alert('請填寫第一期保險費。')
          return
        }
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.face_amt = value
      }
    },
    // 約定續期繳法別
    modx_99_ind: {
      get() {
        if (this.GetEZCashPostData.modx_99_ind === 'Y') {
          return 1
        } else if (this.GetEZCashPostData.modx_99_ind === 'N') {
          return 2
        }
        this.GetEZCashPostData.modx_99_ind = 'Y'
        return 1
      },
      set(value) {
        // 分期繳付:2 不定期繳:1
        let result = parseInt(value) === 1
        // 不定期繳要清空分期欄位
        if (result) {
          this.GetEZCashPostData.qpoop_25_prem = 0
          this.GetEZCashPostData.qpoop_25_modx = ''
        }
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.modx_99_ind = result ? 'Y' : 'N'
        this.OnUntimed(parseInt(value))
      }
    },
    // 分期保費每期 請輸入續期保險費。
    qpoop_25_prem: {
      get() {
        let result = this.GetEZCashPostData.qpoop_25_prem
        return result === 0 ? '' : result
      },
      set(value) {
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.qpoop_25_prem = value
      }
    },
    // 繳別 請選擇約定續期繳法-分期繳付之續期保費-繳別。
    qpoop_25_modx: {
      get() {
        let result = this.GetEZCashPostData.qpoop_25_modx
        return result === '' ? '0' : result
      },
      set(value) {
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.qpoop_25_modx = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetBank',
      'FuncGetBankBranches'
    ]),
    OnUntimed(value) {
      // 分期繳付:2 不定期繳:1
      /**
      if(this.GetEZCashPostData.modx_99_ind === 'Y') {
        return 1
      } else if(this.GetEZCashPostData.modx_99_ind === 'N') {
        return 2
      }
       */
      // 不定期繳, 只有全國新光人壽行政中心繳費
      if (parseInt(value) === 1) {
        this.payType = [{ name: '全國新光人壽行政中心繳費', method: 'P' }]
        this.GetEZCashPostData.method = 'P'
        return
      } else {
        // 首期繳費管道:活期 約定續期:分期, 只有銀行或郵局帳戶轉帳
        if (this.GetEZCashPostData.init_method === 'B' && parseInt(value) === 2) {
          this.payType = [
            { name: '銀行或郵局帳戶轉帳', method: 'B' }
          ]
          this.GetEZCashPostData.method = 'B'
        } else if (this.GetEZCashPostData.init_method === '' && parseInt(value) === 1) {
          this.payType = [{ name: '全國新光人壽行政中心繳費', method: 'P' }]
          this.GetEZCashPostData.method = 'P'
        } else if (this.GetEZCashPostData.init_method === '' && parseInt(value) === 2) {
          this.payType = [
            { name: '銀行或郵局帳戶轉帳', method: 'B' }
          ]
          this.GetEZCashPostData.method = 'B'
        } else {
          if (parseInt(value) === 1) {
            this.payType = [{ name: '全國新光人壽行政中心繳費', method: 'P' }]
            this.GetEZCashPostData.method = 'P'
          } else {
            this.payType = [
              { name: '銀行或郵局帳戶轉帳', method: 'B' }
            ]
            this.GetEZCashPostData.method = 'B'
          }
        }
      }
    },
    // 約定帳號點擊事件
    OnAccount(target) {
      // @click="isEdda = true"
      // 點選已約定帳戶, 要清空AccountData
      if (target === 'isEdda') {
        this.isEdda = true
        this.GetEZCashPostData.Renewed_Prefer = true
        this.GetEZCashPostData.AccountData[0] = {}
      } else { // 非約定帳戶
        this.GetEZCashPostData.AccountData[0] = {
          account_type: 'Z',
          account: '',
          bank_code_1: '',
          bank_name_1: ''
        }
        this.isEdda = false
      }
    }
  }
}

</script>
