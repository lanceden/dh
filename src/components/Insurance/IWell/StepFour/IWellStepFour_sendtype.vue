<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="images/chat.png" alt=""></div>
          <div class="insure-check-title">保單寄送地址</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="insure-form">
      保險單形式：<span class="insure-form-im">電子保單</span>
    </div>
    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">要保人電子郵件</label>
        <div class="col-sm-12">
          <div class="insure-notice-text">
            {{GetIWellPostData.email}}
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">要保人手機</label>
        <div class="col-sm-12">
          <div class="insure-notice-text">
            {{GetIWellPostData.phone}}
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-12">
          <div class="insure-notice-text">
            ※變更請至：客戶服務中心>客戶資料管理>客戶驗證狀態
          </div>
          <div class="insure-notice-text">
            ※備註：為響應政府節能減碳政策，愛護地球並為環保盡一份心力，本商品僅提供電子保單
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
export default {
  data() {
    return {
      cbOldAddr: true,
      cbNewAddr: false,
      tempAddr: ''
    }
  },
  created() {
    this.tempAddr = this.GetIWellPostData.InsAddress
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIWellPostData
    ])
  },
  methods: {
    OnCheck(type) {
      switch (type) {
        case 'cbOldAddr':
          this.cbOldAddr = true
          this.cbNewAddr = false
          this.GetIWellPostData.InsAddress = this.tempAddr
          break
        case 'cbNewAddr':
          this.cbOldAddr = false
          this.cbNewAddr = true
          this.GetIWellPostData.InsAddress = ''
          break
      }
    }
  }
}

</script>
