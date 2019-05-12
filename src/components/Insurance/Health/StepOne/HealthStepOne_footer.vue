<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoPrev()">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="GotoNext()">填寫投保資料</div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { toggleModalShow } from '../../../../utils/toggleModal'
import { InitColumnData } from '../../../../utils/initColumnData'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes'
import FunctionTypes from '../../../../store/modules/Health/Types/HealthFunctionTypes'
import moment from 'moment'

const NEXTURL = '/Health-2'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetHealthPostData,
      'HeaderIsActive'
    ])
  },
  methods: {
    ...mapActions([
      'SetHeaderIsActive',
      FunctionTypes.FuncHealthIsInit
    ]),
    GoPrev() {
      this.$router.push(`/health-1?leave=true&token=${this.$store.state.ApiToken}`)
    },
    /**
     * 下一步
     */
    GotoNext() {
      if (!this.ValidateData()) return
      this.SetHeaderIsActive(true)
      this.FuncHealthIsInit(true)
      let year = parseInt(moment().format('YYYY')) - 1911
      this.GetHealthPostData.po_issue_date = moment().format('YYYY-MM-DD')
      this.GetHealthPostData.po_issue_date_Name = moment().format(`自民國${year}年MM月DD日起`)
      this.$router.push(NEXTURL)
    },
    /**
     * 驗證資料
     */
    ValidateData() {
      let occuClass = InitColumnData(this.GetHealthPostData.client_occupation_class, '')
      let occuClassCode = InitColumnData(this.GetHealthPostData.client_occupation_class_code, '')
      let occuClassCodeName = InitColumnData(this.GetHealthPostData.client_occupation_class_code_name, '')
      if (occuClass === '' || occuClassCode === '' || occuClassCodeName === '') {
        toggleModalShow('請選擇職業名稱。')
        return false
      }
      if (this.GetHealthPostData.QusAns === null || this.GetHealthPostData.QusAns === undefined) {
        toggleModalShow('請選擇告知事項。')
        return false
      }
      // 有選擇是為驗證不通過
      if (this.GetHealthPostData.QusAns[0].Answar || this.GetHealthPostData.QusAns[1].Answar || this.GetHealthPostData.QusAns[2].Answar || this.GetHealthPostData.QusAns[3].Answar || this.GetHealthPostData.QusAns[4].Answar || this.GetHealthPostData.QusAns[5].Answar || this.GetHealthPostData.QusAns[6].Answar || this.GetHealthPostData.QusAns[7].Answar || this.GetHealthPostData.QusAns[8].Answar) {
        toggleModalShow('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。')
        return false
      }
      return true
    }
  }
}

</script>
