<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/account.png" alt=""></div>
            <div class="insure-check-title">要保人匯款帳戶</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構代碼</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit" v-model="Applicant_BankCode">
              <option selected="selected">請選擇</option>
              <option v-for="(item, index) in GetBankData" :key="index" :value="item.bank_code + '-' + item.bank_name">{{item.bank_code}} {{item.bank_name}}</option>
            </select>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips-text" onclick="location.href='Insure-BankList.html'">
            <img src="../../../../../static/img/insure-link.png" alt="">查詢合作金融機構
          </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構分行代號</label>
            <div class="col-sm-12">
              <select class="form-control data-input insure-select insure-input-block-edit" ref="Applicant_BranchCode" v-model="Applicant_BranchCode">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in GetBankBranches" :key="index" :value="item.code + '-' + item.name">{{item.name}}</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構中文名稱</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" disabled="disabled" v-model="Applicant_BranchName">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label insure-label">銀行帳號</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" v-model="Applicant_Account">
            </div>
          </div>
          <div class="col-sm-12">
            <div class="insure-notice-text-ul">
              <ul class="insure-notice-text-ul-p">
                <li>​如有應退還、返還或應給付予要保人之款項，除已另有約定給付方式外，本公司得將該款項匯入上列要保人帳戶。</li>
              </ul>
            </div>
          </div>
      </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes'
export default {
  computed: {
    ...mapGetters([
      'GetBankBranches',
      'GetBankData',
      GetterTypes.GetEZCashPostData
    ]),
    // 金融機構代碼
    Applicant_BankCode: {
      get() {
        return this.GetEZCashPostData.Applicant_BankCode
      },
      set(value) {
        let data = value.split('-')
        this.FuncGetBankBranches(data[0])
        this.GetEZCashPostData.Applicant_BankCode = data[0]
        this.GetEZCashPostData.Applicant_BankName = data[1]
      }
    },
    // 金融機構分行代號
    Applicant_BranchCode: {
      get() {
        return (this.GetEZCashPostData.Applicant_BranchCode === '' || this.GetEZCashPostData.Applicant_BranchCode === null || this.GetEZCashPostData.Applicant_BranchCode === undefined) ? 0 : this.GetEZCashPostData.Applicant_BranchCode
      },
      set(value) {
        let data = value.split('-')
        this.GetEZCashPostData.Applicant_BranchCode = data[0]
        this.GetEZCashPostData.Applicant_BranchName = data[1]
      }
    },
    // 金融機構中文名稱
    Applicant_BranchName: {
      get() {
        return this.GetEZCashPostData.Applicant_BranchName
      }
    },
    // 銀行帳號
    Applicant_Account: {
      get() {
        return this.GetEZCashPostData.Applicant_Account
      },
      set(value) {
        this.GetEZCashPostData.Applicant_Account = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetBankBranches'
    ])
  }
}

</script>
