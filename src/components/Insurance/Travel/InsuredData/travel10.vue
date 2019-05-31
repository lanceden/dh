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
          <div class="form-control insure-input-block">{{GetTravelPostData.PolicyData.InsTypeDisplay}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">保單形式</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{parseInt(GetTravelPostData.PolicyData.MailType) === 2 ? '電子保單' : '紙本保單'}}</div>
        </div>
      </div>

      <div class="border-bottom-line"></div>
      <div class="form-group row" v-show="parseInt(GetTravelPostData.PolicyData.MailType) === 1">
        <label for="" class="col-sm-12 col-form-label insure-label">保險單寄送地址</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.PolicyData.ProposerInfo[0].MailingAddr.Address}}</div>
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">要保人電子郵件</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.PolicyData.ProposerInfo[0].Email}}</div>
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">要保人手機號碼</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.PolicyData.ProposerInfo[0].Phone}}</div>
        </div>
      </div>

      <div v-for="(item, index) in GetTravelPostData.PolicyData.InsuredInfo" :key="index">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保人姓名</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{item.PersonalData.Name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">旅行平安險保額</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{item.PrimaryPolicy.FaceAmt}} 萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">傷害醫療保險金限額</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{item.SupplementPolicy[0].FaceAmt}} 萬元</div>
          </div>
        </div>
        <div class="form-group row" v-show="parseInt(GetTravelPostData.PolicyData.TravelType ) === 2">
          <label for="" class="col-sm-12 col-form-label insure-label">海外突發疾病醫療保險金限額</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{item.SupplementPolicy[1].FaceAmt}} 萬元</div>
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
          <div class="form-control insure-input-block">{{GetTravelPostData.InsuranceName}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">旅遊地點</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.PolicyData.TravelPlaceDisplay}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">投保始期</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.PolicyData.InsStartDisplay}}</div>
          <div class="form-control insure-input-block">{{GetTravelPostData.PolicyData.InsEndDisplay}} 止，共{{GetTravelPostData.PolicyData.TravelDay}}天</div>
        </div>
      </div>
    </div>

    <div class="bg-radius" v-for="(item, index) in GetTravelPostData.PolicyData.InsuredInfo" :key="index">
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
          <div class="form-control insure-input-block" 
          v-show="parseInt(item.Relation) === 1">{{item.PersonalData.Name}} (本人)</div>
          <div class="form-control insure-input-block" 
          v-show="parseInt(item.Relation) !== 1">{{item.PersonalData.Name}} (子女)</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.PersonalData.DobDisplay}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身份證字號</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.PersonalData.ID}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">是否受監護宣告</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.HasAuthRep ? '是' : '否'}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身故受益人姓名</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.BeneficiaryData[0].Name}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身故受益人關係</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.BeneficiaryData[0].RelationshipDisplay}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">生日</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.BeneficiaryData[0].Dob}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身份證字號</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.BeneficiaryData[0].IdNo}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">連絡電話</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.BeneficiaryData[0].ContactNumber}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">連絡地址</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{item.BeneficiaryData[0].Address.Address}}</div>
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
          <div class="form-control insure-input-block">{{GetTravelPostData.PolicyData.EmergencyContactName}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">電話</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.PolicyData.EmergencyContactTel}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">地址</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">
            {{GetTravelPostData.PolicyData.EmergencyContactAddr.City}}
            {{GetTravelPostData.PolicyData.EmergencyContactAddr.District}}
            {{GetTravelPostData.PolicyData.EmergencyContactAddr.Street}}
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-4 footer-title footer-left" @click="GoToPrev()">回上一頁</div>
          <div class="col-sm-8 footer-title footer-right" @click="GoToNext()">確認送出</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'

export default {
  computed: {
    ...mapGetters([
      TravelGetterTypes.GetTravelPostData
    ])
  },
  methods: {
    GoToPrev() {
      this.$router.push('/travel-8')
    },
    GoToNext() {
      this.$router.push('/otp')
    }
  }
}

</script>
