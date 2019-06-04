<template>
  <div>
    <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/megaphone.png" alt=""></div>
            <div class="insure-check-title">樂網通國際網卡最低3.4折優惠</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="row col-width">
        <div class="col-sm-12">
          <img src="../../../static/img/promotion_2_1.jpg" />
        </div>
      </div>
      <div class="insure-text" v-html="promotionContent">
        
      </div>
      <div class="border-bottom-line"></div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-6 footer-title footer-left" @click="GoPrev()">回前一頁</div>
          <div class="col-sm-6 footer-title footer-right" @click="GoProduct()">{{eventBtnName}}</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      eventBtnName: '立即購買旅平險',
      promotionContent: '<strong>買旅平險獨享&gt;&gt;樂網通國際網卡最低3.4折優惠<br>日韓地區飆網 下殺每日$100有找</strong><br><br><strong>•活動方式：</strong><br>活動期間內，於新光人壽網路投保網站購買旅遊平安保險商品不限金額，即享有樂網通國際上網預付卡指定商品優惠兌換序號乙組，每成功投保一筆保單獲得乙組序號，數量不限。投保交易完成後，系統將於20分鐘內發送電子序號至您提供認證之Email信箱，若因會員所提供E-mail資料信箱問題，恕本公司將不提供其他補發序號或信件服務。<br><br><strong>•活動贈品：</strong><br>樂網通國際上網預付卡商品優惠兌換序號乙組<br><br><strong>•贈品使用辦法：</strong><br>(1)本優惠方案需前往樂網通官方網站新光人壽保戶專屬頁面<a href="http://wise-sim.com/sk_prepaid">http://wise-sim.com/sk_prepaid </a>選購優惠商品，並依照網頁指示說明，輸入優惠序號完成相關交易流程，即可享新光人壽保戶優惠價。<br>(2)每筆訂單僅限一組優惠代碼，恕不累積及重覆使用(請注意！！送出訂單即視為使用)。<br>(3)此優惠活動僅適用指定頁面購買，不提供實體購買或取件。<br>(4)每組序號使用期限為2019年7月15日，逾期未使用視為放棄資格，恕不補發、延期或要求其他補償。<br>(5)寄送方式及使用相關規定與樂網通官網規定相同。<br>(6)詳細使用辦法請以樂網通官方網站<a href="http://www.wise-sim.com/">http://www.wise-sim.com/</a>公告為依循規定。 <div class="sale-cont-time"> 活動期間： 民國 108 年 03 月 01 日 至 民國 108 年 06 月 30 日 </div> <div class="sale-cont-more"><a id="link1" href="https://online.skl.com.tw/Introduction/TravelVideo?outsitecode=wise09_03" class="see_more_btn" target="_blank">&lt;&lt;立即購買旅平險&gt;&gt;</a> </div>'
    }
  },
  methods: {
    GoPrev() {
      this.$router.push(`promotion-list`)
    },
    GoProduct() {
      this.$router.push(`/product-detail?product={productCode}`)
      window.location.reload()
    }
  }
}

</script>
