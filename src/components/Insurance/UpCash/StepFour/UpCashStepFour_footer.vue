<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoPrev()">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="GoNext()">前往閱讀同意書</div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    /**
     * 回前一頁
     */
    GoPrev() {
      this.$router.push(`/benf?instypename=upcash`)
    },
    /**
     * 前往填寫聯絡資料
     */
    GoNext() {
      this.$router.push(`/agreement?instypename=upcash`)
    }
  }
}

</script>
