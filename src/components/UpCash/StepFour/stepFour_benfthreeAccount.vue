<template>
  <div class="bg-radius" v-show="benf_num > 2">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="images/account.png" alt=""></div>
            <div class="insure-check-title">身故受益人(三)匯款帳戶</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">金融機構代碼</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit">
              <option selected>822</option>
            </select>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips-text" onclick="location.href='Insure-BankList.html'">
            <img src="images/insure-link.png" alt="">查詢合作金融機構
				</div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">金融機構中文名稱</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="中信銀行">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">金融機構分行代號</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="1296-中信銀東民生">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">銀行帳號</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="123456789012">
            </div>
          </div>
          <div class="col-sm-12">
            <div class="insure-notice-text-ul">
              <ul class="insure-notice-text-ul-p">
                <li>​如有應退還、返還或應給付予要保人之款項，除已另有約定給付方式外，本公司得將該款項匯入上列要保人帳戶。</li>
              </ul>
            </div>
          </div>
      </form>
    </div>
</template>

<script>
export default {
  computed: {
    benf_num: {
      get() {
        return this.$store.state.UpCash.POSTDATA.benf_num
      }
    }
  }
}

</script>
