<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-6 footer-title footer-left" @click="GoPrev">上一步</div>
        <div class="col-sm-6 footer-title footer-right" @click="GoNext">下一步</div>
      </nav>
    </div>
  </div>
</template>
<script>
import { BenfToNext } from '../../utils/goNext.js'
export default {
  props: [
    'insname'
  ],
  methods: {
    /**
     * 上一步(回到第一頁)
     */
    GoPrev() {
      this.$router.push('/upcash-3')
    },
    /**
     * 前往填寫聯絡資料
     */
    GoNext() {
      BenfToNext(this.$router, this.insname)
    }
  }
}

</script>
