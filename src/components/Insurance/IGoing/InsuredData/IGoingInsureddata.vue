<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">投保資訊</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">保險費</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.mode_prem|decimalComma}} 元</div>
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
            <div class="insure-input-block">{{mockData.city1}}{{mockData.district1}}{{mockData.road1}}</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">保障內容</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">險種名稱</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.ins_type_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保始期(保單生效日)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.po_issue_date_Name}} 起</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">滿期日</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.matured_date_Name}} 止</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">主約保額</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.face_amt}} 萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">交通意外身故保險金或喪葬費用保險金</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.face_amt}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">交通意外失能保險金</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.face_amt}}萬元</div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-notice-text">
            註：本公司另加計按日數比例計算當期已繳付之未到期保險費，併入身故保險金或喪葬費用保險金或完全失能保險金內給付。
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">保單資訊</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.client_names}}</div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips">
            (要被保人須為同一人)
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人出生年月日</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.Birthday_Full}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.client_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人性別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.client_rate_sex === '1' ? '男' : '女'}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{mockData.phone_area}}{{mockData.phone_main}}{{mockData.phone_ext}}<br>手機：{{mockData.phone_mobile}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">通訊地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.address1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.address2}}</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">身故受益人(一)資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人(一)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.benf_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12">
            <div class="insure-input-block">順位1，{{mockData.relation_ben_death_seq_percent}}%</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
          <div class="col-sm-12">
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death) === 2">配偶</div>
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death) === 3">父母子女</div>
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death) === 6">祖孫</div>
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death) === 8">法定繼承人</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">國籍</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.BenfNationality}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.benf_dob}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.benf_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{mockData.benf_phone}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.BenfAdd_City}}{{mockData.BenfAdd_County}}{{mockData.BenfAddRemain}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">金融機構代號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.BenfBankCode1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">分行中文名稱</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.BenfBankBranchName1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">帳號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.BenfBankAccount1}}</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius" v-show="parseInt(mockData.benf_num) > 1">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">身故受益人(二)資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>

      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人(二)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.benf_name2}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12">
            <div class="insure-input-block">順位1，{{mockData.relation_ben_death_seq_percent2}}%</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
          <div class="col-sm-12">
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death2) === 2">配偶</div>
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death2) === 3">父母子女</div>
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death2) === 6">祖孫</div>
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death2) === 8">法定繼承人</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{mockData.benf_phone2}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.BenfAdd_City2}}{{mockData.BenfAdd_County2}}{{mockData.BenfAddRemain2}}</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius" v-show="parseInt(mockData.benf_num) > 2">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">身故受益人(三)資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人(三)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">法定繼承人</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12">
            <div class="insure-input-block">順位3，100%</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/account.png" alt=""></div>
            <div class="insure-check-title">被保人投保資料告知事項</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">您的職業類別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.client_occupation_class_detail}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">您是否領有身心障礙手冊或身心障礙證明</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">被保險人目前是否受有監護宣告</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">您過去二年內是否曾因患有下列疾病而接受醫師治療、診療或用藥?</label>
          <div class="col-sm-12">
            <div class="insure-input-block">(有任一者，請選擇“是”)</div>
          </div>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ul">
              <li>​高血壓症(指收縮壓140mmHg或舒張壓90mmHg以上)、狹心症、心肌梗塞、先天性心臟病、主動脈血管瘤。</li>
              <li>腦中風(腦中風、腦梗塞)、腦瘤、癲癇、智能障礙(外表無法明顯判斷者)、精神病、巴金森氏症。
                癌症(惡性腫瘤)、肝硬化、尿毒、血友病。</li>
              <li>糖尿病。</li>
              <li>酒精或藥物濫用成癮、眩暈症。</li>
              <li>視網膜出血或剝離、視神經病變。</li>
            </ul>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">您目前身體機能是否有下列障害：</label>
          <div class="col-sm-12">
            <div class="insure-input-block">(有任一者，請選擇“是”)</div>
          </div>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ul">
              <li>失明。</li>
              <li>是否曾因眼科疾病或傷害接受眼科專科醫師治療、診療或用藥，且一目視力經矯正後，最佳矯正視力在萬國視力表0.3以下。</li>
              <li>聾。</li>
              <li>是否曾因耳部疾病或傷害接受耳鼻喉科專科醫師治療、診療或用藥，且單耳聽力喪失程度在五十分貝(dB)以上。</li>
              <li>啞。</li>
              <li>咀嚼、吞嚥或言語機能障害。</li>
              <li>四肢(含手指、足趾)缺損或畸形。</li>
            </ul>
          </div>
        </div>
      </form>
    </div>

    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
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
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">婚姻狀況</label>
          <div class="col-sm-12">
            <div class="insure-input-block" v-show="parseInt(mockData.owner_marriage) === 1">未婚</div>
            <div class="insure-input-block" v-show="parseInt(mockData.owner_marriage) === 2">已婚</div>
            <div class="insure-input-block" v-show="parseInt(mockData.owner_marriage) === 3">離婚</div>
            <div class="insure-input-block" v-show="parseInt(mockData.owner_marriage) === 4">喪偶</div>
            <div class="insure-input-block" v-show="parseInt(mockData.owner_marriage) === 5">分居</div>
            <div class="insure-input-block" v-show="parseInt(mockData.owner_marriage) === 6">其他</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">年收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.insured_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">家庭收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.insured_fam_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">電訪時間</label>
          <div class="col-sm-12">
            <div class="insure-input-block" v-show="parseInt(mockData.visit_time1) === 1">早上9點~12點</div>
            <div class="insure-input-block" v-show="parseInt(mockData.visit_time2) === 1">下午1點～6點</div>
            <div class="insure-input-block" v-show="parseInt(mockData.visit_time3) === 1">晚上6點~9點</div>
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
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import { data } from './mockData'
export default {
  data() {
    return {
      mockData: data.Data.Result
    }
  },
  created() {
    console.log(this.mockData)
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIGoingPostData
    ])
  }
}

</script>
