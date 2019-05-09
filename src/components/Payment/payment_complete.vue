<template>
  <div>
    <div class="container">
      <div class="bg-radius">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../static/img/checkmark.png" alt=""></div>
              <div class="insure-check-title">完成投保</div>
            </div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="insure-text">感謝您使用新光人壽網路投保並承蒙購買保險商品，在此致上我們最誠摯的謝意。本次交易結果將自動寄發到您的電子郵件信箱，請留意您的信箱。預計受理保險申購後確立出單24小時內，您將會收到電子保單。若有任何疑問，請洽新光人壽客服中心免付費電話 <a href="tel:0800-031-115">0800-031-115</a>。</div>

        <div class="border-bottom-line"></div>
        <div class="bg-money">
          <div class="col-sm-12">
            <div class="font-label">保單名稱：{{$store.state.PAYMENTCOMPLETE.InsName}}</div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="bg-money">
          <div class="col-sm-12">
            <div class="font-label">訂單編號：{{$store.state.PAYMENTCOMPLETE.OrderNo}}</div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="bg-money">
          <div class="col-sm-12">
            <div class="font-label">保單號碼：{{$store.state.PAYMENTCOMPLETE.PolicyNo}}</div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="bg-money">
          <div class="col-sm-12">
            <div class="font-label">送達時間：預計7個工作日</div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="bg-money">
          <div class="col-sm-12">
            <div class="font-label">投保時間：{{$store.state.PAYMENTCOMPLETE.TransDate}}</div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="col-sm-12" >
          <div class="insure-tips-text insure-tips-mt-25 pointer">
            <img src="../../../static/img/insure-link.png" alt="">保單查詢：請至新光人壽客戶服務中心>保單管理>查詢保單明細
          </div>
        </div>
        <div class="row insure-notice-mb">
          <div class="col-sm-6 col-sm-6-done-w-28 col-sm-0-pl">
            <div class="">
              <img src="../../../static/img/fb.png" />>
            </div>
          </div>
          <div class="col-sm-6 col-sm-6-done-w-28 col-sm-0-pl">
            <div class="">
              <img src="../../../static/img/line.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-12 footer-title footer-right">回到首頁</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-6.png'
  }
}

</script>
