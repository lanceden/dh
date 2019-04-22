<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-12 footer-title footer-right" @click="GotoNext()">下一步</div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GetterTypes from '../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import FunctionTypes from '../../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
import moment from 'moment'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetPostData,
      'HeaderIsActive'
    ])
  },
  methods: {
    ...mapActions([
      'SetHeaderIsActive',
      FunctionTypes.FuncIsInit
    ]),
    GotoNext() {
      let result = this.ValidateData()
      if (!result) return
      this.SetHeaderIsActive(true)
      this.FuncIsInit(true)
      let year = parseInt(moment().format('YYYY')) - 1911
      this.$store.state.UpCash.POSTDATA.po_issue_date = moment().format('YYYY-MM-DD')
      this.$store.state.UpCash.POSTDATA.po_issue_date_Name = moment().format(`自民國${year}年MM月DD日起`)
      this.$router.push('/upcash-2')
    },
    ValidateData() {
      if (this.$store.state.UpCash.POSTDATA.client_occupation_class === '' ||
        this.$store.state.UpCash.POSTDATA.client_occupation_class_code === '' ||
        this.$store.state.UpCash.POSTDATA.client_occupation_class_code_name === ''
      ) {
        alert('請選擇職業名稱')
        return false
      }
      if (this.$store.state.UpCash.POSTDATA.QusAns === null) {
        alert('請選擇本人僅為台灣之稅務居民')
        return false
      }
      if (this.$store.state.UpCash.POSTDATA.QusAns[0].Answar === false) {
        alert('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。')
        return false
      }
      if (this.$store.state.UpCash.POSTDATA.CRSData.birth_national === null ||
        this.$store.state.UpCash.POSTDATA.CRSData.birth_national === '') {
        alert('請選擇國籍')
        return false
      }
      if (this.$store.state.UpCash.POSTDATA.CRSData.birth_city === null ||
        this.$store.state.UpCash.POSTDATA.CRSData.birth_city === '') {
        alert('請填寫城市')
        return false
      }
      return true
    }
  }
}

</script>
