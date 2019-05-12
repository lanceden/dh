<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoPrev()">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="GoNext()">確認送出</div>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { toggleModalShow } from '../../../../utils/toggleModal'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'

const NEXTURL = '/upcash-3'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData
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
      this.$router.go(-1)
    },
    /**
     * 前往填寫聯絡資料
     */
    GoNext() {
      // 判斷是否有試算,沒有則跳錯誤
      let modePrem = this.GetUpCashPostData.mode_prem
      if (!parseInt(modePrem) > 0) {
        toggleModalShow('請先試算保費')
        return
      }
      this.$router.push(NEXTURL)
    }
  }
}

</script>
