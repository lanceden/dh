<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check">
            <img src="images/chat.png" alt>
          </div>
            <div class="insure-check-title">請確認要保人及被保人資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="insure-text">主管機關規定，要保人及被保人資料需為同一人，如需修改個人資料，請洽本公司客戶服務中心。</div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">被保險人</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" v-model="GetPostData.client_names" disabled="disabled" />
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">被保險人出生年月日</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" v-model="GetPostData.client_birth" disabled="disabled" />
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">被保險人身分證字號</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" v-model="GetPostData.client_id" disabled="disabled" />
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">被保險人性別</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" v-model="GetPostData.client_id.substr(1, 1) % 2 === 0 ? '女' : '男'" disabled="disabled" />
          </div>
        </div>
        <div class="row col-width">
          <div class="col-sm-12">
            <button class="button-blue btn-block">聯絡客服修改</button>
          </div>
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
    ])
  }
}

</script>
