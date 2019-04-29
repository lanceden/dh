<template>

  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">請填寫聯絡資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">手機</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input" :value="GetEZCashPostData.phone_mobile">
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips">
            ※如需修改請至「我的資料管理」修改並通過驗證
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">電話</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input" :value="GetEZCashPostData.phone_area">
            <input type="text" class="form-control insure-input" :value="GetEZCashPostData.phone_main">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">同通訊地址</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input" :value="GetEZCashPostData.address1" :disabled="!GetContactCheckBox">
          </div>
          <div :class="{checkbox: true, checked: GetContactCheckBox}" @click="OnRegisterAddr()"></div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">輸入戶籍地址</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" :disabled="GetContactCheckBox" placeholder="為保障您的權益，此欄位不可為空白" value="">
          </div>
          <div :class="{checkbox: true, checked: !GetContactCheckBox}" @click="OnRegisterAddr()"></div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips">
            ※將同步更新客戶基本資料
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
      GetterTypes.GetEZCashPostData,
      'GetContactCheckBox'
    ]),
    phone: {
      get() {
        this.GetEZCashPostData.phone
      },
      set(value) {
        console.log(value)
      }
    },
    address: {
      get() {
        return this.GetEZCashPostData.address1
      },
      set(value) {
        console.log(value)
      }
    }
  },
  methods: {
    OnRegisterAddr() {
      let result = !this.$store.state.CONTACTCHECKBOX
      // 設定輸入戶籍地址
      if (!result) {
        // 先留著看日後會不會調整為下拉框方式
        /**
            // 戶籍地址
            var city2 = $("#EZCashRegisteredCity").val();
            var district = $("#EZCashRegisteredCounty").val();
            var zip2 = district.length > 0 ? district.substring(0, 3) : "";
            var district2 = district.length > 3 ? district.substring(3) : "";
            var road2 = $("#EZCashRegisteredRoad").val();
             */
      }
      this.$store.state.CONTACTCHECKBOX = result
    }
  }
}

</script>
