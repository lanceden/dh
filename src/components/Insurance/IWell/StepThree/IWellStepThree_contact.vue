<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/business-card-of-a-man-with-contact-info.png" alt=""></div>
            <div class="insure-check-title">請填寫聯絡資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">手機</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input" v-model="phone_mobile">
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips">
            ※如需修改請至「我的資料管理」修改並通過驗證
          </div>
        </div>
        <!-- 電話區號 -->
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">電話區號</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input" v-model="phone_area">
          </div>
        </div>
        <!-- 電話號碼 -->
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">電話號碼</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input" v-model="phone_main">
          </div>
        </div>
        <!-- 電話分號 -->
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">電話分號</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input" v-model="phone_ext">
          </div>
        </div>
        <!-- 電子郵件(E-mail) -->
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">電子郵件(E-mail)：</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input" v-model="email">
          </div>
        </div>
      </form>
    </div>

    <!-- 戶籍地址 -->
    <RegisterAddressComponent :stateData="GetIWellPostData"></RegisterAddressComponent>
    <!-- 客戶住所(通訊地址) -->
    <CommunityAddressComponent :stateData="GetIWellPostData"></CommunityAddressComponent>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import RegisterAddressComponent from '../../Common/registerAddress'
import CommunityAddressComponent from '../../Common/communityAddress'

export default {
  components: {
    RegisterAddressComponent,
    CommunityAddressComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIWellPostData
    ]),
    // 手機
    phone_mobile: {
      get() {
        return this.GetIWellPostData.phone_mobile || ''
      },
      set(value) {
        this.this.GetIWellPostData.phone_mobile = value
      }
    },
    // 電話區碼
    phone_area: {
      get() {
        return this.GetIWellPostData.phone_area || ''
      },
      set(value) {
        this.GetIWellPostData.phone_area = value
      }
    },
    // 電話
    phone_main: {
      get() {
        return this.GetIWellPostData.phone_main || ''
      },
      set(value) {
        this.GetIWellPostData.phone_main = value
      }
    },
    phone_ext: {
      get() {
        return this.GetIWellPostData.phone_ext
      },
      set(value) {
        this.GetIWellPostData.phone_ext = value
      }
    },
    // 電子郵件
    email: {
      get() {
        return this.GetIWellPostData.email
      },
      set(value) {
        this.GetIWellPostData.email = value
      }
    }
  }
}

</script>
