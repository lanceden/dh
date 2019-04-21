<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">保價金通知方式(請擇其一填選)</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">電子信箱</label>
          <div class="col-sm-12">
            <div class="insure-input-block"></div>
            <input type="text" class="form-control insure-input insure-input-edit" readonly="readonly" v-model="value_ind">
          </div>
          <div class="checkbox checked"></div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">寄送至客戶住所(通訊地址)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetPostData.InsAddress}}</div>
          </div>
          <div class="checkbox"></div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">輸入新的電子信箱</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id="" placeholder="為保障您的權益，此欄位不可為空白" value="">
          </div>
          <div class="checkbox"></div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">輸入新的寄送地址</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" 
              placeholder="為保障您的權益，此欄位不可為空白" value="">
          </div>
          <div class="checkbox"></div>
        </div>
      </form>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetPostData
    ]),
    value_ind: {
      get() {
        this.$store.state.UpCash.POSTDATA.value_ind = '4'
        return this.$store.state.UpCash.POSTDATA.value_ind
      },
      set(value) {
        this.$store.state.UpCash.POSTDATA.value_ind = value
      }
    }
  }
}

</script>
