<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/oval.png" alt=""></div>
            <div class="insure-check-title">新光人壽Up Cash利率變動型年金保險【乙型】保險單條款</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="col-sm-12">
        <ul class="insure-text-notice">
          <li>條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容。</li>
        </ul>
        <div class="text-center table-more insure-more-img">展開閱讀更多<img src="../../../static/img/table-more.png" alt=""></div>
        </div>
      </div>
</template>
<script>
export default {
  methods: {
    /**
     * 上一步(回到第一頁)
     */
    GoPrev() {
      this.SetHeaderIsActive(false)
      this.$router.push('/benf')
    },
    /**
     * 前往填寫聯絡資料
     */
    GoNext() {
      this.$router.push('/upcash-4')
    }
  }
}

</script>
