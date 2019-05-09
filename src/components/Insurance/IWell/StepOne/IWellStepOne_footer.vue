<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-6 footer-title footer-left" @click="GoToPrev()">回前一頁</div>
        <div class="col-sm-6 footer-title footer-right" @click="GotoNext()">填寫投保資料</div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { toggleModalShow } from '../../../../utils/toggleModal'
import { InitColumnData } from '../../../../utils/initColumnData'
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import FunctionTypes from '../../../../store/modules/IWell/Types/IWellFunctionTypes.js'

const NEXTURL = '/IWell-2'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetIWellPostData,
      'HeaderIsActive'
    ])
  },
  methods: {
    ...mapActions([
      'SetHeaderIsActive',
      FunctionTypes.FuncIWellIsInit
    ]),
    GoToPrev() {
      this.$router.push(`/IWellelecform?token=${this.$store.state.ApiToken}`)
    },
    /**
     * 下一步
     */
    GotoNext() {
      let result = this.ValidateData()
      if (!result) return
      this.SetHeaderIsActive(true)
      this.FuncIWellIsInit(true)
      this.$router.push(NEXTURL)
    },
    /**
     * 驗證資料
     */
    ValidateData() {
      let occuClass = InitColumnData(this.GetIWellPostData.client_occupation_class, 0)
      if (parseInt(occuClass) === 0) {
        toggleModalShow('請選擇職業類別。')
        return false
      }
      if (this.GetIWellPostData.QusAns[0].Answar || this.GetIWellPostData.QusAns[2].Answar || this.GetIWellPostData.QusAns[3].Answar || this.GetIWellPostData.QusAns[4].Answar) {
        toggleModalShow('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉,再次感謝您的惠顧。')
        return false
      }
      this.GetIWellPostData.insure_peer_plan_1 = this.GetIWellPostData.QusAns[1].Answar ? 'Y' : 'N'
      return true
    }
  }
}

</script>
