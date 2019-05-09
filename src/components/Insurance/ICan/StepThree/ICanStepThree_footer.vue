<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-6 footer-title footer-left" @click="GoPrev()">回前一頁</div>
        <div class="col-sm-6 footer-title footer-right" @click="GoNext()">填寫受益人資料</div>
      </nav>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetICanPostData
    ])
  },
  methods: {
    GoPrev() {
      this.$router.go(-1)
    },
    GoNext() {
      // 戶籍地址-輸入新的戶籍地址
      if ($('#txtNewAddress2').val() !== '') {
        this.GetICanPostData.address2 = $('#txtNewAddress2').val()
      }
      // 通訊地址-輸入新的通訊地址
      if ($('#txtNewAddress1').val() !== '') {
        this.GetICanPostData.address1 = $('#txtNewAddress1').val()
      }
      console.log(this.GetICanPostData)
      this.$router.push('/benf?instypename=ican')
    }
  }
}

</script>
