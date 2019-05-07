<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/account.png" alt=""></div>
          <div class="insure-check-title">要保人匯款帳戶</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構代碼</label>
        <div class="col-sm-12 insure-select-align">
          <select id="" class="form-control data-input insure-select insure-input-edit" v-model="BenfBankcode1">
            <option selected="selected" value="0">請選擇</option>
            <option v-for="(item, index) in GetBankData" :key="index" :value="item.bank_code + '-' + item.bank_name">{{item.bank_code}} {{item.bank_name}}</option>
          </select>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="insure-tips-text" onclick="location.href='Insure-BankList.html'">
          <img src="../../../static/img/insure-link.png" alt="">查詢合作金融機構
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構分行代號</label>
        <div class="col-sm-12">
          <select class="form-control data-input insure-select insure-input-block-edit" ref="BenfBankBranch1" v-model="BenfBankBranch1">
            <option selected="selected" value="0">請選擇</option>
            <option v-for="(item, index) in GetBankBranches" :key="index" :value="item.code + '-' + item.name">{{item.code}} {{item.name}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構分行中文名稱</label>
        <div class="col-sm-12">
          <input type="text" class="form-control insure-input-block" id placeholder v-model="branchName" disabled="disabled" />
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label insure-label">銀行帳號</label>
        <div class="col-sm-12">
          <input type="number" min="0" class="form-control insure-input insure-input-edit" v-model="BenfBankAccount1">
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
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      BenfBankcode: 0,
      branchCode: 0,
      branchName: '',
      account: ''
    }
  },
  props: [
    'stateData'
  ],
  created() {
    this.FuncGetBank()
  },
  computed: {
    ...mapGetters([
      'GetBankData',
      'GetBankBranches'
    ]),
    // 金融機構代碼
    BenfBankcode1: {
      get() {
        return this.BenfBankcode
      },
      set(value) {
        let data = value.split('-')
        this.FuncGetBankBranches(data[0])
        this.stateData.BenfBankcode1 = data[0]
        this.stateData.BenfBankName1 = data[1]
        this.BenfBankcode = value
      }
    },
    // 金融機構分行代號
    BenfBankBranch1: {
      get() {
        return this.branchCode
      },
      set(value) {
        let data = value.split('-')
        this.stateData.BenfBankBranch1 = data[0]
        // 金融機構中文名稱
        this.stateData.BenfBankBranchName1 = data[1]
        this.branchCode = value
        this.branchName = this.stateData.BenfBankBranchName1
      }
    },
    // 銀行帳號
    BenfBankAccount1: {
      get() {
        return this.account
      },
      set(value) {
        this.stateData.BenfBankAccount1 = value
        this.account = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetBank',
      'FuncGetBankBranches'
    ])
  }
}

</script>
