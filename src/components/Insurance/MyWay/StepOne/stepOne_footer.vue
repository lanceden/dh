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
import GetterTypes from '../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import FunctionTypes from '../../../store/modules/MyWay/Types/MyWayFunctionTypes.js'
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
      this.$store.state.MyWay.POSTDATA.po_issue_date = moment().format('YYYY-MM-DD')
      this.$store.state.MyWay.POSTDATA.po_issue_date_Name = moment().format(`自民國${year}年MM月DD日起`)
      this.$router.push('/myway-2')
    },
    ValidateData() {
      if (this.$store.state.MyWay.POSTDATA.client_occupation_class === '' ||
        this.$store.state.MyWay.POSTDATA.client_occupation_class_code === '' ||
        this.$store.state.MyWay.POSTDATA.client_occupation_class_code_name === ''
      ) {
        alert('請選擇職業名稱')
        return false
      }
      if (this.$store.state.MyWay.POSTDATA.QusAns === null) {
        alert('請選擇告知事項')
        return false
      }
      // let ans = this.$store.state.MyWay.POSTDATA.QusAns.filter(obj => obj.Answar === true)
      if (this.$store.state.MyWay.POSTDATA.QusAns[0].Answar === '0' ||
        this.$store.state.MyWay.POSTDATA.QusAns[1].Answar === '0' ||
        this.$store.state.MyWay.POSTDATA.QusAns[2].Answar === '0' ||
        this.$store.state.MyWay.POSTDATA.QusAns[3].Answar === '0' ||
        this.$store.state.MyWay.POSTDATA.QusAns[4].Answar === '0' ||
        this.$store.state.MyWay.POSTDATA.QusAns[5].Answar === '0' ||
        this.$store.state.MyWay.POSTDATA.QusAns[6].Answar === '0' ||
        this.$store.state.MyWay.POSTDATA.QusAns[7].Answar === '0') {
        alert('請選擇告知事項')
        return false
      }
      if (this.$store.state.MyWay.POSTDATA.QusAns[0].Answar === true ||
        this.$store.state.MyWay.POSTDATA.QusAns[1].Answar === true ||
        this.$store.state.MyWay.POSTDATA.QusAns[2].Answar === true ||
        this.$store.state.MyWay.POSTDATA.QusAns[3].Answar === true ||
        this.$store.state.MyWay.POSTDATA.QusAns[4].Answar === true ||
        this.$store.state.MyWay.POSTDATA.QusAns[5].Answar === true ||
        this.$store.state.MyWay.POSTDATA.QusAns[6].Answar === true ||
        this.$store.state.MyWay.POSTDATA.QusAns[7].Answar === true) {
        alert('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。')
        return false
      }
      return true
    }
  }
}

</script>
