<template>
  <div>
    <div class="container">
      <div class="product-name">企業客戶專區</div>
      <div class="progress-bar">
        <img src="images/progress-bar-06-2.png">
      </div>
      <div class="bg-radius">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="images/insurance.png" alt=""></div>
              <div class="insure-check-title">投保資料</div>
            </div>
          </div>
        </div>

        <div class="border-bottom-line"></div>

        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">您的旅遊地點</label>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="top col-sm-12">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="images/oval-ed.png" alt=""></div>
              <div class="insure-check-content">國內</div>
            </div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="top col-sm-12">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="images/oval.png" alt=""></div>
              <div class="insure-check-content">國外</div>
            </div>
          </div>

        </div>

        <div class="col-sm-12">
          <div class="insure-tips-text">備註:最高受理天數，國內旅遊：９０天，國外旅遊：１８０天。</div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips-text">
            <img src="images/insure-link.png" alt="">申根地區國查詢
          </div>
        </div>

        <form class="form-bottom">
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">保險生效日</label>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="col-sm-4 insure-select-align insure-select-withline">
              <select id="" class="form-control data-input insure-select insure-input-block-edit">
                <option selected>2019</option>
              </select>
            </div>
            <div class="col-sm-4 insure-select-align insure-select-withline">
              <select id="" class="form-control data-input insure-select insure-input-block-edit">
                <option selected>01</option>
              </select>
            </div>
            <div class="col-sm-4 insure-select-align insure-select-withline">
              <select id="" class="form-control data-input insure-select insure-input-block-edit">
                <option selected>01</option>
              </select>
            </div>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="col-sm-12 insure-select-align insure-select-withline">
              <select id="" class="form-control data-input insure-select insure-input-block-edit">
                <option selected>14：00</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">保險期間天數</label>
            <div class="col-sm-9">
              <input type="text" class="form-control insure-input insure-input-edit col-sm-9" id="" placeholder="" value="請填寫">
            </div>
            <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">天</label>
          </div>
        </form>
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
