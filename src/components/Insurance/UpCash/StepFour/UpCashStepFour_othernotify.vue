<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
          <div class="insure-check-title">被保人其他告知事項</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label insure-label">年收入</label>
        <div class="col-sm-9">
          <input type="number" class="form-control insure-input insure-input-edit" id="" placeholder="請輸入年收入" v-model="insured_income" />
        </div>
        <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">萬元</label>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label insure-label">家庭收入</label>
        <div class="col-sm-9">
          <input type="number" class="form-control insure-input insure-input-edit" id="" placeholder="請輸入家庭收入" v-model="insured_fam_income" />
        </div>
        <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">萬元</label>
      </div>
      <div class="col-sm-12">
        <div class="insure-tips-text first-blue">
          <img src="../../../../../static/img/insure-link.png" alt="">保單查詢：請至新光人壽客戶服務中心〉保單管理〉查詢保單明細
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData
    ]),
    // 年收入
    insured_income: {
      get() {
        return this.GetUpCashPostData.insured_income
      },
      set(value) {
        this.GetUpCashPostData.insured_income = value
      }
    },
    // 家庭收入
    insured_fam_income: {
      get() {
        return this.GetUpCashPostData.insured_fam_income
      },
      set(value) {
        this.GetUpCashPostData.insured_fam_income = value
      }
    }
  }
}

</script>
