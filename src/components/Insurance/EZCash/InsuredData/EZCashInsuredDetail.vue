<template>
  <div>
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
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">驗證身份方式</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{GetEZCashPostData.VerifyType}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">保險單形式</label>
          <div class="col-sm-12">
            <div class="insure-input-block">紙本保單</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">保險單寄送地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.address_M}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">第一期應繳保險費</label>
          <div class="col-sm-12">
            <div class="insure-input-block">NT$ {{GetEZCashPostData.objAccident[0].mode_prem|decimalComma}} </div>
          </div>
        </div>
      </form>
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
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">險種名稱</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetEZCashPostData.objAccident[0].plan_title}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">投保始期（保單生效日）</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetEZCashPostData.objAccident[0].po_issue_date_name}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">第一期保險費</label>
        <div class="col-sm-12">
          <div class="insure-input-block">NT$ {{GetEZCashPostData.objAccident[0].mode_prem|decimalComma}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">約定續期繳法別</label>
        <div class="col-sm-12">
          <!-- 不定期 -->
          <div class="insure-input-block" v-show="GetEZCashPostData.objAccident[0].modx_99_ind === 'Y'">
            不定期繳
          </div>
          <div class="insure-input-block" v-show="GetEZCashPostData.objAccident[0].modx_99_ind === 'N'">
            分期繳付
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">主要給付項目</label>
        <div class="col-sm-12">
          <div class="insure-input-block">年金</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">年金給付開始日</label>
        <div class="col-sm-12">
          <div class="insure-input-block">保險年齡：{{GetEZCashPostData.objAccident[0].fst_anny_pay_age}}歲之保單週年日</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetEZCashPostData.objAccident[0].anny_frequence === '0' ? '一次給付' : '分期給付'}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">保價金通知方式</label>
        <!-- 電子郵件 -->
        <div class="col-sm-12" v-show="GetEZCashPostData.objAccident[0].value_ind === '4'">
          <div class="insure-input-block">電子郵件：</div>
          <div class="insure-input-block">{{GetEZCashPostData.objAccident[0].address3}}</div>
        </div>
        <!-- 寄送到客戶住所(通訊地址) -->
        <div class="col-sm-12" v-show="GetEZCashPostData.objAccident[0].value_ind === '1'">
          <div class="insure-input-block">寄送到客戶住所(通訊地址)：</div>
          <div class="insure-input-block">{{GetEZCashPostData.address_M}}</div>
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
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人(要被保人須為同一人)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.client_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.client_birth_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.client_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人性別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.client_rate_sex === '1' ? '男' : '女'}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{GetEZCashPostData.phoneH}}<br>手機：{{GetEZCashPostData.MobilePhone}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">通訊地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.address_M}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.address_1}}</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius" v-for="(item, index) in GetEZCashPostData.BenfList" :key="index">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title" v-show="parseInt(item.prior_ben) === 1">身故受益人(一)資料</div>
            <div class="insure-check-title" v-show="parseInt(item.prior_ben) === 2">身故受益人(二)資料</div>
            <div class="insure-check-title" v-show="parseInt(item.prior_ben) === 3">身故受益人(三)資料</div>
          </div>
          <div class="border-bottom-line"></div>
          <form class="form-bottom">
            <div class="form-group row">
              <label for="" class="col-sm-12 col-form-label insure-label" v-show="parseInt(item.prior_ben) === 1">身故受益人(一)</label>
              <label for="" class="col-sm-12 col-form-label insure-label" v-show="parseInt(item.prior_ben) === 2">身故受益人(二)</label>
              <label for="" class="col-sm-12 col-form-label insure-label" v-show="parseInt(item.prior_ben) === 3">身故受益人(三)</label>
              <div class="col-sm-12">
                <div class="insure-input-block">{{item.benf_name}}</div>
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
              <div class="col-sm-12">
                <div class="insure-input-block">順位{{item.prior_ben}}，{{item.percent1}}%</div>
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
              <div class="col-sm-12">
                <div class="insure-input-block" v-show="parseInt(item.relation_ben_death) === 2">配偶</div>
                <div class="insure-input-block" v-show="parseInt(item.relation_ben_death) === 3">父母子女</div>
                <div class="insure-input-block" v-show="parseInt(item.relation_ben_death) === 6">祖孫</div>
                <div class="insure-input-block" v-show="parseInt(item.relation_ben_death) === 8">法定繼承人</div>
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-12 col-form-label insure-label">國籍</label>
              <div class="col-sm-12">
                <div class="insure-input-block">{{item.nationality}}</div>
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
              <div class="col-sm-12">
                <div class="insure-input-block">{{item.dob}}</div>
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
              <div class="col-sm-12">
                <div class="insure-input-block">{{item.benf_id}}</div>
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
              <div class="col-sm-12">
                <div class="insure-input-block">電話：{{item.benf_phone}}</div>
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-12 col-form-label insure-label">聯絡地址</label>
              <div class="col-sm-12">
                <div class="insure-input-block">{{item.address}}</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">被保人投保資料告知事項</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="insure-text">
          依主管機關規定，要保人及被保人資料需為同一人。
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">您的職業類別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.occupation_class_name}} {{GetEZCashPostData.occupation_class_code_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">本人僅為台灣之稅務居民</label>
          <div class="col-sm-12">
            <div class="insure-input-block">是</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title" style="text-align:left;">FATCA及CRS個人客戶自我聲明書 - 基本資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.client_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.client_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人出生年月日</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.client_birth_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">同本次申請文件之地址</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生地-國家</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.objAccident[0].CRSData.birth_national}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生地-城市</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.objAccident[0].CRSData.birth_city}}</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">要保人匯款帳戶</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構代碼</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.objAccident[0].AccountData[2].bank_code_1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構中文名稱</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.objAccident[0].AccountData[2].bank_name_1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">銀行帳號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.objAccident[0].AccountData[2].account}}</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">被保人其他告知事項</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="insure-text">
        依主管機關規定，要保人及被保人資料需為同一人。
      </div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">年收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.insured_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">家庭收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.insured_fam_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">電訪時間</label>
          <div class="col-sm-12">
            <div class="insure-input-block">
              <span v-show="GetEZCashPostData.visit_time1 === true">早上9點~12點</span>
              <span v-show="GetEZCashPostData.visit_time2 === true">下午1點～6點</span>
              <span v-show="GetEZCashPostData.visit_time3 === true">晚上6點~9點</span>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-notice-text">
            依主管機關「保險業辦理電子商務應注意事項」本公司將抽樣電訪確認投保。
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data () {
    return {
      GetEZCashPostData: []
    }
  },
  mounted () {
    let jsonStr = {
      'InsurerSourceID': 'InsuranceWeb',
      'CoreData': {
        'plan_code': 'EZA99',
        'PolicyNo': this.$route.query.policyNo
      }
    }
    let yourConfig = {
      Authorization: 'Bearer ' + this.$route.query.token
    }
    axios.post('https://onlinetest.skl.com.tw/InsuranceWebApi/Customer/OrderDetail', jsonStr, yourConfig).then(response => {
      console.log(response.data.Data.Result)
      this.GetEZCashPostData = response.data.Data.Result
      this.test()
    })
  }
}

</script>
