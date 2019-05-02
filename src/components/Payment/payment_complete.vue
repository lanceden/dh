<template>
  <div>
    <div class="container">
      <div class="bg-radius">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../static/img/calculator.png" alt=""></div>
              <div class="insure-check-title">完成投保</div>
            </div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="insure-text">
          感謝您使用新光人壽網路投保並承蒙購買保險商品，在此致上我們最誠摯的謝意。您已於 {{$store.state.PAYMENTCOMPLETE.TransDate}} 完成網路投保一「新光人壽Up Cash利率變動型年金保險」。
        </div>
        <div class="bg-money">
          <div class="col-sm-12">
            <div class="font-label">訂單編號：</div>
            <div class="font-money">{{$store.state.PAYMENTCOMPLETE.OrderNo}}</div>
          </div>
        </div>
        <div class="bg-time">
          <div class="col-sm-12">
            <div class="insure-order-img">
              <img src="../../../static/img//order.png" alt="">
            </div>
            <div>
              <div class="font-label">保單號碼：</div>
              <div class="font-money">{{$store.state.PAYMENTCOMPLETE.PolicyNo}}</div>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="font-label insure-done-text">(保單查詢：請至新光人壽客戶服務中心>保單管理>查詢保單明細)</div>
          </div>
        </div>
        <div class="bg-time">
          <div class="col-sm-12">
            <div class="font-label">保單送達時間：預計7個工作日</div>
          </div>
        </div>
        <div class="row insure-notice-mb">
          <div class="col-sm-9 col-sm-9-done-w-72 col-sm-0-pr">
            <div class="insure-notice">
              <div class="insure-notice-title">本次交易結果將自動寄發到您的電子郵件信箱：<span class="text-red-i">richardliao@gmail.com</span>，請留意您的信箱。若有任何疑問，請洽新光人壽客服中心免付費電話 <a href="tel:0800-031-115">0800-031-115</a>。</div>
            </div>
          </div>
          <div class="col-sm-3 col-sm-3-done-w-28 col-sm-0-pl">
            <div class="insure-qrcode-img">
              <img src="../../../static/img//qrcode.png" alt="">
            </div>
            <span class="insure-notice-title insure-share-text"><img src="../../../static/img//share.png" class="insure-share-img" alt="">分享給好友</span>
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

}

</script>
