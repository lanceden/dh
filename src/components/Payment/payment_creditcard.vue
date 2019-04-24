<template>
  <div>

    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="images/calculator.png" alt=""></div>
              <div class="insure-check-title">保費金額</div>
            </div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="bg-money">
          <div class="col-sm-12">
            <div class="font-label">您所支付的第一期保險費為：</div>
            <div class="font-money"> NT$ 114,274 元</div>
            <div class="money-icon"><img src="images/coins.png" alt=""></div>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="insure-tips insure-tips-mt-20">
              請注意！！<br>選擇信用卡進行繳費，必須使用要保人本人信用卡，且必須立即完成繳費成功，才算完成投保！
            </div>
          </div>
        </div>
        <div class="bg-radius">
          <div class="top">
            <div class="top-title">
              <div class="insure-notice-box">
                <div class="insure-check"><img src="images/chat.png" alt=""></div>
                  <div class="insure-check-title">首期繳費管道</div>
                </div>
              </div>
            </div>
            <div class="border-bottom-line"></div>
            <form class="form-bottom">
              <div class="form-group row">
                <label for="" class="col-sm-12 col-form-label insure-label">首期繳費管道</label>
                <div class="col-sm-12">
                  <div class="insure-input-block">信用卡</div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="insure-notice-text">
                  (限台灣核發之VISA、MASTER、JCB、UCard信用卡)
                </div>
              </div>
            </form>
            <form class="form-bottom">
              <div class="col-sm-12">
                <div class="insure-creditcard">
                  <img src="images/creditcard.png" alt="">
				</div>
                </div>
                <div class="form-group row">
                  <label for="" class="col-sm-12 col-form-label insure-label">信用卡卡號</label>
                  <div class="col-sm-12">
                    <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="4000 3000 2000 1000">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="" class="col-sm-12 col-form-label insure-label">有效日期(起)</label>
                  <div class="col-sm-12">
                    <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="12/2018">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="" class="col-sm-12 col-form-label insure-label">有效日期(迄)</label>
                  <div class="col-sm-12">
                    <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="12/2028">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="" class="col-sm-12 col-form-label insure-label">卡片背後三碼</label>
                  <div class="col-sm-12">
                    <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="12/2028">
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="insure-tips-text" onclick="location.href='Insure-BankList.html'">
                    <img src="images/insure-link.png" alt="">查詢線上繳費發卡銀行
				</div>
                  </div>
            </form>
            <div class="border-bottom-line"></div>
            <div class="col-sm-12">
              <div class="insure-tips insure-tips-mt-20">
                請注意！！<br>信用卡若無有效期限起日、起月、年欄位請輸入今天日期。進入繳費畫面後，請勿關閉視窗以完成投保！
              </div>
            </div>
          </div>

        </div>
</template>

<script>
export default {

}

</script>
