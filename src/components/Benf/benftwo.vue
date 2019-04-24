<template>
  <div class="bg-radius" v-show="benf_num >= 2">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">身故受益人(二)資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="insure-text">
        依「保險業辦理電子商務應注意事項」第七點所規範，要、被保險人以同一人為限，年滿二十歲，身故受益人以直系血親、配偶或法定繼承人為限。
      </div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit">
              <option selected>父母子女</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">受益人國籍</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit">
              <option selected>台灣</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">姓名</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="廖寶貝">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit">
              <option selected>順位2</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式之比例</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="50">
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-notice-text">
            <div class="insure-notice-text">身故受益人可選擇以下給付比例％方式</div>
            <ul class="insure-notice-text-ol">
              <li>​選擇不同順位給付比例％，皆為100％。</li>
              <li>選擇相同順位給付比例％，加總為100％。</li>
            </ul>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="100年01月01日">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="A22345678">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label">同受益人(一)聯絡電話：</label>
          <div class="col-sm-12">
            <div class="insure-input-block insure-margin-0">0222345678</div>
          </div>
          <label for="" class="col-sm-12 col-form-label">同受益人(一)聯絡地址：</label>
          <div class="col-sm-12">
            <div class="insure-input-block insure-margin-0">台北市松山區敦化北路102號B1樓</div>
          </div>
          <div class="checkbox checked"></div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="0222345678">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">選擇城市</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit">
              <option selected>台北市</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">選擇鄉鎮地區</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit">
              <option selected>松山區</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">詳細地址</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control data-input insure-input-edit" id="" placeholder="" value="敦化北路102號B1樓">
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-notice-text">
            如要保人不同意填寫受益人聯絡地址及電話，則以要保人最後所留之聯絡方式，作為日後通知依據。
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
