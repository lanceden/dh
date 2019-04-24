<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-12 footer-title footer-right" @click="GoNext()">發送簡訊驗證</div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    /**
     * OTP
     */
    GoNext() {
      this.$router.push('/otp')
    }
  }
}

</script>
