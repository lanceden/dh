<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/phone.png" alt=""></div>
            <div class="insure-check-title">被保人其他告知事項</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">年收入</label>
          <div class="col-sm-12">
            <input type="number" class="form-control insure-input insure-input-edit" id="" placeholder="請輸入年收入" v-model="insured_income" />
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">家庭收入</label>
          <div class="col-sm-12">
            <input type="number" class="form-control insure-input insure-input-edit" id="" placeholder="請輸入家庭收入" v-model="insured_fam_income" />
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-notice-text">
            若要查詢先前填寫告知事項內容，登入後請至「客服中心」>「客戶服務中心」>「 保單管理」中，查詢您過往購買保單的保單明細。
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetEZCashPostData
    ]),
    // 年收入
    insured_income: {
      get() {
        return this.GetEZCashPostData.insured_income
      },
      set(value) {
        this.GetEZCashPostData.insured_income = value
      }
    },
    // 家庭收入
    insured_fam_income: {
      get() {
        return this.GetEZCashPostData.insured_fam_income
      },
      set(value) {
        this.GetEZCashPostData.insured_fam_income = value
      }
    }
  }
}

</script>
