<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-12 footer-title footer-right" @click="GoNext()">驗證</div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    /**
     * 付款頁
     */
    GoNext() {
      this.$router.push('/payment')
    }
  }
}

</script>
