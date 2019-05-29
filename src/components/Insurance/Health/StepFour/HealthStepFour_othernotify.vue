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
        <label for class="col-sm-12 col-form-label insure-label insure-label">婚姻狀況</label>
        <div class="col-sm-12">
          <select id="owner_marriage" class="form-control data-input insure-select insure-input-block-edit" v-model="owner_marriage">
            <option value="1">未婚</option>
            <option value="2">已婚</option>
            <option value="3">離婚</option>
            <option value="4">喪偶</option>
            <option value="5">分居</option>
            <option value="6">其他</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">身高</label>
        <div class="col-sm-10">
          <input type="text" class="form-control insure-input insure-input-edit col-sm-12" id="" placeholder="請輸入" v-model="insured_height">
        </div>
        <label class="col-sm-2 col-form-label insure-label insure-label-day">公分</label>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">體重</label>
        <div class="col-sm-10">
          <input type="text" class="form-control insure-input insure-input-edit col-sm-12" id="" placeholder="請輸入" v-model="insured_weight">
        </div>
        <label class="col-sm-2 col-form-label insure-label insure-label-day">公斤</label>
      </div>

      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">個人年收入</label>
        <div class="col-sm-10">
          <input type="text" class="form-control insure-input insure-input-edit col-sm-12" id="" placeholder="請輸入" v-model="insured_income">
        </div>
        <label class="col-sm-2 col-form-label insure-label insure-label-day">萬元</label>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">家庭年收入</label>
        <div class="col-sm-10">
          <input type="text" class="form-control insure-input insure-input-edit col-sm-12" id="" placeholder="請輸入" v-model="insured_fam_income">
        </div>
        <label class="col-sm-2 col-form-label insure-label insure-label-day">萬元</label>
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
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetHealthPostData
    ]),
    // 婚姻狀況
    owner_marriage: {
      get() {
        return this.GetHealthPostData.owner_marriage || 1
      },
      set(value) {
        this.GetHealthPostData.owner_marriage = value
      }
    },
    // 身高
    insured_height: {
      get() {
        return this.GetHealthPostData.insured_height
      },
      set(value) {
        this.GetHealthPostData.insured_height = value
      }
    },
    // 體重
    insured_weight: {
      get() {
        return this.GetHealthPostData.insured_weight
      },
      set(value) {
        this.GetHealthPostData.insured_weight = value
      }
    },
    // 年收入
    insured_income: {
      get() {
        return this.GetHealthPostData.insured_income
      },
      set(value) {
        this.GetHealthPostData.insured_income = value
      }
    },
    // 家庭收入
    insured_fam_income: {
      get() {
        return this.GetHealthPostData.insured_fam_income
      },
      set(value) {
        this.GetHealthPostData.insured_fam_income = value
      }
    }
  }
}

</script>
