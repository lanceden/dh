<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-6 footer-title footer-left" @click="GoPrev()">回前一頁</div>
        <div class="col-sm-6 footer-title footer-right" @click="GoNext()">確認送出</div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    GoPrev() {
      this.$router.push(`/upcash-Estimate`)
    },
    GoNext() {
      this.$router.push('/benf?instypename=upcash')
    }
  }
}

</script>
