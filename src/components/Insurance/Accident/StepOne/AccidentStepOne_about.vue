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
    <div class="border-bottom-line col-sm-12"></div>
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
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns1Error === true">
          親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。
        </label>
      </div>

      <!-- 被保險人目前是否受有監護宣告? -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">被保險人目前是否受有監護宣告?</label>
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

      <!-- 請問您過去二年內是否曾因患有下列疾病而接受醫師治療、診療或用藥? (有任一者，請選擇”是”) -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">請問您過去二年內是否曾因患有下列疾病而接受醫師治療、診療或用藥?</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="insure-text insure-text-explan">
          <ul class="insure-text-explancontent">
            <li class="decimal first">(高血壓症(指收縮壓140mmHg或舒張壓90mmHg以上)、狹心症、心肌梗塞、先天性心臟病、主動脈血管瘤。
            <li class="decimal">腦中風(腦中風、腦梗塞)、腦瘤、癲癇、智能障礙(外表無法明顯判斷者)、精神病、巴金森氏症。</li>
            <li class="decimal">癌症(惡性腫瘤)、肝硬化、尿毒、血友病。</li>
            <li class="decimal">糖尿病。</li>
            <li class="decimal">酒精或藥物濫用成癮、眩暈症。</li>
            <li class="decimal">視網膜出血或剝離、視神經病變。</li>
          </ul>
        </div>

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
        <div class="border-bottom-line col-sm-12"></div>
        <div class="col-sm-12">
          <div class="insure-tips-text withradio text-red-i">
            提醒: 有以上任一者，請選擇“是”
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns3Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns3Error === true">
          親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。
        </label>
      </div>

      <!-- 請問您目前身體機能是否有下列障害：(有任一者，請選擇”是”) -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">請問您目前身體機能是否有下列障害?</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="insure-text insure-text-explan">
          <ul class="insure-text-explancontent">
            <li class="decimal first">失明。
            <li class="decimal">是否曾因眼科疾病或傷害接受眼科專科醫師治療、診療或用藥，且一目視力經矯正後，最佳矯正視力在萬國視力表0.3以下。</li>
            <li class="decimal">聾。</li>
            <li class="decimal">是否曾因耳部疾病或傷害接受耳鼻喉科專科醫師治療、診療或用藥，且單耳聽力喪失程度在五十分貝(dB)以上。</li>
            <li class="decimal">啞。</li>
            <li class="decimal">咀嚼、吞嚥或言語機能障害。</li>
            <li class="decimal">四肢(含手指、足趾)缺損或畸形。</li>

          </ul>
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
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns4Error === true">
          親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。
        </label>
      </div>
    </form>

    <!-- 職業類別 -->
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">職業類別</label>
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
    </div>

  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'
import { InitColumnData } from '../../../../utils/initColumnData'

export default {
  created() {
    this.GetAccidentPostData.QusAns = [{ Answar: '0' }, { Answar: '0' }, { Answar: '0' }, { Answar: '0' }]
    if (this.GetAccidentPostData.client_occupation_class !== '' && this.GetAccidentPostData.client_occupation_class !== undefined) {
      this.client_occupation_class = this.GetAccidentPostData.client_occupation_class
    }
    if (this.GetAccidentPostData.QusAns !== null && this.GetAccidentPostData.client_occupation_class !== undefined) {
      this.isShowAns1Error = this.GetAccidentPostData.QusAns[0].Answar
      this.isShowAns2Error = this.GetAccidentPostData.QusAns[1].Answar
      this.isShowAns3Error = this.GetAccidentPostData.QusAns[2].Answar
      this.isShowAns4Error = this.GetAccidentPostData.QusAns[3].Answar
    }
  },
  data() {
    return {
      occu: {
        show: false,
        showTwo: false,
        one: '../../../../../static/img/oval.png',
        two: '../../../../../static/img/oval.png',
        showOccupation: '../../../../../static/img/arrow_blue_down.png',
        occuDown: false,
        leveltwo: false
      },
      client_occupation_class: '0',
      isShowAns1Error: '0',
      isShowAns2Error: '0',
      isShowAns3Error: '0',
      isShowAns4Error: '0',
      enuresArr: {
        QusAns1Yes: '',
        QusAns1No: '',
        QusAns2Yes: '',
        QusAns2No: '',
        QusAns3Yes: '',
        QusAns3No: '',
        QusAns4Yes: '',
        QusAns4No: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetAccidentPostData
    ]),
    // 職業類別
    client_occupation_class_computed: {
      get() {
        this.GetAccidentPostData.client_occupation_class = InitColumnData(this.GetAccidentPostData.client_occupation_class, 0)
        return this.GetAccidentPostData.client_occupation_class
      },
      set(value) {
        this.client_occupation_class = value
        this.GetAccidentPostData.client_occupation_class = value
      }
    }
  },
  methods: {
    OnToggle() {
      this.occu.occuDown = !this.occu.occuDown
      $('div[name=occudisplay1]').hide()
      $('div[name=occudisplay2]').hide()

      if (!this.occu.occuDown) {
        if (this.client_occupation_class_computed === 1) {
          this.occu.show = true
          this.occu.showTwo = false
          $('div[name=occudisplay1]').show()
        }
        if (this.client_occupation_class_computed === 2) {
          this.occu.show = false
          this.occu.showTwo = true
          $('div[name=occudisplay2]').show()
        }
      }
    },
    // 選取職業類別
    OnOccupation(value) {
      switch (value) {
        case 1:
          this.occu.one = '../../../../../static/img/oval-ed.png'
          this.occu.two = '../../../../../static/img/oval.png'
          this.client_occupation_class_computed = 1
          break
        case 2:
          this.occu.one = '../../../../../static/img/oval.png'
          this.occu.two = '../../../../../static/img/oval-ed.png'
          this.client_occupation_class_computed = 2
          break
      }
      this.OnShowOccupation(value)
    },
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
          this.GetAccidentPostData.QusAns[0].Answar = value
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
          this.GetAccidentPostData.AuthorizedRep = value
          this.GetAccidentPostData.QusAns[1].Answar = value
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
          this.GetAccidentPostData.QusAns[2].Answar = value
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
          this.GetAccidentPostData.QusAns[3].Answar = value
          break
      }
    },
    // 顯示職業類別說明
    OnShowOccupation(value) {
      if (value === 1) {
        this.occu.show = true
        this.occu.showTwo = false
      } else if (value === 2) {
        this.occu.show = false
        this.occu.showTwo = true
      }
    }
  }
}

</script>
