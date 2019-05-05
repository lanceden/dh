<template>
  <div>
    <div class="container">
      <div class="product-name">企業客戶專區</div>
      <div class="progress-bar">
        <img src="images/progress-bar-06-3.png">
      </div>
      <div class="bg-radius">
        <div class="top">

          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="images/mail.png" alt=""></div>
              <div class="insure-check-title">緊急聯絡人資料</div>
            </div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="insure-text">
          依「保險業辦理電子商務應注意事項」第七點所規範，身故受益人以直系血親、配偶或法定繼承人為限。
        </div>

        <form class="form-bottom">
          <div class="form-group posr row">
            <label for="" class="col-sm-12 col-form-label">使用客戶基本資料</label>
            <div class="checkbox-oneline"></div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">聯絡人姓名</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="請填寫聯絡人姓名">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="請填寫聯絡電話">
            </div>
          </div>

          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">選擇城市</label>
            <div class="col-sm-12 insure-select-align">
              <select id="" class="form-control data-input insure-select insure-input-block-edit">
                <option selected>台北市</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">選擇鄉鎮地區</label>
            <div class="col-sm-12 insure-select-align">
              <select id="" class="form-control data-input insure-select insure-input-block-edit">
                <option selected>松山區</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">詳細地址</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="敦化北路102號B1樓">
            </div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="col-sm-12">
            <div class="insure-tips-text">如要保人不同意填寫受益人聯絡地址及電話，則以要保人最後所留之聯絡方式，作為日後通知依據。</div>
          </div>
        </form>
      </div>

      <div class="footer">
        <div class="footer-content">
          <nav class="navbar navbar-dark row">
            <div class="col-sm-4 footer-title footer-left">回前一頁</div>
            <div class="col-sm-8 footer-title footer-right">確認送出</div>
          </nav>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}

</script>
