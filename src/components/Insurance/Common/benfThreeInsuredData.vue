<template>
  <div v-show="parseInt(stateData.benf_num) > 2">
    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身故受益人(三)</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.benf_name3}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
        <div class="col-sm-12">
          <div class="insure-input-block">順位{{stateData.relation_ben_death_seq3}}，{{stateData.relation_ben_death_seq_percent3}}%</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
        <div class="col-sm-12">
          <div class="insure-input-block" v-show="parseInt(stateData.relation_ben_death3) === 2">配偶</div>
          <div class="insure-input-block" v-show="parseInt(stateData.relation_ben_death3) === 3">父母子女</div>
          <div class="insure-input-block" v-show="parseInt(stateData.relation_ben_death3) === 6">祖孫</div>
          <div class="insure-input-block" v-show="parseInt(stateData.relation_ben_death3) === 8">法定繼承人</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">國籍</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.BenfNationality3}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.benf_dob3}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.benf_id3}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
        <div class="col-sm-12">
          <div class="insure-input-block">電話：{{stateData.benf_phone3}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">聯絡地址</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.BenfAddress3}}</div>
        </div>
      </div>
      <div class="form-group row" v-show="showBenfAccountData">
        <label for="" class="col-sm-12 col-form-label insure-label">金融機構代號</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.BenfBankCode3}}</div>
        </div>
      </div>
      <div class="form-group row" v-show="showBenfAccountData">
        <label for="" class="col-sm-12 col-form-label insure-label">金融機構中文名稱</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.BenfBankBranchName3}}</div>
        </div>
      </div>
      <div class="form-group row" v-show="showBenfAccountData">
        <label for="" class="col-sm-12 col-form-label insure-label">匯款帳號</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.BenfBankAccount3}}</div>
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
  created() {
    console.log(this.stateData.benf_num)
  },
  computed: {
    showBenfAccountData() {
      return this.stateData.plan_code === 'UC099' || this.stateData.plan_code === 'UCA99' || this.stateData.plan_code === 'EZA99' || this.stateData.plan_code === 'LAA01'
    }
  },
  methods: {
    accountDataOne() {
      this.stateData.AccountData.forEach(benf => {
        if(benf.account_type === 'D' && benf.naac_client_id === this.stateData.benf_id3) {
          this.stateData.BenfBankCode3 = benf.bank_code_1
          this.stateData.BenfBankBranchName3 = benf.bank_name_2
          this.stateData.BenfBankAccount3 = benf.account
        }
      })
    }
  }
}

</script>
