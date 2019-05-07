<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-6 footer-title footer-left" @click="GoPrev()">回前一頁</div>
        <div class="col-sm-6 footer-title footer-right" @click="GoNext()">下一頁</div>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetIGoingPostData
    ])
  },
  methods: {
    ...mapActions([
      'SetHeaderIsActive'
    ]),
    /**
     * 回前一頁
     */
    GoPrev() {
      this.SetHeaderIsActive(false)
      this.$router.og(-1)
    },
    /**
     * 下一頁
     */
    GoNext() {
      // 判斷是否有試算,沒有則跳錯誤
      let modePrem = this.GetIGoingPostData.mode_prem
      if(!parseInt(modePrem) > 0) {
        alert('請先試算保費')
        return
      }
      this.$router.push('/IGoing-3')
    }
  }
}

</script>
