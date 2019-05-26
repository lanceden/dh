<template>
  <div class="bg-radius" v-show="parseInt(stateData.benf_num) > 1">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../static/img/checkmark.png" alt=""></div>
          <div class="insure-check-title">身故受益人(二)資料</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>

    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身故受益人(二)</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.benf_name2}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
        <div class="col-sm-12">
          <div class="insure-input-block">順位{{stateData.relation_ben_death_seq2}}，{{stateData.relation_ben_death_seq_percent2}}%</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
        <div class="col-sm-12">
          <div class="insure-input-block" v-show="parseInt(stateData.relation_ben_death2) === 2">配偶</div>
          <div class="insure-input-block" v-show="parseInt(stateData.relation_ben_death2) === 3">父母子女</div>
          <div class="insure-input-block" v-show="parseInt(stateData.relation_ben_death2) === 6">祖孫</div>
          <div class="insure-input-block" v-show="parseInt(stateData.relation_ben_death2) === 8">法定繼承人</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">國籍</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.BenfNationality2}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.benf_dob2}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.benf_id2}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
        <div class="col-sm-12">
          <div class="insure-input-block">電話：{{stateData.benf_phone2}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">聯絡地址</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.BenfAdd_City2}}{{stateData.BenfAdd_County2}}{{stateData.BenfAddRemain2}}</div>
        </div>
      </div>
      <div class="form-group row" v-show="showBenfAccountData">
        <label for="" class="col-sm-12 col-form-label insure-label">金融機構代號</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.BenfBankCode2}}</div>
        </div>
      </div>
      <div class="form-group row" v-show="showBenfAccountData">
        <label for="" class="col-sm-12 col-form-label insure-label">金融機構中文名稱</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.BenfBankBranchName2}}</div>
        </div>
      </div>
      <div class="form-group row" v-show="showBenfAccountData">
        <label for="" class="col-sm-12 col-form-label insure-label">匯款帳號</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.BenfBankAccount2}}</div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: [
    'stateData'
  ],
  mounted() {
    this.accountDataOne()
  },
  computed: {
    showBenfAccountData() {
      return this.stateData.plan_code === 'UC099' || this.stateData.plan_code === 'UCA99' || this.stateData.plan_code === 'EZA99' || this.stateData.plan_code === 'LAA01'
    }
  },
  methods: {
    accountDataOne() {
      this.stateData.AccountData.forEach(benf => {
        if(benf.account_type === 'D' && benf.naac_client_id === this.stateData.benf_id2) {
          this.stateData.BenfBankCode2 = benf.bank_code_1
          this.stateData.BenfBankBranchName2 = benf.bank_name_2
          this.stateData.BenfBankAccount2 = benf.account
        }
      })
    }
  }
}

</script>
