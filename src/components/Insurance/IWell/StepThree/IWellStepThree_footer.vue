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
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetIWellPostData
    ])
  },
  methods: {
    GoPrev() {
      this.$router.go(-1)
    },
    GoNext() {
      // 戶籍地址-輸入新的戶籍地址
      if ($('#txtNewAddress2').val() !== '') {
        this.GetIWellPostData.address2 = $('#txtNewAddress2').val()
      }
      // 通訊地址-輸入新的通訊地址
      if ($('#txtNewAddress1').val() !== '') {
        this.GetIWellPostData.address1 = $('#txtNewAddress1').val()
      }
      this.$router.push('/benf?instypename=IWell')
    }
  }
}

</script>
