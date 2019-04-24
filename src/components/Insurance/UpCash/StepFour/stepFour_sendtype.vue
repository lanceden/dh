<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="images/chat.png" alt=""></div>
            <div class="insure-check-title">保單寄送地址</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="insure-form">
        保險單形式：<span class="insure-form-im">紙本保單</span>
      </div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">同通訊地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">台北市松山區敦化北路102號B1樓</div>
          </div>
          <div class="checkbox checked"></div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">輸入戶籍地址</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id="" placeholder="為保障您的權益，此欄位不可為空白" value="">
          </div>
          <div class="checkbox"></div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips">
            ※將同步更新客戶基本資料
          </div>
        </div>
      </form>
    </div>
</template>


<script>
export default {

}

</script>
