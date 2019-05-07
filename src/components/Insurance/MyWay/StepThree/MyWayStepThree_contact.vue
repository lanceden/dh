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
          <input type="text" class="form-control insure-input" v-model="phone_mobile">
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
          <input type="text" class="form-control insure-input" v-model="phone_area">
          <input type="text" class="form-control insure-input" v-model="phone_main">
        </div>
      </div>

      <!-- 戶籍地址 -->
      <RegisterAddressComponent :stateData="GetMyWayPostData"></RegisterAddressComponent>

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
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import RegisterAddressComponent from '../../Common/registerAddress'

export default {
  components: {
    RegisterAddressComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetMyWayPostData
    ]),
    // 手機
    phone_mobile: {
      get() {
        return this.GetMyWayPostData.phone_mobile || ''
      },
      set(value) {
        this.this.GetMyWayPostData.phone_mobile = value
      }
    },
    // 電話區碼
    phone_area: {
      get() {
        return this.GetMyWayPostData.phone_area || ''
      },
      set(value) {
        this.GetMyWayPostData.phone_area = value
      }
    },
    // 電話
    phone_main: {
      get() {
        return this.GetMyWayPostData.phone_main || ''
      },
      set(value) {
        this.GetMyWayPostData.phone_main = value
      }
    }
  }
}

</script>
