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
          <div class="insure-input-block">{{GetUpCashPostData.ins_type_name}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">投保始期</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{poIssueDate}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">是否躉繳(一次繳清)</label>
        <div class="col-sm-12 insure-select-align">
          <select id class="form-control data-input insure-select insure-input-edit" v-model="IsOneTimePayment">
            <option selected="selected" value="true">是</option>
            <option value="false">否</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">第一期保險費</label>
        <div class="col-sm-12">
          <input type="number" class="form-control insure-input insure-input-edit" ref="face_amt" v-model="face_amt" placeholder="請輸入" />
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label">首期繳費管道</label>
        <div class="col-sm-12">
          <select id class="form-control data-input" v-model="init_method">
            <option selected="selected" value="0">未選擇</option>
            <option value="B">活期性帳戶(電子化授權/全國繳費網)</option>
            <option value="C">信用卡</option>
          </select>
        </div>
      </div>
      <div class="col-sm-12" v-show="GetUpCashPostData.init_method === 'C'">
        <div class="insure-tips-text">
          <img src="../../../../../static/img/insure-link.png" alt>刷卡攻略
        </div>
      </div>
      <div class="col-sm-12">
        <div class="insure-tips" v-show="GetUpCashPostData.IsOneTimePayment">限輸入10,000 至 750,000元</div>
        <div class="insure-tips" v-show="!GetUpCashPostData.IsOneTimePayment">限輸入 3,000 至 750,000元</div>
        <div class="insure-tips-text">備註：單筆保費限75萬，單一公司累積限750萬。</div>
      </div>
      <!-- v-show: 非躉繳才顯示續期繳法別 -->
      <div class="form-group row" v-show="!GetUpCashPostData.IsOneTimePayment">
        <label for class="col-sm-12 col-form-label insure-label insure-label">約定續期繳法別</label>
        <div class="col-sm-12 insure-select-align">
          <select id class="form-control data-input insure-select insure-input-edit" v-model="modx_99_ind">
            <option value="1">不定期繳</option>
            <option value="2">分期繳付</option>
          </select>
        </div>
      </div>

      <!--Start 分期繳付 -->
      <div class="form-group row" v-show="(GetUpCashPostData.modx_99_ind === 'N' && !GetUpCashPostData.IsOneTimePayment)">
        <label for class="col-sm-12 col-form-label insure-label insure-label">分期繳付之續期保險費每期</label>
        <div class="col-sm-12">
          <input type="number" min="0" class="form-control insure-input insure-input-edit" v-model="qpoop_25_prem">
        </div>
        <label for class="col-sm-12 col-form-label insure-label insure-label">元</label>
      </div>
      <div class="form-group row" v-show="(GetUpCashPostData.modx_99_ind === 'N' && !GetUpCashPostData.IsOneTimePayment)">
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
      <div class="form-group row" v-show="!GetUpCashPostData.IsOneTimePayment">
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

      <div v-show="GetUpCashPostData.modx_99_ind === 'N' && GetUpCashPostData.method === 'B'">
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
              <select v-model="bank_code_1">
                <option value="0">請選擇</option>
                <option value="103">新光銀行</option>
              </select>
            </div>
            <div class="insure-input-block">金融機構中文名稱: </div>
            <div class="insure-input-block">銀行帳號:
              <input type="text" v-model="account" />
            </div>
          </div>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
export default {
  data() {
    return {
      isEdda: true,
      poIssueDate: '',
      payType: [
        { name: '全國新光人壽行政中心繳費', method: 'P' },
        { name: '銀行或郵局帳戶轉帳', method: 'B' },
        { name: '信用卡', method: 'C' }
      ]
    }
  },
  created() {
    this.GetUpCashPostData.AccountData[0] = {}
    this.poIssueDate = moment().format(`民國${parseInt(new Date().getFullYear()) - 1911}年MM月DD日起`)
    this.GetUpCashPostData.po_issue_date = moment().format(`YYYY-MM-DD`)
    this.OnUntimed(1)
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData
    ]),
    // 非約定帳戶金融機構代碼
    bank_code_1: {
      get() {
        console.log('this.GetUpCashPostData.AccountData', this.GetUpCashPostData.AccountData)
        return this.GetUpCashPostData.AccountData[0].bank_code_1 || 0
      },
      set(value) {
        this.GetUpCashPostData.AccountData[0].bank_code_1 = value
      }
    },
    // 非約定帳戶銀行帳號
    account: {
      get() {
        return this.GetUpCashPostData.AccountData[0].account
      },
      set(value) {
        this.GetUpCashPostData.AccountData[0].account = value
      }
    },
    /**
     * 首期繳費管道
     */
    init_method: {
      get() {
        if (this.GetUpCashPostData.init_method === undefined ||
          this.GetUpCashPostData.init_method === null ||
          this.GetUpCashPostData.init_method === '') {
          return 0
        }
        return this.GetUpCashPostData.init_method
      },
      set(value) {
        this.GetUpCashPostData.mode_prem = 0
        this.GetUpCashPostData.init_method = value
        this.OnUntimed(this.GetUpCashPostData.modx_99_ind)
      }
    },
    // 續期繳費管道
    method: {
      get() {
        // 約定續期繳法別:不定期選P 分期選C
        return this.GetUpCashPostData.method || 'C'
      },
      set(value) {
        this.GetUpCashPostData.method = value
        console.log(this.GetUpCashPostData.method)
      }
    },
    /**
     * 是否躉繳(一次繳清)
     */
    IsOneTimePayment: {
      get() {
        return this.GetUpCashPostData.IsOneTimePayment
      },
      set(value) {
        this.GetUpCashPostData.mode_prem = 0
        this.GetUpCashPostData.IsOneTimePayment = value === 'true'
      }
    },
    /**
     * 第一期保險費
     */
    face_amt: {
      get() {
        this.GetUpCashPostData.face_amt = 66666
        return this.GetUpCashPostData.face_amt
      },
      set(value) {
        if (value === '' || value <= 0) {
          alert('請填寫第一期保險費。')
          return
        }
        this.GetUpCashPostData.mode_prem = 0
        this.GetUpCashPostData.face_amt = value
      }
    },
    // 約定續期繳法別
    modx_99_ind: {
      get() {
        if (this.GetUpCashPostData.modx_99_ind === 'Y') {
          return 1
        } else if (this.GetUpCashPostData.modx_99_ind === 'N') {
          return 2
        }
        this.GetUpCashPostData.modx_99_ind = 1
        return this.GetUpCashPostData.modx_99_ind
      },
      set(value) {
        // 分期繳付:2 不定期繳:1
        let result = parseInt(value) === 1
        // 不定期繳要清空分期欄位
        if (result) {
          this.GetUpCashPostData.qpoop_25_prem = 0
          this.GetUpCashPostData.qpoop_25_modx = ''
        }
        this.GetUpCashPostData.mode_prem = 0
        this.GetUpCashPostData.modx_99_ind = result ? 'Y' : 'N'
        this.OnUntimed(parseInt(value))
      }
    },
    // 分期保費每期 請輸入續期保險費。
    qpoop_25_prem: {
      get() {
        let result = this.GetUpCashPostData.qpoop_25_prem
        return result === 0 ? '' : result
      },
      set(value) {
        this.GetUpCashPostData.mode_prem = 0
        this.GetUpCashPostData.qpoop_25_prem = value
      }
    },
    // 繳別 請選擇約定續期繳法-分期繳付之續期保費-繳別。
    qpoop_25_modx: {
      get() {
        let result = this.GetUpCashPostData.qpoop_25_modx
        return result === '' ? '0' : result
      },
      set(value) {
        this.GetUpCashPostData.mode_prem = 0
        this.GetUpCashPostData.qpoop_25_modx = value
      }
    }
  },
  methods: {
    OnUntimed(value) {
      // 分期繳付:2 不定期繳:1
      /**
      if(this.GetUpCashPostData.modx_99_ind === 'Y') {
        return 1
      } else if(this.GetUpCashPostData.modx_99_ind === 'N') {
        return 2
      }
       */
      // 不定期繳, 只有全國新光人壽行政中心繳費
      if (parseInt(value) === 1) {
        this.payType = [{ name: '全國新光人壽行政中心繳費', method: 'P' }]
        this.GetUpCashPostData.method = 'P'
        return
      } else {
        // 首期繳費管道:活期 約定續期:分期, 只有銀行或郵局帳戶轉帳
        if (this.GetUpCashPostData.init_method === 'B' && parseInt(value) === 2) {
          this.payType = [
            { name: '銀行或郵局帳戶轉帳', method: 'B' }
          ]
          this.GetUpCashPostData.method = 'B'
        } else if (this.GetUpCashPostData.init_method === '' && parseInt(value) === 1) {
          this.payType = [{ name: '全國新光人壽行政中心繳費', method: 'P' }]
          this.GetUpCashPostData.method = 'P'
        } else if (this.GetUpCashPostData.init_method === '' && parseInt(value) === 2) {
          this.payType = [
            { name: '銀行或郵局帳戶轉帳', method: 'B' },
            { name: '信用卡', method: 'C' }
          ]
          this.GetUpCashPostData.method = 'C'
        } else {
          if (parseInt(value) === 1) {
            this.payType = [{ name: '全國新光人壽行政中心繳費', method: 'P' }]
            this.GetUpCashPostData.method = 'P'
          } else {
            this.payType = [
              { name: '銀行或郵局帳戶轉帳', method: 'B' },
              { name: '信用卡', method: 'C' }
            ]
            this.GetUpCashPostData.method = 'C'
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
        this.GetUpCashPostData.Renewed_Prefer = true
        this.GetUpCashPostData.AccountData[0] = {}
      } else { // 非約定帳戶
        this.GetUpCashPostData.AccountData[0].account_type = 'Z'
        this.GetUpCashPostData.AccountData[0].account = '1021500062896'
        this.GetUpCashPostData.AccountData[0].bank_code_1 = '103'
        this.GetUpCashPostData.AccountData[0].bank_name_1 = '新光銀行'
        this.isEdda = false
      }
    }
  }
}

</script>
