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
const insNameArr = [
  'ezcash', 'ezcash', 'myway', 'ican', 'iwell'
]
export default {
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
      insNameArr.forEach(name => {
        if (window.location.pathname.toLowerCase().match(name) !== null && window.location.pathname.toLowerCase().match(name).index === 1) {
          this.$router.push(`/${name}-4`)
        }
      })
    }
  }
}

</script>
