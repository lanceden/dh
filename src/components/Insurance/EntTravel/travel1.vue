<template>
  <div>
    <div class="container">
      <div class="product-name">企業客戶專區</div>
      <div class="bg-radius">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../../static/img/insurance.png" alt=""></div>
              <div class="insure-check-title">基本資料</div>
            </div>
          </div>
        </div>

        <div class="border-bottom-line"></div>

        <div class="insure-text">
          主管機關規定，要保人及被保人資料需為同一人，如需修改個人資料，請洽本公司客戶服務中心。
        </div>
        <form class="form-bottom">
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">被保險人</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input-block" id="" placeholder="" value="廖士儼">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">被保險人身分證字號</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input-block" id="" placeholder="" value="A123456789">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">被保險人性別</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input-block" id="" placeholder="" value="男">
            </div>
          </div>

          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">企業客戶專區代碼</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="請填寫" v-model="entCode">
            </div>
          </div>
          <div class="col-sm-12">
            <div class="insure-tips-text">
              若忘記代碼，請洽詢您公司的負責窗口。
            </div>
          </div>

          <div class="footer">
            <div class="footer-content">
              <nav class="navbar navbar-dark row">
                <div class="col-sm-4 footer-title footer-left">回前一頁</div>
                <div class="col-sm-8 footer-title footer-right" @click="validateEntCode()">驗證企業代碼</div>
              </nav>
            </div>
          </div>
        </form>
      </div>


      <div class="bg-radius" v-show="false">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../../static/img/insurance.png" alt=""></div>
              <div class="insure-check-title">被保險人資料</div>
            </div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <form class="form-bottom">
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">請確認保障對象</label>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="top col-sm-12">
              <div class="insure-notice-box">
                <div class="insure-check"><img src="../../../../static/img/oval.png" alt=""></div>
                <div class="insure-check-content">本人</div>
              </div>
            </div>

            <div class="border-bottom-line col-sm-12"></div>

            <div class="top col-sm-12">
              <div class="insure-notice-box">
                <div class="insure-check"><img src="../../../../static/img/oval.png" alt=""></div>
                <div class="insure-check-content">七歲以下子女</div>
              </div>
            </div>

            <div class="border-bottom-line col-sm-12"></div>

            <div class="top col-sm-12">
              <div class="insure-notice-box">
                <div class="insure-check"><img src="../../../../static/img/oval-ed.png" alt=""></div>
                <div class="insure-check-content">本人與七歲以下子女</div>
              </div>
            </div>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="col-sm-12 insure-select-align">
              <select id="" class="form-control data-input insure-select insure-input-block-edit">
                <option selected>職業運動人員</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">關係</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input-block" id="" placeholder="" value="本人">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">姓名</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input-block" id="" placeholder="" value="廖士儼">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">出生生日</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input-block" id="" placeholder="" value="民國66年7月23日">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input-block" id="" placeholder="" value="A123456789">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">監護宣告</label>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="top col-sm-12">
              <div class="insure-notice-box">
                <div class="insure-check"><img src="../../../../static/img/oval.png" alt=""></div>
                <div class="insure-check-content">是</div>
              </div>
            </div>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="top col-sm-12">
              <div class="insure-notice-box">
                <div class="insure-check"><img src="../../../../static/img/oval.png" alt=""></div>
                <div class="insure-check-content">否</div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="bg-radius" v-show="false">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../../static/img/insurance.png" alt=""></div>
              <div class="insure-check-title">被保險人資料</div>
            </div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <form class="form-bottom">
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">關係</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input-block" id="" placeholder="" value="子女">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">姓名</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="請填寫姓名">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">出生生日</label>
            <div class="col-sm-3 insure-select-align">
              <select id="" class="form-control data-input insure-select insure-input-block-edit">
                <option v-for="n in 100" :key="n" value="2020 - n">{{2020 - n}}</option>
              </select>年
            </div>
            <div class="col-sm-3 insure-select-align">
              <select id="" class="form-control data-input insure-select insure-input-block-edit">
                <option v-for="n in 12" :key="n" value="n">{{n}}</option>
              </select>月
            </div>
            <div class="col-sm-3 insure-select-align">
              <select id="" class="form-control data-input insure-select insure-input-block-edit">
                <option v-for="n in 31" :key="n" value="n">{{n}}</option>
              </select>日
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="請填寫身分證字號">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">監護宣告</label>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="top col-sm-12">
              <div class="insure-notice-box">
                <div class="insure-check"><img src="../../../../static/img/oval.png" alt=""></div>
                <div class="insure-check-content">是</div>
              </div>
            </div>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="top col-sm-12">
              <div class="insure-notice-box">
                <div class="insure-check"><img src="../../../../static/img/oval-ed.png" alt=""></div>
                <div class="insure-check-content">否</div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="footer" v-show="false">
        <div class="footer-content">
          <nav class="navbar navbar-dark row">
            <div class="col-sm-4 footer-title footer-left">回前一頁</div>
            <div class="col-sm-8 footer-title footer-right">確認送出</div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EntTravelFunctionTypes from '../../../store/modules/EntTravel/Types/EntTravelFunctionTypes.js'
import EntTravelGetterTypes from '../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'

export default {
  data() {
    return {
      entCode: ''
    }
  },
  computed: {
    ...mapGetters([
      EntTravelGetterTypes.GetEntTravelIsValidate,
      EntTravelGetterTypes.GetEntTravelIsInit,
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  },
  methods: {
    ...mapActions([
      EntTravelFunctionTypes.FuncEntTravelValidate,
      EntTravelFunctionTypes.FuncEntTravelInit
    ]),
    /**
     * 驗證企業代碼
     */
    validateEntCode() {
      this.FuncEntTravelValidate(this.entCode)
    }
  }
}

</script>
