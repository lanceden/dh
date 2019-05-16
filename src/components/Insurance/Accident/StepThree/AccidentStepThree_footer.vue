<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoPrev">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="GoNext()">確認送出</div>
      </nav>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'

export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetAccidentPostData
    ])
  },
  methods: {
    GoPrev() {
      this.$router.push(`/Accident-Estimate`)
    },
    GoNext() {
      // 戶籍地址-輸入新的戶籍地址
      if ($('#txtNewAddress2').val() !== '') {
        this.GetAccidentPostData.address2 = `${this.GetAccidentPostData.city2}${this.GetAccidentPostData.district2}${this.GetAccidentPostData.road2}`
      }
      this.$router.push('/benf?instypename=Accident')
    }
  }
}

</script>
