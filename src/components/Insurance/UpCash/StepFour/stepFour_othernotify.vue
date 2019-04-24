<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="images/chat.png" alt=""></div>
            <div class="insure-check-title">被保人其他告知事項</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">婚姻狀況</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit">
              <option>未婚</option>
              <option selected>已婚</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">年收入</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="500萬元">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">家庭收入</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="800萬元">
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-notice-text">
            若要查詢先前填寫告知事項內容，登入後請至「客服中心」>「客戶服務中心」>「 保單管理」中，查詢您過往購買保單的保單明細。
          </div>
        </div>
      </form>
    </div>
</template>

<script>
export default {

}

</script>
