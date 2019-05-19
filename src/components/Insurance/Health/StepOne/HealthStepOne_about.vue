<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
          <div class="insure-check-title">被保人投保資料告知事項</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="insure-text">
      主管機關規定，要保人及被保人資料需為同一人，如需修改個人資料，請洽本公司客戶服務中心。
    </div>
    <form class="form-bottom">

      <!-- 請問您是否領有身心障礙手冊或身心障礙證明 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">請問您是否領有身心障礙手冊或身心障礙證明?</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns1', true)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns1Yes === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns1Yes">
                </div>
              </template>
            </div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns1', false)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns1No === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns1No">
                </div>
              </template>
            </div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns1Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns1Error === true">
          親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。
        </label>
      </div>


      <!-- 請問您是否已投保其他商業實支實付型醫療保險 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">請問您是否已投保其他商業實支實付型醫療保險?</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns2', true)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns2Yes === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns2Yes">
                </div>
              </template>
            </div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns2', false)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns2No === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns2No">
                </div>
              </template>
            </div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns2Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns2Error === true">
          親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。
        </label>
      </div>

      <!-- 被保險人目前是否受有監護宣告? -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">被保險人目前是否受有監護宣告?</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns3', true)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns3Yes === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns3Yes">
                </div>
              </template>
            </div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns3', false)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns3No === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns3No">
                </div>
              </template>
            </div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns3Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns3Error === true">
          親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。
        </label>
      </div>

      <!-- 最近二個月內是否曾因受傷或生病接受醫師治療、診療或用藥？ -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">最近二個月內是否曾因受傷或生病接受醫師治療、診療或用藥？?</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns4', true)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns4Yes === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns4Yes">
                </div>
              </template>
            </div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns4', false)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns4No === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns4No">
                </div>
              </template>
            </div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns4Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns4Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>

      <!-- 過去一年內是否曾因患有下列疾病，而接受醫師治療、診療或用藥： -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">過去一年內是否曾因患有下列疾病，而接受醫師治療、診療或用藥?</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="col-sm-12 insure-select-align">
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ol">
              <li>酒精或藥物濫用成癮、眩暈症。</li>
              <li>食道、胃、十二指腸潰瘍或出血、潰瘍性大腸炎、胰臟炎、膽結石。</li>
              <li>肝炎病毒帶原、肝膿瘍、黃疸。</li>
              <li>慢性支氣管炎、氣喘、肺膿瘍、肺栓塞。</li>
              <li>痛風、高血脂症。</li>
              <li>青光眼、白內障。</li>
              <li>乳腺炎、乳漏症、子宮內膜異位症、陰道異常出血（女性被保險人回答）。</li>
            </ul>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns5', true)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns5Yes === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns5Yes">
                </div>
              </template>
            </div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns5', false)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns5No === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns5No">
                </div>
              </template>
            </div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="col-sm-12">
          <div class="insure-tips-text withradio text-red-i">
            提醒: 有以上任一者，請選擇“是”
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns5Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns5Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>


      <!-- 過去二年內是否曾因接受健康檢查有異常情形而被建議接受其他檢查或治療 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">過去二年內是否曾因接受健康檢查有異常情形而被建議接受其他檢查或治療?</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns6', true)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns6Yes === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns6Yes">
                </div>
              </template>
            </div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns6', false)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns6No === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns6No">
                </div>
              </template>
            </div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns6Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns6Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>


      <!-- 過去五年內是否曾因患有下列疾病，而接受醫師治療、診療或用藥： -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">過去五年內是否曾因患有下列疾病，而接受醫師治療、診療或用藥?</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="col-sm-12 insure-select-align">
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ol">
              <li>高血壓症（指收縮壓140mmHg或舒張壓90mmHg以上）（如 有請於「詳細填告欄」填明實際之血壓）、狹心症、心肌梗塞、 心肌肥厚、心內膜炎、風濕性心臟病、先天性心臟病、主動脈血 管瘤、心律不整（指竇性心跳過速、心房撲動、心房纖維性顫動 、期外收縮、陣發性心跳過速、心室纖維性顫動、心臟傳導阻斷 ）。</li>
              <li>腦中風（腦出血、腦梗塞、腦栓塞）、腦瘤、腦動脈血管瘤、腦 動脈硬化症、癲癇、肌肉萎縮症、重症肌無力、巴金森氏症、精 神病。</li>
              <li>肺氣腫、支氣管擴張症、塵肺症、肺結核。</li>
              <li>肝炎、肝內結石、肝硬化、肝功能異常（GOT、GPT值檢測值 有異常情形者）。</li>
              <li>腎臟炎、腎病症候群、腎機能不全、尿毒、腎囊胞。</li>
              <li>視網膜出血或剝離、視神經病變。</li>
              <li>癌症（惡性腫瘤）。</li>
              <li>血友病、白血病、貧血（再生不良性貧血、地中海型貧血）、紫 斑症。</li>
              <li>糖尿病、類風濕性關節炎、肢端肥大症、腦下垂體機能亢進或低 下、甲狀腺或副甲狀腺功能亢進或低下。</li>
              <li>紅斑性狼瘡、膠原症。</li>
              <li>愛滋病或愛滋病帶原。</li>
            </ul>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns7', true)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns7Yes === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns7Yes">
                </div>
              </template>
            </div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns7', false)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns7No === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns7No">
                </div>
              </template>
            </div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="col-sm-12">
          <div class="insure-tips-text withradio text-red-i">
            提醒: 有以上任一者，請選擇“是”
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns7Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns7Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>


      <!-- 過去五年內，是否曾因受傷或生病住院治療七日以上 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">過去五年內，是否曾因受傷或生病住院治療七日以上?</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns8', true)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns8Yes === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns8Yes">
                </div>
              </template>
            </div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns8', false)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns8No === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns8No">
                </div>
              </template>
            </div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns8Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns8Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>

      <!-- 目前身體機能狀況是否有失明、聾啞及言語、咀嚼、四肢機能障害、智能障礙（外表無法明顯判斷者） -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">目前身體機能狀況是否有失明、聾啞及言語、咀嚼、四肢機能障害、智能障礙（外表無法明顯判斷者）?</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns9', true)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns9Yes === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns9Yes">
                </div>
              </template>
            </div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns9', false)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns9No === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns9No">
                </div>
              </template>
            </div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns9Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns9Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>


      <!-- 投保健康險者請繼續填寫本項： -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">投保健康險者請繼續填寫本項：</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="col-sm-12 insure-select-align">
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ol">
              <li>現在是否仍患有下列疾病？精神官能症、何杰金氏症、膽管炎、膽囊炎、梅毒、腦性麻痺、腦膿瘍、
                化膿性骨髓炎、併發有嘔吐現象的持續性頭痛、內耳炎、鼻竇炎、乳突炎、坐骨神經痛、椎間板
                脫出、腎結石、輸尿管結石、膀胱結石、腦膜炎、腦炎、水腦症。</li>
              <li>是否曾金屬中毒、化學中毒或施行剖腹生產？</li>
            </ul>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns10', true)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns10Yes === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns10Yes">
                </div>
              </template>
            </div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns10', false)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns10No === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns10No">
                </div>
              </template>
            </div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="col-sm-12">
          <div class="insure-tips-text withradio text-red-i">
            提醒: 有以上任一者，請選擇“是”
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns10Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns10Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>
      <OccupationComponent :stateData="this.GetHealthPostData"></OccupationComponent>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
import OccupationComponent from '../../Common/occupation'

export default {
  components: {
    OccupationComponent
  },
  data() {
    return {
      isShowAns1Error: '0',
      isShowAns2Error: '0',
      isShowAns3Error: '0',
      isShowAns4Error: '0',
      isShowAns5Error: '0',
      isShowAns6Error: '0',
      isShowAns7Error: '0',
      isShowAns8Error: '0',
      isShowAns9Error: '0',
      isShowAns10Error: '0',
      enuresArr: {
        QusAns1Yes: '',
        QusAns1No: '',
        QusAns2Yes: '',
        QusAns2No: '',
        QusAns3Yes: '',
        QusAns3No: '',
        QusAns4Yes: '',
        QusAns4No: '',
        QusAns5Yes: '',
        QusAns5No: '',
        QusAns6Yes: '',
        QusAns6No: '',
        QusAns7Yes: '',
        QusAns7No: '',
        QusAns8Yes: '',
        QusAns8No: '',
        QusAns9Yes: '',
        QusAns9No: '',
        QusAns10Yes: '',
        QusAns10No: ''
      }
    }
  },
  created() {
    // 不為空則為未完成保單進入, 需帶入預設值
    if (this.$store.state.UNFINISHID !== null) {
      setTimeout(() => {
        this.GetHealthPostData.QusAns.forEach((qus, index) => {
          console.log(qus.Answar)
          this.OnEnsure(`QusAns${index + 1}`, qus.Answar)
        })
      }, 5000)
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetHealthIsInit,
      GetterTypes.GetHealthPostData
    ])
  },
  methods: {
    // 問項設置
    OnEnsure(target, value) {
      switch (target) {
        // 請問您是否領有身心障礙手冊或身心障礙證明?
        case 'QusAns1':
          if (value) {
            this.enuresArr.QusAns1Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns1No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns1Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns1No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns1Error = value
          this.GetHealthPostData.QusAns[0].Answar = value
          break
          // 被保險人目前是否受有監護宣告?
        case 'QusAns2':
          if (value) {
            this.enuresArr.QusAns2Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns2No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns2Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns2No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns2Error = value
          this.GetHealthPostData.AuthorizedRep = value
          this.GetHealthPostData.QusAns[1].Answar = value
          break
          // 請問您過去二年內是否曾因患有下列疾病而接受醫師治療、診療或用藥? (有任一者，請選擇”是”)
        case 'QusAns3':
          if (value) {
            this.enuresArr.QusAns3Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns3No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns3Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns3No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns3Error = value
          this.GetHealthPostData.QusAns[2].Answar = value
          break
          // 請問您目前身體機能是否有下列障害：(有任一者，請選擇”是”)
        case 'QusAns4':
          if (value) {
            this.enuresArr.QusAns4Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns4No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns4Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns4No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns4Error = value
          this.GetHealthPostData.QusAns[3].Answar = value
          break
        case 'QusAns5':
          if (value) {
            this.enuresArr.QusAns5Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns5No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns5Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns5No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns5Error = value
          this.GetHealthPostData.QusAns[4].Answar = value
          break
        case 'QusAns6':
          if (value) {
            this.enuresArr.QusAns6Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns6No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns6Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns6No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns6Error = value
          this.GetHealthPostData.QusAns[5].Answar = value
          break
        case 'QusAns7':
          if (value) {
            this.enuresArr.QusAns7Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns7No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns7Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns7No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns7Error = value
          this.GetHealthPostData.QusAns[6].Answar = value
          break
        case 'QusAns8':
          if (value) {
            this.enuresArr.QusAns8Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns8No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns8Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns8No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns8Error = value
          this.GetHealthPostData.QusAns[7].Answar = value
          break
        case 'QusAns9':
          if (value) {
            this.enuresArr.QusAns9Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns9No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns9Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns9No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns9Error = value
          this.GetHealthPostData.QusAns[8].Answar = value
          break
        case 'QusAns10':
          if (value) {
            this.enuresArr.QusAns10Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns10No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns10Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns10No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns10Error = value
          this.GetHealthPostData.QusAns[9].Answar = value
          break
      }
    }
  }
}

</script>
