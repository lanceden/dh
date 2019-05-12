<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoToPrev()">回上一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="GoNext()">發送簡訊驗證</div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    GoToPrev() {
      this.$router.push(`/agreement?instypename=IWell`)
    },
    /**
     * OTP
     */
    GoNext() {
      this.$router.push('/otp')
    }
  }
}

</script>
