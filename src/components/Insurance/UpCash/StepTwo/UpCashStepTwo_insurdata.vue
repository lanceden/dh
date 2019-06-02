<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check">
              <img src="../../../../../static/img/edit.png" alt>
            </div>
            <div class="insure-check-title">請填寫投保資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label class="col-sm-12 col-form-label insure-label insure-label">主險種名稱</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.ins_type_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-12 col-form-label insure-label insure-label">投保始期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">自{{poIssueDate}}</div>
          </div>
        </div>
        <form class="form-bottom">
          <div class="form-group row">
            <label class="col-sm-12 col-form-label insure-label">是否躉繳（一次繳清）</label>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="top col-sm-12" @click="OnOneTimePayment(true)">
              <div class="insure-notice-box">
                <div class="insure-check"><img :src="ensure.onetimepaytrue" /></div>
                <div class="insure-check-content">是</div>
              </div>
            </div>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="top col-sm-12" @click="OnOneTimePayment(false)">
              <div class="insure-notice-box">
                <div class="insure-check"><img :src="ensure.onetimepayfalse" /></div>
                <div class="insure-check-content">否</div>
              </div>
            </div>
          </div>
        </form>

        <form class="form-bottom">
          <div class="form-group row">
            <label class="col-sm-12 col-form-label insure-label">首期繳費管道</label>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="top col-sm-12" @click="OnInitMethod('B')">
              <div class="insure-notice-box">
                <div class="insure-check"><img :src="ensure.initmethodebill"></div>
                <div class="insure-check-content">活期性帳戶(電子化授權/全國繳費網)</div>
              </div>
            </div>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="top col-sm-12" @click="OnInitMethod('C')">
              <div class="insure-notice-box">
                <div class="insure-check"><img :src="ensure.initmethodcreditcard"></div>
                <div class="insure-check-content">信用卡</div>
              </div>
            </div>
          </div>
          <div class="col-sm-12" v-show="GetUpCashPostData.init_method === 'C'">
            <div class="insure-tips-text first-blue">
              <img src="../../../../../static/img/insure-link.png" alt>
              <a style="color:#0f71b0" href="https://online.skl.com.tw/Event/upcash/card.html" target="_blank">刷卡攻略</a>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-12 col-form-label insure-label">第一期保險費</label>
            <div class="col-sm-11">
              <input type="number" class="form-control insure-input insure-input-edit col-sm-12" v-model="face_amtComputed" placeholder="請輸入" />
            </div>
            <label class="col-sm-1 col-form-label insure-label insure-label-day">元</label>
          </div>
          <div class="col-sm-12">
            <div class="insure-tips-text text-red-i" v-show="GetUpCashPostData.IsOneTimePayment">最低保費限10,000元</div>
            <div class="insure-tips-text text-red-i" v-show="!GetUpCashPostData.IsOneTimePayment">最低保費限 3,000元</div>
            <div class="insure-tips-text">單筆保費限75萬，單一公司累積限750萬。</div>
          </div>
        </form>
      </form>
    </div>

    <div class="bg-radius" v-show="!GetUpCashPostData.IsOneTimePayment">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/cointitle.png"></div>
            <div class="insure-check-title">約定續期繳費方式</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label class="col-sm-12 col-form-label insure-label">約定續期繳法別</label>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="top col-sm-12" @click="Onmodx_99_ind(1)">
            <div class="insure-notice-box">
              <div class="insure-check"><img :src="ensure.modx_99_indtrue"></div>
              <div class="insure-check-content">不定期繳</div>
            </div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="top col-sm-12" @click="Onmodx_99_ind(2)">
            <div class="insure-notice-box">
              <div class="insure-check"><img :src="ensure.modx_99_indfalse"></div>
              <div class="insure-check-content">分期繳付</div>
            </div>
          </div>
        </div>
        <div class="form-group row" v-show="(GetUpCashPostData.modx_99_ind === 'Y' && !GetUpCashPostData.IsOneTimePayment)">
          <label class="col-sm-12 col-form-label insure-label">續期繳費管道</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">全國新光人壽行政中心繳費</div>
          </div>
        </div>
        <div class="col-sm-6 dib" v-show="(GetUpCashPostData.modx_99_ind === 'Y' && !GetUpCashPostData.IsOneTimePayment)">
          <div class="insure-tips-text first-blue">
            <img src="../../../../../static/img/insure-link.png">
            <a style="color:#0f71b0" href="https://www.skl.com.tw/serviceCenter.html" target="_blank">查詢各服務中心資訊</a>
          </div>
        </div>
        <div class="col-sm-6 dib" v-show="(GetUpCashPostData.modx_99_ind === 'Y' && !GetUpCashPostData.IsOneTimePayment)">
          <div class="insure-tips-text first-blue">
            <img src="../../../../../static/img/insure-link.png">
            <a style="color:#0f71b0" href="https://www.skl.com.tw/092da5cb14.html" target="_blank">繳費方式</a>
          </div>
        </div>

        <!--Start 分期繳付 -->
        <div class="form-group row" v-show="(GetUpCashPostData.modx_99_ind === 'N' && !GetUpCashPostData.IsOneTimePayment)">
          <label class="col-sm-12 col-form-label insure-label insure-label">續期保險費每期</label>
          <div class="col-sm-11">
            <input type="text" class="form-control insure-input insure-input-edit col-sm-12" v-model="qpoop_25_prem" placeholder="請填寫">
          </div>
          <label class="col-sm-1 col-form-label insure-label insure-label-day">元</label>
        </div>
        <div class="col-sm-12" v-show="(GetUpCashPostData.modx_99_ind === 'N' && !GetUpCashPostData.IsOneTimePayment)">
          <div class="insure-tips-text first-blue text-red-i">
            限輸入3,000~375,000元
          </div>
        </div>
        <div class="form-group row" v-show="(GetUpCashPostData.modx_99_ind === 'N' && !GetUpCashPostData.IsOneTimePayment)">
          <label class="col-sm-12 col-form-label insure-label insure-label">繳別</label>
          <div class="col-sm-12 insure-select-align">
            <select id class="form-control data-input insure-select insure-input-edit" v-model="qpoop_25_modx">
              <option selected="selected" value="0">未選擇</option>
              <option value="12">年</option>
              <option value="6">半年</option>
              <option value="3">季</option>
              <option value="1">月</option>
            </select>
          </div>
          <div class="border-bottom-line col-sm-12" v-show="qpoop_25_modx === '1'"></div>
          <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="qpoop_25_modx === '1'">選擇月繳續期保險費, 首次請繳付第一期與第二期保險費, 合計{{this.faceAmount * 2|decimalComma}}元</label>
        </div>
      </form>
    </div>

    <div class="bg-radius" v-show="GetUpCashPostData.modx_99_ind === 'N' && (GetUpCashPostData.method === 'B' || GetUpCashPostData.method === 'C')">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/cointitle.png"></div>
            <div class="insure-check-title">續期收費管道</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>

      <form class="form-bottom">
        <div class="form-group row">
          <label class="col-sm-12 col-form-label insure-label">繳費方式</label>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="top col-sm-12" @click="OnMethod('C')" v-show="init_method === 'C'">
            <div class="insure-notice-box">
              <div class="insure-check"><img :src="ensure.methodcredit"></div>
              <div class="insure-check-content">信用卡</div>
            </div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="top col-sm-12" @click="OnMethod('B')">
            <div class="insure-notice-box">
              <div class="insure-check"><img :src="ensure.methodtrans"></div>
              <div class="insure-check-content">銀行或郵局帳戶轉帳</div>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips-text">續期繳費管道同時約定為信用卡,會同首期信用卡卡號做繳費
          </div>
        </div>

        <div v-show="GetUpCashPostData.modx_99_ind === 'N' && (GetUpCashPostData.method === 'B') && GetEachAccount !== null" @click="OnAccount('isEdda')">
          <div class="form-group posr row">
            <label class="col-sm-12 col-form-label" :class="{ 'form-group-checked': isEdda }">已約定帳戶</label>
            <div class="checkbox checkbox-oneline" :class="{ checked: isEdda }"></div>
          </div>
          <div v-show="isEdda">
            <div class="form-group row">
              <label class="col-sm-12 col-form-label insure-label">委託人姓名</label>
              <div class="col-sm-12">
                <div class="form-control insure-input-block">{{GetUpCashPostData.client_names}}</div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-12 col-form-label insure-label">委託人身分證字號</label>
              <div class="col-sm-12">
                <div class="form-control insure-input-block">{{GetUpCashPostData.client_id}}</div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-12 col-form-label insure-label">金融機構代碼</label>
              <div class="col-sm-12">
                <div class="form-control insure-input-block">{{GetEachAccount === null ? '' : GetEachAccount.BankCode}}</div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-12 col-form-label insure-label">金融機構中文名稱</label>
              <div class="col-sm-12">
                <div class="form-control insure-input-block">{{GetEachAccount === null ? '' : GetEachAccount.BankName}}</div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-12 col-form-label insure-label">銀行帳戶</label>
              <div class="col-sm-12">
                <div class="form-control insure-input-block">{{GetEachAccount === null ? '' : GetEachAccount.AccountNo}}</div>
              </div>
            </div>
          </div>
        </div>

        <div v-show="GetUpCashPostData.modx_99_ind === 'N' && (GetUpCashPostData.method === 'B')" @click="OnAccount('isNotEdda')">
          <div class="form-group posr row">
            <label class="col-sm-12 col-form-label" :class="{ 'form-group-checked': !isEdda }">非約定帳戶</label>
            <div class="checkbox checkbox-oneline" :class="{ checked: isNotEdda }"></div>
          </div>
          <div v-show="isNotEdda">
            <div class="form-group row">
              <label class="col-sm-12 col-form-label insure-label">委託人姓名</label>
              <div class="col-sm-12">
                <div class="form-control insure-input insure-input-edit">{{GetUpCashPostData.client_names}}</div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-12 col-form-label insure-label">委託人身分證字號</label>
              <div class="col-sm-12">
                <div class="form-control insure-input insure-input-edit">{{GetUpCashPostData.client_id}}</div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-12 col-form-label insure-label">金融機構代碼</label>
              <div class="col-sm-12">
                <select id="" class="form-control data-input insure-select insure-input-edit" v-model="bank_code_1">
                  <option selected="selected" value="0">請選擇</option>
                  <option v-for="(item, index) in GetBankData" :key="index" :value="item.bank_code + '-' + item.bank_name">{{item.bank_code}} {{item.bank_name}}</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-12 col-form-label insure-label">金融機構中文名稱</label>
              <div class="col-sm-12">
                <div class="form-control insure-input insure-input-edit">{{branchName.split('-')[1]}}</div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-12 col-form-label insure-label">銀行帳戶</label>
              <div class="col-sm-12">
                <input type="number" min="0" class="form-control insure-input insure-input-edit" placeholder="請輸入銀行帳號" v-model="account">
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12" v-show="GetUpCashPostData.method === 'B'">
          <div class="insure-tips-text">備註:續期收費管道若為「銀行或郵局帳戶轉帳」：<br />
            ①請記得列印『保險費暨保單借款利息自動轉帳付款委託書』並檢視資料正確性。若委託書須再進行補印，您可至 新光人壽客戶服務中心 > 保單管理 > 保單明細中重新下載列印。<br />
            ②若確認資料無誤後，再於「原留帳戶印鑑」欄，簽蓋銀行開戶印鑑或簽名，並於二日內自付郵資寄回本公司受理，才算申請完成。請寄到：10018台北市中正區忠孝西路一段66號18樓 新光人壽保險股份有限公司 保費部 轉帳管理課收。
          </div>
        </div>
      </form>
    </div>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-4 footer-title footer-left" @click="GoPrev()">回前一頁</div>
          <div class="col-sm-8 footer-title footer-right" @click="GoNext()">確認送出</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import { toggleModalShow } from '../../../../utils/toggleModal'

export default {
  data() {
    return {
      isEdda: true,
      isNotEdda: false,
      poIssueDate: '',
      branchName: '0',
      accountComputed: '',
      ensure: {
        onetimepaytrue: '../../../../../static/img/oval.png',
        onetimepayfalse: '../../../../../static/img/oval.png',
        initmethodebill: '../../../../../static/img/oval.png',
        initmethodcreditcard: '../../../../../static/img/oval.png',
        modx_99_indtrue: '../../../../../static/img/oval.png',
        modx_99_indfalse: '../../../../../static/img/oval.png',
        methodcredit: '../../../../../static/img/oval.png',
        methodtrans: '../../../../../static/img/oval.png'
      },
      faceAmount: ''
    }
  },
  created() {
    this.FuncGetBank()
    this.FuncEachAccount()
    this.GetUpCashPostData.AccountData[0] = {}
    this.poIssueDate = moment().format(`民國${parseInt(new Date().getFullYear()) - 1911}年MM月DD日起`)
    this.GetUpCashPostData.po_issue_date = moment().format(`YYYY-MM-DD`)
    this.OnMethod('C')
    // 不為空則為未完成保單進入, 需帶入預設值
    if (this.$store.state.UNFINISHID !== null) {
      this.OnInitMethod(this.GetUpCashPostData.init_method)
      this.OnOneTimePayment(this.GetUpCashPostData.IsOneTimePayment)
      this.Onmodx_99_ind(this.GetUpCashPostData.modx_99_ind === 'Y' ? '1' : '2')
      this.face_amtComputed = this.GetUpCashPostData.face_amt
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData,
      'GetEachAccount',
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
        this.GetUpCashPostData.AccountData[0].account = this.accountComputed
        this.GetUpCashPostData.AccountData[0].bank_code_1 = data[0]
        this.GetUpCashPostData.AccountData[0].bank_name_1 = data[1]
        this.branchName = value
      }
    },
    // 非約定帳戶銀行帳號
    account: {
      get() {
        return this.accountComputed
      },
      set(value) {
        this.GetUpCashPostData.AccountData[0].account = value
        this.GetUpCashPostData.AccountData[0].bank_code_1 = this.branchName.split('-')[0]
        this.GetUpCashPostData.AccountData[0].bank_name_1 = this.branchName.split('-')[1]
        this.accountComputed = value
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
        this.GetUpCashPostData.IsOneTimePayment = value
      }
    },
    /**
     * 第一期保險費
     */
    face_amtComputed: {
      get() {
        return this.faceAmount
      },
      set(value) {
        this.faceAmount = value
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
        this.GetUpCashPostData.modx_99_ind = 'Y'
        return 1
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
    ...mapActions([
      'FuncGetBank',
      'FuncGetBankBranches',
      'FuncEachAccount'
    ]),
    GoPrev() {
      this.$router.push(`/upcash-1?token=${this.$store.state.ApiToken}`)
    },
    GoNext() {
      // 非約定帳號,要檢查帳號
      if (!this.GetUpCashPostData.Renewed_Prefer && this.modx_99_ind === '2' && this.init_method === 'B') {
        if (this.GetUpCashPostData.AccountData[0].account === '') {
          toggleModalShow('請輸入銀行帳戶')
          return
        }
      }
      let faceAmount = parseInt(this.face_amtComputed)
      if (faceAmount < 3000) {
        toggleModalShow('第一期保險費限輸入 3,000 ~ 750,000 元，請調整。')
        return
      }
      this.$router.push(`/upcash-2-1`)
    },
    // 約定續期繳費方式
    Onmodx_99_ind(value) {
      if (parseInt(value) === 1) {
        this.ensure.modx_99_indtrue = '../../../../../static/img/oval-ed.png'
        this.ensure.modx_99_indfalse = '../../../../../static/img/oval.png'
      } else {
        this.ensure.modx_99_indtrue = '../../../../../static/img/oval.png'
        this.ensure.modx_99_indfalse = '../../../../../static/img/oval-ed.png'
      }
      this.modx_99_ind = value
      this.OnMethod('B')
    },
    // 是否躉繳
    OnOneTimePayment(value) {
      if (value) {
        this.ensure.onetimepaytrue = '../../../../../static/img/oval-ed.png'
        this.ensure.onetimepayfalse = '../../../../../static/img/oval.png'
      } else {
        this.ensure.onetimepaytrue = '../../../../../static/img/oval.png'
        this.ensure.onetimepayfalse = '../../../../../static/img/oval-ed.png'
      }
      this.IsOneTimePayment = value
    },
    // 首期繳費管道
    OnInitMethod(value) {
      if (value === 'B') {
        this.ensure.initmethodebill = '../../../../../static/img/oval-ed.png'
        this.ensure.initmethodcreditcard = '../../../../../static/img/oval.png'
      } else {
        this.ensure.initmethodebill = '../../../../../static/img/oval.png'
        this.ensure.initmethodcreditcard = '../../../../../static/img/oval-ed.png'
      }
      this.init_method = value
    },
    OnMethod(target) {
      // 分期繳付:2 不定期繳:1
      if (target === 'C') {
        this.ensure.methodcredit = '../../../../../static/img/oval-ed.png'
        this.ensure.methodtrans = '../../../../../static/img/oval.png'
      } else {
        this.ensure.methodcredit = '../../../../../static/img/oval.png'
        this.ensure.methodtrans = '../../../../../static/img/oval-ed.png'
      }
      this.method = target
      this.OnAccount(this.GetEachAccount === null ? 'isNotEdda' : 'isEdda')
    },
    // 約定帳號點擊事件
    OnAccount(target) {
      console.log(target)
      // @click="isEdda = true"
      // 點選已約定帳戶, 要清空AccountData
      if (target === 'isEdda') {
        this.isEdda = true
        this.isNotEdda = false
        this.GetUpCashPostData.Renewed_Prefer = true
        this.GetUpCashPostData.AccountData[0] = {}
      } else { // 非約定帳戶
        this.isEdda = false
        this.isNotEdda = true
        this.GetUpCashPostData.Renewed_Prefer = false
        this.GetUpCashPostData.AccountData[0] = {
          account_type: 'Z',
          account: '',
          bank_code_1: '',
          bank_name_1: ''
        }
      }
    }
  }
}

</script>
