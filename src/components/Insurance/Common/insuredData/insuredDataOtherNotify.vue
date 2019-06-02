<template>
  <div>
    <div class="form-group row" v-show="isHideMarriage">
      <label for="" class="col-sm-12 col-form-label insure-label insure-label">婚姻狀況</label>
      <div class="col-sm-12">
        <div class="insure-input-block" v-show="parseInt(stateData.owner_marriage) === 1">未婚</div>
        <div class="insure-input-block" v-show="parseInt(stateData.owner_marriage) === 2">已婚</div>
        <div class="insure-input-block" v-show="parseInt(stateData.owner_marriage) === 3">離婚</div>
        <div class="insure-input-block" v-show="parseInt(stateData.owner_marriage) === 4">喪偶</div>
        <div class="insure-input-block" v-show="parseInt(stateData.owner_marriage) === 5">分居</div>
        <div class="insure-input-block" v-show="parseInt(stateData.owner_marriage) === 6">其他</div>
      </div>
    </div>
    <div class="form-group row" v-show="isHideHeightAndWeight">
      <label for="" class="col-sm-12 col-form-label insure-label insure-label">身高</label>
      <div class="col-sm-9">
        <div class="insure-input-block">{{stateData.insured_height}}</div>
      </div>
      <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">公分</label>
    </div>
    <div class="form-group row" v-show="isHideHeightAndWeight">
      <label for="" class="col-sm-12 col-form-label insure-label insure-label">體重</label>
      <div class="col-sm-9">
        <div class="insure-input-block">{{stateData.insured_weight}}</div>
      </div>
      <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">公斤</label>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label insure-label">年收入</label>
      <div class="col-sm-9">
        <div class="insure-input-block">{{stateData.insured_income}}</div>
      </div>
      <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">萬元</label>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label insure-label">家庭年收入</label>
      <div class="col-sm-9">
        <div class="insure-input-block">{{stateData.insured_fam_income}}</div>
      </div>
      <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">萬元</label>
    </div>
  </div>
</template>


<script>
export default {
  props: [
    'stateData'
  ],
  computed: {
    // 是否顯示婚姻
    isHideMarriage() {
      let planCode = this.stateData.plan_code
      return planCode !== 'UC099' && planCode !== 'UCA99' && planCode !== 'EZA99'
    },
    // 是否顯示身高體重
    isHideHeightAndWeight() {
      let planCode = this.stateData.plan_code
      return planCode === 'KAA01' || planCode === 'LAA01' || planCode === 'LAARE'
    }
  }
}

</script>
