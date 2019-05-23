<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/chat.png" alt=""></div>
          <div class="insure-check-title">請閱讀同意書</div>
          <span class="insure-check-title red-right-title" @click="toggleAll()">{{contentButtonTitle}}<img class="arrow" src="../../../static/img/arrowdown.png"></span>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="insure-text">
      我已閱讀{{provisionTitle}}
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
      provisionTitle: '',
      contentButtonTitle: '全部展開'
    }
  },
  created() {
    let count = this.GetProvision.length - 1
    this.GetProvision.forEach((provisionName, index) => {
      this.provisionTitle += `『${provisionName}』`
      if (index !== count) this.provisionTitle += `、`
      else this.provisionTitle += `。`
    })
  },
  computed: {
    ...mapGetters([
      'GetProvision'
    ])
  },
  methods: {
    toggleAll() {
      this.$store.state.AGREEMENTTOGGLE = !this.$store.state.AGREEMENTTOGGLE
      this.contentButtonTitle = this.$store.state.AGREEMENTTOGGLE ? '全部收起' : '全部展開'
    }
  }
}

</script>
