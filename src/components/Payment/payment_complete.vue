<template>
  <div>
    <div class="">
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
        <div class="insure-text">
          感謝您使用新光人壽網路投保並承蒙購買保險商品，在此致上我們最誠摯的謝意。本次交易結果將自動寄發到您的電子郵件信箱。預計受理保險申購後確立出單，24小時內您將會收到電子保單，若有任何疑問，請洽新光人壽客服中心免付費電話
        </div>
        <form class="form-bottom">
          <div class="col-sm-12">
            <div class="insure-tips-text">
              <img src="../../../static/img/tel.png" class="tel">
              <a class="insure-tips-text first-blue" href="tel:0800-031-115">0800 031 115</a>
            </div>
          </div>
        </form>

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
        <div class="col-sm-12">
          <div class="insure-tips-text">
            <img src="../../../static/img/insure-link.png" alt="">保單查詢：請至新光人壽客戶服務中心〉保單管理〉查詢保單明細
          </div>
        </div>
        <div class="row insure-notice-mb"></div>
        <div class="border-bottom-line"></div>
        <div class="bg-money tac">
          <img src="../../../static/img/line.png" @click="OnLineClick()" />
          <img src="../../../static/img/fb.png" @click="OnFbClick()" />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-12 footer-title footer-right" @click="finish()">回到首頁</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
// const FBAPPID = `2172525732842662`
export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-6.png'
  },
  methods: {
    finish() {
      this.$router.push(`/paymentcomplete?leave=true`)
    },
    OnFbClick() {
      console.log('OnFbClick')
      // let url = `http://www.facebook.com/dialog/feed?app_id=${FBAPPID}
      //   &link=${FBLink}
      //   &picture=${FBPic}
      //   &name=${FBTitle}
      //   &caption=${FBTitle}
      //   &description=${FBDesc}
      //   &redirect_uri=${URL}
      //   &display=popup`
      // window.location = url
    },
    OnLineClick() {
      // <a href="http://line.naver.jp/R/msg/text/?文章標題%0D%0A文章網址"><img src="圖片網址"/></a>
      window.location = `line://msg/text/新光人壽網路投保！%0D%0A投保完成。%0D%0Ahttps://online.skl.com.tw?p=`
    }
  }
}

</script>
