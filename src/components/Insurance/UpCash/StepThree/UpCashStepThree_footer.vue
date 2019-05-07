<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-6 footer-title footer-left" @click="GoPrev">上一步</div>
        <div class="col-sm-6 footer-title footer-right" @click="GoNext()">下一步</div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    GoPrev() {
      this.$router.go(-1)
    },
    GoNext() {
      this.$router.push('/benf?instypename=upcash')
    }
  }
}

</script>
