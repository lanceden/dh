<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">請閱讀同意書</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="insure-text">
        我已閱讀且同意{{provisionTitle}}
      </div>
      <div class="row insure-btn-r">
        <div class="col-sm-6">
          <button class="btn-r-left" type="">分批閱讀同意書</button>
        </div>
        <div class="col-sm-6">
          <button class="btn-r-right" type="">一次閱讀同意書</button>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="col-sm-12">
        <div class="insure-tips insure-tips-mt-25">
          註：保單條款依據台端於要保書內容勾選並經本公司核保完成之險種別適用之。
        </div>
      </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      provisionTitle: ''
    }
  },
  created() {
    let count = this.GetProvision.length - 1
    this.GetProvision.forEach((provisionName, index) => {
      this.provisionTitle += `『${provisionName}』`
      if(index !== count) this.provisionTitle += `、`
      else this.provisionTitle += `。`
    })
  },
  computed: {
    ...mapGetters([
      'GetProvision'
    ])
  }
}

</script>
