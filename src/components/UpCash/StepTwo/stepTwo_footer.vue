<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-6 footer-title footer-left" @click="GoPrev()">上一步</div>
        <div class="col-sm-6 footer-title footer-right" @click="GoNext()">前往填寫聯絡資料</div>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'SetHeaderIsActive'
    ]),
    GoPrev() {
      this.SetHeaderIsActive(false)
      this.$router.push('upcash-1')
    },
    GoNext() {
      this.$router.push('/upcash-3')
    }
  }
}

</script>
