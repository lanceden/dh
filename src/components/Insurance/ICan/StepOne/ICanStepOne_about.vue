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
      主管機關規定，要保人及被保人資料需為同一人。
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
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns1Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>

      <!-- 請問您是否已投保其他商業實支實付型傷害醫療保險 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">請問您是否已投保其他商業實支實付型傷害醫療保險</label>
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
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns3Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>

      <!-- 請問您過去二年內是否曾因患有下列疾病而接受醫師治療、診療或用藥? -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">請問您過去二年內是否曾因患有下列疾病而接受醫師治療、診療或用藥? </label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="col-sm-12 insure-select-align">
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ol">
              <li>​高血壓症(指收縮壓140mmHg或舒張壓90mmHg以上)、狹心症、心肌梗塞、先天性心臟病、主動脈血管瘤。</li>
              <li>腦中風(腦中風、腦梗塞)、腦瘤、癲癇、智能障礙(外表無法明顯判斷者)、精神病、巴金森氏症。
                癌症(惡性腫瘤)、肝硬化、尿毒、血友病。</li>
              <li>糖尿病。</li>
              <li>酒精或藥物濫用成癮、眩暈症。</li>
              <li>視網膜出血或剝離、視神經病變。</li>
            </ul>
          </div>
        </div>
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
        <div class="border-bottom-line col-sm-12"></div>
        <div class="col-sm-12">
          <div class="insure-tips-text withradio text-red-i">
            提醒: 有以上任一者，請選擇“是”
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns4Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns4Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>

      <!-- 請問您目前身體機能是否有下列障害：-->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">請問您目前身體機能是否有下列障害：</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="insure-notice-text">
          <ul class="insure-notice-text-ol">
            <li>失明。</li>
            <li>是否曾因眼科疾病或傷害接受眼科專科醫師治療、診療或用藥，且一目視力經矯正後，最佳矯正視力在萬國視力表0.3以下。</li>
            <li>聾。</li>
            <li>是否曾因耳部疾病或傷害接受耳鼻喉科專科醫師治療、診療或用藥，且單耳聽力喪失程度在五十分貝(dB)以上。</li>
            <li>啞。</li>
            <li>咀嚼、吞嚥或言語機能障害。</li>
            <li>四肢(含手指、足趾)缺損或畸形。</li>
          </ul>
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
    </form>
    <!-- 職業類別 -->
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">職業類別</label>
      <div class="border-bottom-line col-sm-12"></div>
      <div class="border-bottom-line col-sm-12"></div>
      <div class="top col-sm-12" @click="OnOccupation(1)">
        <div class="insure-notice-box">
          <div class="insure-check"><img :src="occu.one" alt=""></div>
          <div class="insure-check-content">第一類 內勤行政文書相關</div>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>
      <div class="top col-sm-12" @click="OnOccupation(2)">
        <div class="insure-notice-box">
          <div class="insure-check"><img :src="occu.two" alt=""></div>
          <div class="insure-check-content">第二類 外勤業務相關</div>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>
      <div class="top col-sm-12" @click="OnOccupation(3)">
        <div class="insure-notice-box">
          <div class="insure-check"><img :src="occu.three" alt=""></div>
          <div class="insure-check-content">第三類 養殖、石化及放牧相關</div>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>
      <div class="top col-sm-12" @click="OnOccupation(4)">
        <div class="insure-notice-box">
          <div class="insure-check"><img :src="occu.four" alt=""></div>
          <div class="insure-check-content">第四類 司機、採石及水電修理相關</div>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>
      <form class="form-bottom col-sm-12">
        <div class=" insure-tips-text" @click="OnToggle()">
          查詢相關類別說明<img class="career" :src="occu.showOccupation" />
        </div>
      </form>
      <div class="border-bottom-line col-sm-12"></div>
      <!-- 第一類 -->
      <div name="occudisplay1" v-show="occu.show">
        <label for="" class="col-sm-12 col-form-label insure-label red">第一類 內勤行政文書相關</label>
        <div class="insure-text career" v-show="!occu.leveltwo">
          一般內勤人員、一般內勤工作人員、一般內勤服務人員（辦公室職員、櫃檯、服務檯）、一般醫師、護士及藥劑師、 一般醫務行政人員、人體彩繪師、三溫暖業負責人、三溫暖業櫃臺人員、中途之家、安養院工作人員、內勤人員、 內勤工作人員、分析員、化粧人員、化粧師、手工藝品買賣商、文具商、禮品買賣商、水產實驗人員(室內)、 代書（內勤）、古董商、司儀、布商、布類紙品工藝品之加工工人、打版師、民意代表、監立委、省縣市議員、 寺廟及教堂管理人員、米商(不參與碾米作業)、自行車買賣商(不含修理)、作曲人員、作家、志願役行政及內勤人員、 村里幹事、汽車買賣商(不含修理)、系統工程師、車站剪票員、宗教團體工作人員、店員、店員（出版商、書店、文具店）、 服務臺人員、服飾、皮
        </div>
        <div class="insure-text career" v-show="occu.leveltwo">
          一般內勤人員、一般內勤工作人員、一般內勤服務人員（辦公室職員、櫃檯、服務檯）、一般醫師、護士及藥劑師、一般醫務行政人員、人體彩繪師、三溫暖業負責人、三溫暖業櫃臺人員、中途之家、安養院工作人員、內勤人員、內勤工作人員、分析員、化粧人員、化粧師、手工藝品買賣商、文具商、禮品買賣商、水產實驗人員(室內)、代書（內勤）、古董商、司儀、布商、布類紙品工藝品之加工工人、打版師、民意代表、監立委、省縣市議員、寺廟及教堂管理人員、米商(不參與碾米作業)、自行車買賣商(不含修理)、作曲人員、作家、志願役行政及內勤人員、村里幹事、汽車買賣商(不含修理)、系統工程師、車站剪票員、宗教團體工作人員、店員、店員（出版商、書店、文具店）、服務臺人員、服飾、皮鞋、皮件買賣商、果菜商(固定攤販)、法官、書記官、檢察官、物理、職能(復健)治療師、花卉商、建築師、律師、研發人員、設計人員、製程人員、美容師、計分員、計程車行、貨運行之負責人（不參與駕駛者）、負責人、負責人（不需到現場）、負責人（出版商、書店、文具店）、軍醫院官兵、食品飲料商、修護廠一般內勤人員、修護廠廠長、家庭主婦、珠寶買賣(不參與加工作業)、珠寶公司內勤人員、畜牧場經營者（不親自作業）、站長、退休人員、做月子、育嬰中心工作人員、售票員、售票員、售貨員、教師、行政人員、教練、理髮師、造型師、眼鏡商、驗光師、票房工作人員、票務人員、設計師、設計製圖人員、通信器材買賣商、店員、陶瓷器商、傢俱、寢具商(不含安裝)、博物館工作人員、無業、待業、裁縫師、超市、便利商店店員、塔臺工作人員、會計師、當鋪商、經紀人（內勤）、經理人員、經營者（不到現場者）、葬儀社負責人、農產品加工業實驗人員、農場經營者（不親自作業）、運務人員、電腦排版工、電腦程式設計師、電影院售票員、僧尼、道士、法師及傳教人員、圖書館工作人員、實驗室育苗栽培人員、演奏人員、漁產加工業實驗人員、漁塭經營者（不親自作業）、管理員、算命師、製片人、一般內勤人員、製圖員、銀樓商、領檯帶位人員、廚具商(不含安裝)、影片剪接人員、影片商、系統商、頻道商、播音、錄音、配音人員、播音員、編曲人員、編劇、電視導播、褓姆、調查局之調查員（不需蒐証）、銷售工程師 (內勤)、學生(不含軍校、警校)、學校志工、機車買賣商(不含修理)、機場櫃臺人員、辦事處人員、錄影帶/光碟片出租店負責人、店員、檢查人員、櫃臺人員、櫃臺售票員、醫學及病理檢驗人員、雜貨商、繪畫人員、藥品買賣商、關務人員、警務行政及內勤人員、鐘錶匠、攝影師、觀護人
        </div>
        <div class="tac career" @click="occu.leveltwo = !occu.leveltwo">
          <img v-show="occu.leveltwo" src="../../../../../static/img/Arrow Icon.png">
          <img v-show="!occu.leveltwo" src="../../../../../static/img/double-arrow-down.png">
        </div>
      </div>

      <!-- 第二類 -->
      <div name="occudisplay2" v-show="occu.showTwo">
        <label for="" class="col-sm-12 col-form-label insure-label red">第二類 外勤業務相關</label>
        <div class="insure-text career" v-show="!occu.leveltwo">
          一般流動、固定攤販、一般看護人員、一般清潔工、一般演員（導演）、三溫暖業工作人員、大樓管理員、小吃店人員、工安人員、工程師、工藝教師、中藥材加工人員、五金商、公證行外務員、化妝品製造工人、化學品管人員、化學實驗師、引導參觀工地之服務人員、月臺工作人員、木材工廠負責人、木材工廠現場之職員、木材商、水族館經營者、水電衛生器材商(不含安裝)、火葬場處理人員、加油(氣)站工作人員、包裝工、包裝工人、包裹搬運人員、外務員、外務員、生前契約傳銷人員、外勤人員、外勤記者、外燴辦桌人員、布袋戲偶操作人員、平交道看守人員、平地育苗工人、民俗體育活動人員、皮革手工藝品加工、石材商、光電及光學工作人員、印刷工、地毯之裝設人員、地磅工作人員、地質探測員（平地）
        </div>
        <div class="insure-text career" v-show="occu.leveltwo">
          一般流動、固定攤販、一般看護人員、一般清潔工、一般演員（導演）、三溫暖業工作人員、大樓管理員、小吃店人員、工安人員、工程師、工藝教師、中藥材加工人員、五金商、公證行外務員、化妝品製造工人、化學品管人員、化學實驗師、引導參觀工地之服務人員、月臺工作人員、木材工廠負責人、木材工廠現場之職員、木材商、水族館經營者、水電衛生器材商(不含安裝)、火葬場處理人員、加油(氣)站工作人員、包裝工、包裝工人、包裹搬運人員、外務員、外務員、生前契約傳銷人員、外勤人員、外勤記者、外燴辦桌人員、布袋戲偶操作人員、平交道看守人員、平地育苗工人、民俗體育活動人員、皮革手工藝品加工、石材商、光電及光學工作人員、印刷工、地毯之裝設人員、地磅工作人員、地質探測員（平地）、成衣（毛衣、針織）代工、收帳員、收費員、收費員、抄錶員、早餐店工作人員、竹木製手工藝品之加工工人、竹木製手工藝品之雕刻工人、羽球球員、肉販(含流動、固定攤販)、自用大客車司機、自用小客車司機、自助餐工作人員、行李搬運工人、行政人員、行動咖啡車工作人員、佣人、助產士、抄錶員、收費員、技師、技師、品管人員、沖片工作人員、汽車加氣瓦斯站工作人員、汽車洗車、打臘美容工人、汽車修理廠引導員(不參與修理)、汽車檢驗員、車站清潔人員、車輛保管人員、車輛器材、用品買賣商（不含礦物油）、事務機器維修人員、咖啡店人員、店員、房屋土地仲介、承包商、監工、放射線之技術人員、昆蟲（蜜蜂）飼養人員、服務人員、法警、泡沫茶店人員、泊車人員、物料倉管、花圃栽培人員、保齡球球員、品管人員、娃娃車司機、宣傳、客房服務人員、客運車稽核人員、建材商、洗片工作人員、洗衣人員、洗衣店工人、洗碗工、玻璃商、砂石場負責人、苗圃栽培人員、計分員、負責人、負責人（需現場指導或實際參與工作）、軍校教官、軍訓教官、食品加工工人、香燭、紙錢、爆竹買賣、修護廠工程師、倉管人員（不搬貨）、娛樂場所工作人員及負責人、射箭人員、射擊人員、書店外務員、書店送貨員、校工、校警、核能電廠行政人員、桌球球員、珠寶加工工人、病蟲害防治人員、神壇工作人員、站內清潔人員、紡紗工人、紋身藝術人員、紙盒黏貼工人、紙箱包裝工人、茶農、送貨員、送機人員、酒廠化驗人員、針織工人、陣頭、樂隊人員、高爾夫球球員、健身房、有氧運動教練、勘與師、探測員、推銷員、採訪、轉播車司機、採購人員、排版、製版工、教練、清潔、打蠟、消毒、除蟲工人、清潔工、清潔工人、清艙員、球場保養人、球僮、現場指導、助理導播、設計工程師（含現場監工）、速食店工作人員、釣魚、釣蝦場經營者、工作人員、魚販(含流動、固定攤販)、勞、健保局調查人員（外勤）、場記、報關人員、報關行外務員、游泳人員、無塵室工作人員、硬體測試人員、跌打損傷治療人員(接骨、氣功推拿)、飯店保全人員、飲食攤販、搬運行李服務人員、業務員、業務員、AE公關、溜冰人員、經理人員、行政人員、經營者（到現場者）、現場監督人員、裝訂工、裝配工、農夫、農具商、農產品加工業品管人員、農產品加工業領班、工人、農會指導員、推廣員、農業技師、指導員、電動玩具店器具維修工人?、電動玩具操作員、電視記者、電影院放映人員、電影院服務人員兼餐飲販賣、電影院清潔人員、電器商(不含安裝)、飼養家禽家畜人員、墓園管理員、歌唱、舞蹈演藝人員、演藝經紀人、漁產加工業品管員、漁產加工業領班、一般工人、監理所路考官、監獄、看守所醫生、護理人員、網球球員、維護工人、維護工程師、舞蹈教室老師、製造工人、製藥廠工作人員、製藥廠品管員、製麵工人、領班、監工、廚師、廣告招牌繪製人員（地面工作）、廣告旗幟製作、廣告影片之拍攝錄製人員、廠區行政人員、撞球球員、模具設計、模特兒、樂器安裝組合維修人員、獎牌紀念品製作、碾米商、緝私人員、調查徵信人員、調酒師、銷售工程師 (外務)、鞋匠、雨傘匠、磨刀匠、養鴿、放鴿人員、齒模工、導遊、領隊、導覽解說員、操作自動ＩＣ工人、操作員(不包括礦場使用者)、機場接送人員、泊車人員、燈光及音響效果工作人員、選手、隨車人員（技術人員除外）、雕塑人員、餐飲補習班教師、戲劇演員、檢查員、檢骨師、營造廠負責人、環境噴灑工人、壘球球員、檳榔商、櫃檯行李員、殯儀館管理人員、醫院炊事、醫療機械儀器商、鎖匠、刻印章人員、雜工、寵物美容師、獸醫、獸醫（寵物醫院）寵物美容、關務人員、警校教官、警察大學、警察專科學生、警衛、保全人員（內勤）、麵包師父、攝影工作人員、攝影記者、鐵材商、魔術助理人員、魔術師、體育教師、鑰匙加工人員、刻印加工人員
        </div>
        <div class="tac career" @click="occu.leveltwo = !occu.leveltwo">
          <img v-show="occu.leveltwo" src="../../../../../static/img/Arrow Icon.png">
          <img v-show="!occu.leveltwo" src="../../../../../static/img/double-arrow-down.png">
        </div>
      </div>

      <!-- 第三類 -->
      <div name="occudisplay3" v-show="occu.showThree">
        <label for="" class="col-sm-12 col-form-label insure-label red">第三類 養殖、石化及放牧相關工作</label>
        <div class="insure-text career" v-show="!occu.leveltwo">
          長短工、果農、農業機械之操作或修護人員、檳榔種植、採檳榔、畜牧工作人員、獸醫(畜牧業、農業)、屠宰場工人、漁塭經營者（親自作業）、養殖工人（內陸）、捕魚人（內陸）、水產實驗人員(室外)、海邊撈魚苗者、領班、分級員、檢查員、標記員、磅秤員、吊車操作人員、木材工廠品管員、工程師、領班(不參與現場工作者)、遊覽車司機及服務員、客運車司機及服務員、小型客貨兩用車司機、人力三輪車伕、纜車操縱員、靈車司機、快遞送貨(機車)、堆高機駕駛（非航運）、貨櫃場管理員、教練車教練、送外賣機車駕駛、環保資源回收車司機、隨車人員、駕駛員、燃料填充員、修護廠技工、貨運：領班、倉庫管理人、稽查人員、機場內交通車司機、空橋車駕駛、行李貨運搬運工人、地面導航人員、理貨員、技工
        </div>
        <div class="insure-text career" v-show="occu.leveltwo">
          長短工、果農、農業機械之操作或修護人員、檳榔種植、採檳榔、畜牧工作人員、獸醫(畜牧業、農業)、屠宰場工人、漁塭經營者（親自作業）、養殖工人（內陸）、捕魚人（內陸）、水產實驗人員(室外)、海邊撈魚苗者、領班、分級員、檢查員、標記員、磅秤員、吊車操作人員、木材工廠品管員、工程師、領班(不參與現場工作者)、遊覽車司機及服務員、客運車司機及服務員、小型客貨兩用車司機、人力三輪車伕、纜車操縱員、靈車司機、快遞送貨(機車)、堆高機駕駛（非航運）、貨櫃場管理員、教練車教練、送外賣機車駕駛、環保資源回收車司機、隨車人員、駕駛員、燃料填充員、修護廠技工、貨運：領班、倉庫管理人、稽查人員、機場內交通車司機、空橋車駕駛、行李貨運搬運工人、地面導航人員、理貨員、技工（註：餐飲部工作人員比照餐飲業）、測量員、工程師、監工、木匠、承包商（土木建築）、磨石工人、貼瓷磚（室內）、園藝造景人員、領班、監工、交通號誌裝設及標線人員、公園、道路路燈裝修工、船舶驗收人員、室內裝璜人員、技師、負責人(需現場指導或實際參與工作)、廠長、品管人員、勞工安全檢查人員、ＣＮＣ操作（電腦雕刻機）、線割（銅線電子切割）、品管人員、工安人員、修理工、ＩＣ板電鍍、電氣焊接工、電路板維修工、家電用品維修、室內消防器材檢測(不含安裝)、一般工人、塑膠、橡膠射出成型工人（自動）、塑膠袋製造、印刷、高週波充氣玩具製造、鞋模製造工人、高爾夫球、乒乓球製造、一般工人、作業員、電池製造（技師）、殺蟲劑製造工、油漆製造工、海綿、泡綿製造工、製造工人（自行車）、修理保養工人（自行車）、汽車輪胎換修買賣、定位、染整工人、監工、領班、裁紙工人、木製傢俱製造工人、木製傢俱修理工、金屬傢俱修理工、傢俱油漆工（噴漆、烤漆）、金屬手工藝品之加工工人、金屬手工藝品之雕刻工人、礦石手工藝品加工人員、陶瓷廠工人、冰塊製造、製造工人、碾米廠操作人員、煙、酒製造工人、裝配工、包裝工、家電維修人員、品管人員、工安人員、技師、領班、監工、倉管人員（搬貨）、木炭製造工、木雕人員、香燭製造工、醫療器材裝修工、送報員、道路號誌、標誌製造工、精神病科醫師、看護及護士、煙毒勒戒所人員、採訪車、轉播車駕駛、武術指導、機械修護工人、獸醫（動物園）、動物訓練員(非馴獸師)、巡迴演出戲劇團體人員、汽車駕駛訓練班教練、乩童、外勤郵務人員、電信裝置維護修理工、水壩、水庫管理人員、自來水管裝修人員、自來水廠水質分析員（實地）、巡水員、管線裝修工、一般工廠環保人員、道路清潔工、環保稽核巡查人員、垃圾車駕駛及清潔隊員、捕狗大隊、資源回收站分類人員、工廠廢棄物清潔人員、污水處理(化糞池/水塔清潔人員)、垃圾焚化爐處理人員、廢五金處理人員、煉油廠工程師、煉油廠領班、煉油廠加油工作人員、礦物油買賣商、化學原料商、肥料買賣商、送貨員、裝設工、舊貨收購人員、廢五金買賣商、現金運送員、司機、水塔、化糞池清理人員、汽車加氣（瓦斯）站人員、保全設備裝設人員、火災現場勘查人員、徵信社外勤人員、禮堂佈置人員、墓地建造工人、義警、守望相助人員、岸巡人員、調查局之調查員（需蒐証）、室內管線安裝人員、舉重人員、籃球球員、排球球員、棒球球員、與賽人員、體操人員、職業運動教練、滑草人員、駕乘人員、駕乘人員、巧固球球員、手球球員、迴力球球員、職業運動選手。
        </div>
        <div class="tac career" @click="occu.leveltwo = !occu.leveltwo">
          <img v-show="occu.leveltwo" src="../../../../../static/img/Arrow Icon.png">
          <img v-show="!occu.leveltwo" src="../../../../../static/img/double-arrow-down.png">
        </div>
      </div>

      <!-- 第四類 -->
      <div name="occudisplay4" v-show="occu.showFour">
        <label for="" class="col-sm-12 col-form-label insure-label red">第四類 司機、採石及水電修理相關工作</label>
        <div class="insure-text career" v-show="!occu.leveltwo">
          訓犬人員、動物養殖人員、養殖工人（沿海）、捕魚人（沿海）、防腐劑工人、木材儲藏槽工人、合板製造工人、山地造林工人、山林管理人員、礦業工程師、技師、領班、工礦安全人員、採石業工人(河床)、採砂業工人、石材切割工人(大理石、花崗石)、石材磨光工人(大理石、花崗石)、採石輸送帶機器操作人員、工程師、自用貨車司機、隨車工人、小型自用貨車司機、道路工程車司機、機械操作員、鏟土機駕駛、機工、電工、修路工、維護工、貨運：搬運工人、巡查人員、碼頭工人及領班、推高機操作員、領航員、引水人、船艙清潔(船舶靠岸後)
        </div>
        <div class="insure-text career" v-show="occu.leveltwo">
          訓犬人員、動物養殖人員、養殖工人（沿海）、捕魚人（沿海）、防腐劑工人、木材儲藏槽工人、合板製造工人、山地造林工人、山林管理人員、礦業工程師、技師、領班、工礦安全人員、採石業工人(河床)、採砂業工人、石材切割工人(大理石、花崗石)、石材磨光工人(大理石、花崗石)、採石輸送帶機器操作人員、工程師、自用貨車司機、隨車工人、小型自用貨車司機、道路工程車司機、機械操作員、鏟土機駕駛、機工、電工、修路工、維護工、貨運：搬運工人、巡查人員、碼頭工人及領班、推高機操作員、領航員、引水人、船艙清潔(船舶靠岸後)、加添燃料員、飛機洗刷人員、清潔工（高牆或天花板）、跑道維護工、機械員、飛機修護人員、登山嚮導、國內泛舟安全人員、水電、機電工、模板工、泥水匠、油漆工、水電工、洗石工人、石棉瓦或浪板安裝工人、鋁門窗裝修人員、排水工程人員、防水工程人員、防熱工程人員、挑磚工人、帆布鐵架架設、空調風管架設人員、拆屋、遷屋工人、輕鋼架架設人員、寺廟彩繪人員、雜工、臨時工、綁鐵工、鐵工、建築機具維修工、工地清潔工、搭設舞台人員、圍牆鐵網搭建、擋土牆施工、平地舖設工人、維護工人、管道舖設及維護工人、領班、監工、修護遊艇工人、按裝工人、修理及維護工人、室外裝璜人員、地質探測員（山區、海上）、工地看守員、板金工、裝配工、車床工（全自動）、鉛字鑄造工、電鍍工、技工、高爾夫球具製造工、高爾夫球桿頭磨光、修理工、彎管工、熱處理、大小五金製造工、風管製造工、鋁合金鑄造、鐵櫃技工、貨櫃製造工人、鉗工、丸鐵工、模具工、泵浦裝配技師、機械操作修理員、螺絲製造、配電盤人員、油壓機操作、磨床、製造工、空氣調節器之裝修人員、冷凍修理工、室內消防器材裝修人員、電機裝配修理人員、烤漆、塑膠、橡膠射出成型工人（其他）、塑膠、橡膠射出機器維修、工人、電池製造（工人）、製造工人（汽、機車）、修理保養工人（汽、機車）、試車人員、鈑金工人、瓦斯車安裝人員、機械維修、造紙廠工人、紙箱製造工人、金屬傢俱製造工人、石材傢俱製造、修理工、煙酒廠機械操作、煙酒廠機械維修人員、一般製造工人、玻璃、琉璃製造工人、工廠機器維修人員、放射線之修護人員、機械工、電工、佈景搭設人員、燈光及音響器材架設人員、有線電視架式人員、救生員、獸欄清潔工、水電機械工、飼養人員、八家將、電力裝置維護修理工、電信工程設施之架設人員、水力、火力發電廠工作人員、水利工程設施人員、瓦斯器具製造工、化學工程環保人員、下水道清潔工、送貨員、警衛、保全人員（負有巡邏押運任務者）、搬家工人、水電工人、義交、水上摩托車教練、風浪板教練、水上摩托車駕乘人員、風浪板駕乘人員、足球球員。
        </div>
        <div class="tac career" @click="occu.leveltwo = !occu.leveltwo">
          <img v-show="occu.leveltwo" src="../../../../../static/img/Arrow Icon.png">
          <img v-show="!occu.leveltwo" src="../../../../../static/img/double-arrow-down.png">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import $ from 'jquery'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
import { InitColumnData } from '../../../../utils/initColumnData'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      occu: {
        show: false,
        showTwo: false,
        showThree: false,
        showFour: false,
        one: '../../../../../static/img/oval.png',
        two: '../../../../../static/img/oval.png',
        three: '../../../../../static/img/oval.png',
        four: '../../../../../static/img/oval.png',
        showOccupation: '../../../../../static/img/arrow_blue_down.png',
        occuDown: true,
        leveltwo: false
      },
      client_occupation_class: '0',
      isShowAns1Error: '0',
      isShowAns2Error: '0',
      isShowAns3Error: '0',
      isShowAns4Error: '0',
      isShowAns5Error: '0',
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
        QusAns5No: ''
      }
    }
  },
  created() {
    // 不為空則為未完成保單進入, 需帶入預設值
    if (this.$store.state.UNFINISHID !== null) {
      setTimeout(() => {
        this.OnOccupation(parseInt(this.GetICanPostData.client_occupation_class))
        console.log(this.GetICanPostData.QusAns)
        this.GetICanPostData.QusAns.forEach((qus, index) => {
          console.log(qus.Answar)
          this.OnEnsure(`QusAns${index + 1}`, qus.Answar)
        })
      }, 5000)
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetICanPostData
    ]),
    // 職業類別
    client_occupation_class_computed: {
      get() {
        return InitColumnData(this.GetICanPostData.client_occupation_class, 0)
      },
      set(value) {
        this.client_occupation_class = value
        this.GetICanPostData.client_occupation_class = value
      }
    }
  },
  methods: {
    OnToggle() {
      this.occu.occuDown = !this.occu.occuDown
      $('div[name=occudisplay1]').hide()
      $('div[name=occudisplay2]').hide()
      $('div[name=occudisplay3]').hide()
      $('div[name=occudisplay4]').hide()

      if (!this.occu.occuDown) {
        if (this.client_occupation_class_computed === 1) {
          this.occu.show = true
          this.occu.showTwo = false
          this.occu.showThree = false
          this.occu.showFour = false
          $('div[name=occudisplay1]').show()
        }
        if (this.client_occupation_class_computed === 2) {
          this.occu.show = false
          this.occu.showTwo = true
          this.occu.showThree = false
          this.occu.showFour = false
          $('div[name=occudisplay2]').show()
        }
        if (this.client_occupation_class_computed === 3) {
          this.occu.show = false
          this.occu.showTwo = false
          this.occu.showThree = true
          this.occu.showFour = false
          $('div[name=occudisplay3]').show()
        }
        if (this.client_occupation_class_computed === 4) {
          this.occu.show = false
          this.occu.showTwo = false
          this.occu.showThree = false
          this.occu.showFour = true
          $('div[name=occudisplay4]').show()
        }
      }
    },
    // 選取職業類別
    OnOccupation(value) {
      switch (value) {
        case 1:
          this.occu.one = '../../../../../static/img/oval-ed.png'
          this.occu.two = '../../../../../static/img/oval.png'
          this.occu.three = '../../../../../static/img/oval.png'
          this.occu.four = '../../../../../static/img/oval.png'
          this.client_occupation_class_computed = 1
          break
        case 2:
          this.occu.one = '../../../../../static/img/oval.png'
          this.occu.two = '../../../../../static/img/oval-ed.png'
          this.occu.three = '../../../../../static/img/oval.png'
          this.occu.four = '../../../../../static/img/oval.png'
          this.client_occupation_class_computed = 2
          break
        case 3:
          this.occu.one = '../../../../../static/img/oval.png'
          this.occu.two = '../../../../../static/img/oval.png'
          this.occu.three = '../../../../../static/img/oval-ed.png'
          this.occu.four = '../../../../../static/img/oval.png'
          this.client_occupation_class_computed = 3
          break
        case 4:
          this.occu.one = '../../../../../static/img/oval.png'
          this.occu.two = '../../../../../static/img/oval.png'
          this.occu.three = '../../../../../static/img/oval.png'
          this.occu.four = '../../../../../static/img/oval-ed.png'
          this.client_occupation_class_computed = 4
          break
      }
      this.OnShowOccupation(value)
    },
    OnEnsure(target, value) {
      switch (target) {
        // 請問您是否領有身心障礙手冊或身心障礙證明
        case 'QusAns1':
          if (value) {
            this.enuresArr.QusAns1Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns1No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns1Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns1No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns1Error = value
          this.GetICanPostData.QusAns[0].Answar = value
          break
          // 請問您是否已投保其他商業實支實付型傷害醫療保險
        case 'QusAns2':
          if (value) {
            this.enuresArr.QusAns2Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns2No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns2Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns2No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns2Error = value
          this.GetICanPostData.QusAns[1].Answar = value
          break
          // 被保險人目前是否受有監護宣告
        case 'QusAns3':
          if (value) {
            this.enuresArr.QusAns3Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns3No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns3Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns3No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns3Error = value
          this.GetICanPostData.AuthorizedRep = value
          this.GetICanPostData.QusAns[2].Answar = value
          break
          // 請問您過去二年內是否曾因患有下列疾病而接受醫師治療、診療或用藥? (有任一者，請選擇是)
        case 'QusAns4':
          if (value) {
            this.enuresArr.QusAns4Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns4No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns4Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns4No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns4Error = value
          this.GetICanPostData.QusAns[3].Answar = value
          break
          // 請問您目前身體機能是否有下列障害：(有任一者，請選擇”是”)
        case 'QusAns5':
          if (value) {
            this.enuresArr.QusAns5Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns5No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns5Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns5No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns5Error = value
          this.GetICanPostData.QusAns[4].Answar = value
          break
      }
    },
    // 顯示職業類別說明
    OnShowOccupation(value) {
      if (value === 1) {
        this.occu.show = true
        this.occu.showTwo = false
        this.occu.showThree = false
        this.occu.showFour = false
      } else if (value === 2) {
        this.occu.show = false
        this.occu.showTwo = true
        this.occu.showThree = false
        this.occu.showFour = false
      } else if (value === 3) {
        this.occu.show = false
        this.occu.showTwo = false
        this.occu.showThree = true
        this.occu.showFour = false
      } else if (value === 4) {
        this.occu.show = false
        this.occu.showTwo = false
        this.occu.showThree = false
        this.occu.showFour = true
      }
    }
  }
}

</script>
