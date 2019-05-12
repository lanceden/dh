<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoPrev">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="GoNext()">填寫受益人資料</div>
      </nav>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'

export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetIGoingPostData
    ])
  },
  methods: {
    GoPrev() {
      this.$router.push(`/igoing-Estimate`)
    },
    GoNext() {
      // 戶籍地址-輸入新的戶籍地址
      if ($('#txtNewAddress2').val() !== '') {
        this.GetIGoingPostData.address2 = `${this.GetIGoingPostData.city2}${this.GetIGoingPostData.district2}${this.GetIGoingPostData.road2}`
      }
      this.$router.push('/benf?instypename=IGoing')
    }
  }
}

</script>
