<template>
  <div class="">
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">投保資訊</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">驗證身份方式</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.VerifyType}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">保單形式</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{parseInt(GetTravelPostData.MAIL_TYPE) === 2 ? '電子保單' : '紙本保單'}}</div>
        </div>
      </div>

      <div class="border-bottom-line"></div>
      <div class="form-group row" v-show="parseInt(GetTravelPostData.MAIL_TYPE) === 1">
        <label for="" class="col-sm-12 col-form-label insure-label">保險單寄送地址</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.OWNER_ADD}}</div>
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">要保人電子郵件</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.EMAIL}}</div>
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">要保人手機號碼</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.PHONE}}</div>
        </div>
      </div>

      <div v-for="(item, index) in GetTravelPostData.INSURED_DATA" :key="index">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保人姓名</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{item.FULLNAME}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">旅行平安險保額</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{item.FACE_AMT_1}} 萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">傷害醫療保險金限額</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{item.FACE_AMT_2}} 萬元</div>
          </div>
        </div>
        <div class="form-group row" v-show="parseInt(GetTravelPostData.FACE_5_TYPE ) === 2">
          <label for="" class="col-sm-12 col-form-label insure-label">海外突發疾病醫療保險金限額</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{item.FACE_PREM3}} 萬元</div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">投保內容</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">險種名稱-主約</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.PLAN_TITLE}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">旅遊地點</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.TRAVEL_Name}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">投保始期</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.PO_ISSUE_DATE}}</div>
          <div class="form-control insure-input-block">{{GetTravelPostData.PO_ISSUE_DATE}} 止，共{{GetTravelPostData.ISSUED_DAYS}}天</div>
        </div>
      </div>
    </div>

    <div class="bg-radius" v-for="(item, index) in GetTravelPostData.INSURED_DATA" :key="index">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">保單資訊</div>
          </div>
        </div>
      </div>

      <div class="border-bottom-line"></div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">被保險人</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block" v-show="index === 0">{{item.OI_RELATION_NAME}} (本人)</div>
          <div class="form-control insure-input-block" v-show="index > 0">{{item.OI_RELATION_NAME}} (子女)</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.BIRTH}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身份證字號</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.CLIENT_ID}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">是否受監護宣告</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.OI_RELATION ? '是' : '否'}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身故受益人姓名</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.TBEN_FULLNAME}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身故受益人關係</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.RELATION_BEN_DEATH_NAME}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身份證字號</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.TBEN_CLIENT_ID}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">連絡電話</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.PHONE_BEN_DEATH}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">連絡地址</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.ADD_BEN_DEATH}}</div>
        </div>
      </div>
    </div>

    <!-- 緊急聯絡人資料 -->
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">緊急聯絡人資料</div>
          </div>
        </div>
      </div>

      <div class="border-bottom-line"></div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">姓名</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.EMER_NAME}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">電話</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.EMER_PHONE}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">地址</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">
            {{GetTravelPostData.EMER_ADD}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  computed: {
  },
  data () {
    return {
      GetTravelPostData: []
    }
  },
  mounted () {
    let test = {
      'InsurerSourceID': 'InsuranceWeb',
      'CoreData': {
        'plan_code': '66020',
        'PolicyNo': this.$route.query.policyNo
      }
    }
    let yourConfig = {
      Authorization: 'Bearer ' + this.$route.query.token
    }
    axios.post('https://onlinetest.skl.com.tw/InsuranceWebApi/Customer/OrderDetail', test, yourConfig).then(response => {
      console.log(response.data.Data.Result)
      this.GetTravelPostData = response.data.Data.Result
    })
  },
  methods: {
  }
}

</script>
