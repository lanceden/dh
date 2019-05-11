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
            {{GetICanPostData.email}}
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">要保人手機</label>
        <div class="col-sm-12">
          <div class="insure-notice-text">
            {{GetICanPostData.phone}}
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
export default {
  data() {
    return {
      cbOldAddr: true,
      cbNewAddr: false,
      tempAddr: ''
    }
  },
  created() {
    this.tempAddr = this.GetICanPostData.InsAddress
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetICanPostData
    ])
  },
  methods: {
    OnCheck(type) {
      switch (type) {
        case 'cbOldAddr':
          this.cbOldAddr = true
          this.cbNewAddr = false
          this.GetICanPostData.InsAddress = this.tempAddr
          break
        case 'cbNewAddr':
          this.cbOldAddr = false
          this.cbNewAddr = true
          this.GetICanPostData.InsAddress = ''
          break
      }
    }
  }
}

</script>
