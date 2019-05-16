<template>
  <div>
    <loading v-show="GetLoading" />
    <div class="">
      <div class="bg-radius">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../../../static/img/notepad.png" /></div>
              <div class="insure-check-title">保險費合計結果</div>
            </div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="bg-money">
          <div class="col-sm-12">
            <div class="font-label">您所支付的保險費為：</div>
            <div class="font-money">NT$ {{GetMyWayPostData.mode_prem|decimalComma}}</div>
            <div class="money-icon"><img src="../../../../../static/img/coins.png" /></div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="bg-time">
          <div class="col-sm-12">
            <div class="font-label">保障期間：</div>
            <div class="font-label text-red-i">自民國 {{GetMyWayPostData.po_issue_date_Name}} 午夜十二時起</div>
            <div class="font-label text-red-i">至民國 {{GetMyWayPostData.matured_date_Name}} 午夜十二時止</div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-4 footer-title footer-left" @click="GoToPrev()">回前一頁</div>
          <div class="col-sm-8 footer-title footer-right" @click="GoToNext()">前往填寫聯絡資料</div>
        </nav>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetMyWayPostData
    ])
  },
  methods: {
    GoToPrev() {
      this.$router.push('/myway-2')
    },
    GoToNext() {
      // 判斷是否有試算,沒有則跳錯誤
      let modePrem = this.GetMyWayPostData.mode_prem
      if (!parseInt(modePrem) > 0) {
        alert('請先試算保費')
        return
      }
      this.$router.push('/myway-3')
    }
  }
}

</script>
