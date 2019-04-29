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
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetICanPostData
    ])
  },
  methods: {
    GoPrev() {
      this.$router.push('ICan-2')
    },
    GoNext() {
      // 戶籍地址-輸入新的戶籍地址
      if ($('#txtNewAddress2').val() !== '') {
        this.GetICanPostData.address2 = $('#txtNewAddress2').val()
        this.GetICanPostData.zip2 = '234'
        this.GetICanPostData.city2 = '新北市'
        this.GetICanPostData.district2 = '永和區'
        this.GetICanPostData.road2 = '安和里12鄰水源街19號'
      }
      // 通訊地址-輸入新的通訊地址
      if ($('#txtNewAddress1').val() !== '') {
        this.GetICanPostData.address1 = $('#txtNewAddress1').val()
        this.GetICanPostData.zip1 = '234'
        this.GetICanPostData.city1 = '新北市'
        this.GetICanPostData.district1 = '永和區'
        this.GetICanPostData.road1 = '安和里12鄰水源街19號'
      }
      this.$router.push('/benf?instypename=ican')
    }
  }
}

</script>
