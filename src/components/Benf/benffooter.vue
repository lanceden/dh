<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoPrev()">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="GoNext()">確認送出</div>
      </nav>
    </div>
  </div>
</template>
<script>
import { BenfToNext } from '../../utils/goNext.js'
export default {
  methods: {
    /**
     * 回前一頁
     */
    GoPrev() {
      this.$router.push(`/${this.$store.state.PLANNAME.toLowerCase()}-3`)
    },
    /**
     * 前往填寫聯絡資料
     */
    GoNext() {
      BenfToNext(this.$router, this.$store.state.PLANNAME.toLowerCase())
    }
  }
}

</script>
