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
          <input type="text" class="form-control insure-input" v-model="GetMyWayPostData.phone_mobile">
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
          <input type="text" class="form-control insure-input" v-model="GetMyWayPostData.phone_area">
          <input type="text" class="form-control insure-input" v-model="GetMyWayPostData.phone_main">
        </div>
      </div>

      <!-- 戶籍地址 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
        <div class="col-sm-12">
          <input type="text" class="form-control insure-input" id="txtOldAddress2" :value="GetMyWayPostData.address2" disabled="disabled">
        </div>
        <div :class="{checkbox: true, checked: true}" id="divOldAddress2" @click="OnRegisterAddr('old')"></div>
        <label for="" class="col-sm-12 col-form-label insure-label">輸入新的戶籍地址</label>
        <div class="col-sm-12">
          <input type="text" class="form-control insure-input" id="txtNewAddress2">
        </div>
        <div :class="{checkbox: true, checked: false}" id="divNewAddress2" @click="OnRegisterAddr('new')"></div>
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
import $ from 'jquery'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetMyWayPostData,
      'GetContactCheckBox'
    ]),
    phone: {
      get() {
        this.GetMyWayPostData.phone
      },
      set(value) {
        console.log(value)
      }
    },
    address: {
      get() {
        return this.GetMyWayPostData.address1
      },
      set(value) {
        console.log(value)
      }
    }
  },
  methods: {
    /**
     * 戶籍地址
     */
    OnRegisterAddr(target) {
      switch (target) {
        case 'old':
          $('#divOldAddress2').removeClass('checked').addClass('checked')
          $('#divNewAddress2').removeClass('checked')
          $('#txtNewAddress2').attr('disabled', true)
          $('#txtNewAddress2').val('')
          break
        case 'new':
          $('#divOldAddress2').removeClass('checked')
          $('#divNewAddress2').removeClass('checked').addClass('checked')
          $('#txtOldAddress2').attr('disabled', true)
          $('#txtNewAddress2').removeAttr('disabled')
          break
      }
    }
  }
}

</script>
