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
import $ from 'jquery'
export default {
  methods: {
    GoPrev() {
      this.$router.push('IGoing-2')
    },
    GoNext() {
      // 戶籍地址-輸入新的戶籍地址
      if ($('#txtNewAddress2').val() !== '') {
        this.GetMyWayPostData.address2 = $('#txtNewAddress2').val()
        this.GetMyWayPostData.zip2 = '234'
        this.GetMyWayPostData.city2 = '新北市'
        this.GetMyWayPostData.district2 = '永和區'
        this.GetMyWayPostData.road2 = '安和里12鄰水源街19號'
      }
      this.$router.push('/benf?instypename=IGoing')
    }
  }
}

</script>
