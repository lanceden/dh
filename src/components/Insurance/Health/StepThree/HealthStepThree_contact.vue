<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
            <div class="insure-check-title">聯絡資料</div>
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
    <RegisterAddressComponent :stateData="GetHealthPostData"></RegisterAddressComponent>

    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-6 footer-title footer-left" @click="GoPrev()">上一步</div>
          <div class="col-sm-6 footer-title footer-right" @click="GoNext()">下一步</div>
        </nav>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
import RegisterAddressComponent from '../../Common/registerAddress'

export default {
  components: {
    RegisterAddressComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetHealthPostData
    ]),
    // 手機
    phone_mobile: {
      get() {
        return this.GetHealthPostData.phone_mobile || ''
      },
      set(value) {
        this.this.GetHealthPostData.phone_mobile = value
      }
    },
    // 電話區碼
    phone_area: {
      get() {
        return this.GetHealthPostData.phone_area || ''
      },
      set(value) {
        this.GetHealthPostData.phone_area = value
      }
    },
    // 電話
    phone_main: {
      get() {
        return this.GetHealthPostData.phone_main || ''
      },
      set(value) {
        this.GetHealthPostData.phone_main = value
      }
    },
    phone_ext: {
      get() {
        return this.GetHealthPostData.phone_ext
      },
      set(value) {
        this.GetHealthPostData.phone_ext = value
      }
    },
    // 電子郵件
    email: {
      get() {
        return this.GetHealthPostData.email
      },
      set(value) {
        this.GetHealthPostData.email = value
      }
    }
  },
  methods: {
    GoPrev() {
      this.$router.push(`/Health-Estimate`)
    },
    GoNext() {
      this.$router.push('/Health-account')
    }
  }
}

</script>
