<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-12 footer-title footer-gary" @click="GoNext">我已同意並閱讀完成</div>
        <!-- <div class="col-sm-12 footer-title footer-right">我已同意並閱讀完成</div> -->
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    /**
     * 投保資訊
     */
    GoNext() {
      this.$router.push('/InsuredData')
    }
  }
}

</script>
