<template>
  <div>
    <div class="container">
      <div class="progress-bar">
        <img src="../../../../../static/img/progress-bar-06-4.png">
      </div>
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
        <div class="bg-money">
          <div class="left font-label dib col-sm-3">
            總保險費
          </div>
          <div class="content font-label dib col-sm-9">
            {{mockData.PolicyData.TotalPremiumDisplay}}元
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="bg-money">
          <div class="left font-label dib col-sm-3">
            保單形式
          </div>
          <div class="content font-label dib col-sm-9">
            {{parseInt(mockData.PolicyData.MailType) === 2 ? '電子保單' : '紙本保單'}}
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="bg-money" v-show="parseInt(mockData.PolicyData.MailType) === 1">
          <div class="left font-label dib col-sm-3">
            保險單寄送地址
          </div>
          <div class="content font-label dib col-sm-9">
            台北市松山區敦化北路102號B1樓
          </div>
        </div>

        <div class="border-bottom-line"></div>
        <div class="bg-money">
          <div class="left font-label dib col-sm-3">
            要保人電子郵件
          </div>
          <div class="content font-label dib col-sm-9">
            {{mockData.PolicyData.ProposerInfo[0].Email}}
          </div>
        </div>


        <div class="border-bottom-line"></div>
        <div class="bg-money bg-money-twoline">
          <div class="left font-label dib col-sm-3">
            要保人手機號碼
          </div>
          <div class="content font-label dib col-sm-9">
            {{mockData.PolicyData.ProposerInfo[0].Phone}}
          </div>
        </div>

        <div class="border-bottom-line"></div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保人姓名</label>
          <div class="col-sm-12">
            {{mockData.PolicyData.InsuredInfo.length}}
            <input type="text" class="form-control insure-input-block" id="" placeholder="" value="廖士儼">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">旅行平安險保額</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id="" placeholder="" value="800萬元">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">傷害醫療保險金限額</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id="" placeholder="" value="80萬元">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">海外突發疾病醫療保險金限額</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id="" placeholder="" value="80萬元">
          </div>
        </div>
      </div>
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
          <label for="" class="col-sm-12 col-form-label insure-label">險種名稱-主約</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" :disabled="disabled" :value="mockData.InsuranceName">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保始期</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" :disabled="disabled" :value="mockData.PolicyData.InsStartDisplay">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">旅遊地點</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" :disabled="disabled" :value="mockData.PolicyData.TravelPlaceDisplay">
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
            <input type="text" class="form-control insure-input-block" id="" placeholder="" value="陳小明">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">電話</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id="" placeholder="" value="0987654321">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">地址</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id="" placeholder="" value="苗栗縣獅壇鄉12">
          </div>
        </div>
      </div>
      <div class="bg-radius">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
              <div class="insure-check-title">保單資訊</div>
            </div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="bg-money">
          <div class="left font-label dib col-sm-3">
            被保險人
          </div>
          <div class="content font-label dib col-sm-9">
            廖士儼 (本人)
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="bg-money">
          <div class="left font-label dib col-sm-3">
            出生日期
          </div>
          <div class="content font-label dib col-sm-9">
            1977/07/23
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="bg-money  bg-money-twoline">
          <div class="left font-label dib col-sm-3">
            身分證字號
          </div>
          <div class="content font-label dib col-sm-9">
            A112554436
          </div>
        </div>

        <div class="border-bottom-line"></div>
        <div class="bg-money  bg-money-twoline">
          <div class="left font-label dib col-sm-3">
            是否受監護宣告
          </div>
          <div class="content font-label dib col-sm-9">
            否
          </div>
        </div>

        <div class="border-bottom-line"></div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人姓名</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id="" placeholder="" value="法定繼承人">
          </div>
        </div>

        <div class="border-bottom-line"></div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人關係</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id="" placeholder="" value="法定繼承人">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人生日</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id="" placeholder="" value="法定繼承人">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人身分證字號</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id="" placeholder="" value="法定繼承人">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人聯絡電話</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id="" placeholder="" value="法定繼承人">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人聯絡地址</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id="" placeholder="" value="法定繼承人">
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-4 footer-title footer-left">回上一頁</div>
          <div class="col-sm-8 footer-title footer-right">確認送出</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mockData: []
    }
  },
  created() {
    let data = JSON.parse(`{"ResultCode":"0000","Status":"OK","Data":{"Result":{"ProcessId":"6842","IsValid":true,"Message":"","InsurancePlanCode":"66020","InsuranceName":"新光人壽Enjoy Life旅行平安保險","IsRenewal":false,"TargetType":2,"MaxInsuredChildren":5,"PolicyData":{"OrderNo":null,"NoticeNo":null,"ProposerInfo":[{"ID":"J195002091","Name":"而我國","Dob":"1997/07/15 00:00:00","DobDisplay":"民國 86 年 7 月 15 日","Gender":"1","MailingAddr":{"Zip":"953","Street":"和讓我問問看1號","District":"延平鄉","City":"台東縣","Address":"台東縣延平鄉和讓我問問看1號"},"PermAddr":{"Zip":"260","Street":"保時之保單寄送地址1號","District":"壯圍鄉","City":"宜蘭縣","Address":"宜蘭縣壯圍鄉保時之保單寄送地址1號"},"Email":"skek1008@skl.com.tw","Phone":"0987654321","IsVerified":true}],"InsuredInfo":[{"Index":0,"PersonalData":{"ID":"J195002091","Name":"而我國","Dob":"1997/07/15 00:00:00","DobDisplay":"民國 86 年 7 月 15 日","Gender":"1","MailingAddr":null,"PermAddr":null,"Email":"skek1008@skl.com.tw","Phone":null,"IsVerified":false},"Relation":"1","BatchDate":"2019-02-12+08:00","BatchNo":"19","BeneficiaryQty":1,"BeneficiaryData":[{"IdNo":"G149377494","Name":"東東","Dob":"1987/07/15 00:00:00","Relationship":"3","RelationshipDisplay":"父母子女","ContactNumber":"0987654321","Address":{"Zip":"953","Street":"和讓我問問看1號","District":"延平鄉","City":"台東縣","Address":"台東縣延平鄉和讓我問問看1號"},"Seq":0,"Percentage":0}],"PrimaryPolicy":{"PlanCode":"66020","PlanTitle":"新光人壽Enjoy Life旅行平安保險","Version":"3","FaceAmt":500,"MaxCoverage":1450,"ModePrem":317},"SupplementPolicy":[{"PlanCode":"66021","PlanTitle":"傷害醫療","Version":"3","FaceAmt":50,"MaxCoverage":145,"ModePrem":86},{"PlanCode":"66024","PlanTitle":"海外突發疾病","Version":"3","FaceAmt":20,"MaxCoverage":145,"ModePrem":77}],"HasAuthRep":false},{"Index":1,"PersonalData":{"ID":"X111111111","Name":"死侍","Dob":"2017/01/01 00:00:00","DobDisplay":"民國 106 年 1 月 1 日","Gender":"1","MailingAddr":null,"PermAddr":null,"Email":null,"Phone":null,"IsVerified":false},"Relation":"3","BatchDate":"2019-02-12+08:00","BatchNo":"19","BeneficiaryQty":1,"BeneficiaryData":[{"IdNo":"J195002091","Name":"而我國","Dob":"1987/07/15 00:00:00","Relationship":"3","RelationshipDisplay":"父母子女","ContactNumber":"0987654321","Address":{"Zip":"953","Street":"和讓我問問看2號","District":"延平鄉","City":"台東縣","Address":"台東縣延平鄉和讓我問問看2號"},"Seq":0,"Percentage":0}],"PrimaryPolicy":{"PlanCode":"66020","PlanTitle":"新光人壽Enjoy Life旅行平安保險","Version":"3","FaceAmt":200,"MaxCoverage":200,"ModePrem":21},"SupplementPolicy":[{"PlanCode":"66021","PlanTitle":"傷害醫療","Version":"3","FaceAmt":20,"MaxCoverage":20,"ModePrem":35},{"PlanCode":"66024","PlanTitle":"海外突發疾病","Version":"3","FaceAmt":10,"MaxCoverage":20,"ModePrem":41}],"HasAuthRep":false}],"SelfInsured":true,"ChildrenNo":1,"TravelType":"2","TravelCountry":"8","EtcCountry":null,"InsStartDate":"2019/04/11 00:00:00","TravelDay":10,"InsType":"1","EmergencyContactName":"十大歌手的","EmergencyContactTel":"(02)22322232","EmergencyContactAddr":{"Zip":"263","Street":"保時之保單寄送地址1號","District":"壯圍鄉","City":"宜蘭縣","Address":"宜蘭縣壯圍鄉保時之保單寄送地址1號"},"MailingType":null,"MailingAddr":null,"SaveMailingAddress":false,"PayType":null,"TotalPremium":577,"VisitTimeInd":"000","VisitTimeMorning":null,"VisitTimeAfternoon":null,"VisitTimeEvening":null,"MailType":"2","NewNo":"N20190212000015","TravelTypeDisplay":"國外","InsTypeDisplay":"簡訊OTP動態密碼驗證","InsStartDisplay":"108 年 4 月 11 日 00:00 時","InsEndDisplay":"108 年 4 月 21 日 00:00 時","TravelPlaceDisplay":"國外-韓國","TotalPremiumDisplay":"NT$577","EquipmentCode":"01","CollectCode":null,"AcceptBirthdayPresent":null,"EmployeeNo":"","SalespersonName":null,"OtpSendTime":null,"OtpValidateTime":null,"PaymentPreferredAccount":false,"Rewnewal":false,"UnfinishedID":null,"StepStatus":"FILLIN","LastUpdateTime":"2019/02/12 11:31:46"},"Agreement":[],"AgreementVerTitle":"新光人壽Enjoy Life旅行平安保險商品說明(18),新光人壽Enjoy Life旅行平安保險保險單條款(15),新光人壽Enjoy Life傷害醫療保險給付附加條款(5),新光人壽Enjoy Life海外突發疾病健康保險附加條款(4),新光人壽網路投保旅行平安險投保人須知(10),新光人壽網路投保旅行平安險要保書填寫說明(8),蒐集、處理及利用個人資料告知事項(51),父母為7歲以下未成年子女投保告知(1)","VerifiedCoverage":[1450,1300,1200,1100,1000,900,800,700,600,500,400,300,200,100],"CurrentCoverage":[1450,1300,1200,1100,1000,900,800,700,600,500,400,300,200,100],"IncreaseCoverage":false,"UserEmergencyContactName":null,"UserEmergencyContactPhone":"(02)22322232","UserEmergenctContactAddress":{"Zip":"290","Street":"保時之保單寄送地址1號","District":"釣魚台","City":"宜蘭縣","Address":"宜蘭縣釣魚台保時之保單寄送地址1號"},"VerificationUrl":null,"ConvenientStorePayment":false,"revenue":700,"price":0},"IsSuccess":true,"Code":null,"Message":null,"Exceptions":null}}`)
    this.mockData = data.Data.Result
    console.log(this.mockData)
  }
}

</script>
