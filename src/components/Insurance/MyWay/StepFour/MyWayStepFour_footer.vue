<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-6 footer-title footer-left" @click="GoPrev()">上一步</div>
        <div class="col-sm-6 footer-title footer-right" @click="GoNext()">前往閱讀同意書</div>
      </nav>
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
      this.$router.push('/benf')
    },
    /**
     * 前往填寫聯絡資料
     */
    GoNext() {
      this.$router.push(`/agreement?instypename=myway`)
    }
  }
}

</script>
