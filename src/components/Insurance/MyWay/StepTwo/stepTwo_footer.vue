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
import { mapActions, mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetMyWayPostData
    ])
  },
  methods: {
    ...mapActions([
      'SetHeaderIsActive'
    ]),
    /**
     * 上一步(回到第一頁)
     */
    GoPrev() {
      this.SetHeaderIsActive(false)
      this.$router.push('MyWay-1')
    },
    /**
     * 前往填寫聯絡資料
     */
    GoNext() {
      // 判斷是否有試算,沒有則跳錯誤
      let modePrem = this.GetMyWayPostData.mode_prem
      if(!parseInt(modePrem) > 0) {
        alert('請先試算保費')
        return
      }
      this.$router.push('/MyWay-3')
    }
  }
}

</script>
