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
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">身高</label>
          <div class="col-sm-12">
            <input type="number" class="form-control insure-input insure-input-edit" id="" placeholder="請輸入身高" v-model="insured_height" />
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">體重</label>
          <div class="col-sm-12">
            <input type="number" class="form-control insure-input insure-input-edit" id="" placeholder="請輸入體重" v-model="insured_weight" />
          </div>
        </div>
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
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetMyWayPostData
    ]),
    // 婚姻狀況
    owner_marriage: {
      get() {
        return this.GetMyWayPostData.owner_marriage || 1
      },
      set(value) {
        this.GetMyWayPostData.owner_marriage = value
      }
    },
    // 身高
    insured_height: {
      get() {
        return this.GetMyWayPostData.insured_height
      },
      set(value) {
        this.GetMyWayPostData.insured_height = value
      }
    },
    // 體重
    insured_weight: {
      get() {
        return this.GetMyWayPostData.insured_weight
      },
      set(value) {
        this.GetMyWayPostData.insured_weight = value
      }
    },
    // 年收入
    insured_income: {
      get() {
        return this.GetMyWayPostData.insured_income
      },
      set(value) {
        this.GetMyWayPostData.insured_income = value
      }
    },
    // 家庭收入
    insured_fam_income: {
      get() {
        return this.GetMyWayPostData.insured_fam_income
      },
      set(value) {
        this.GetMyWayPostData.insured_fam_income = value
      }
    }
  }
}

</script>
