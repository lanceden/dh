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
            <label for="" class="col-sm-12 col-form-label insure-label">險種名稱</label>
            <div class="col-sm-12">
              <div class="insure-input-block">{{mockData.ins_type_name}}</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">投保始期</label>
            <div class="col-sm-12">
              <div class="insure-input-block">{{mockData.po_issue_date}}</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">是否躉繳(一次繳清)</label>
            <div class="col-sm-12">
              <div class="insure-input-block">{{mockData.IsOneTimePayment ? '是' : '否'}}</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">首期繳費管道</label>
            <div class="col-sm-12">
              <div class="insure-input-block">{{mockData.init_method}}</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">第一期保險費</label>
            <div class="col-sm-12">
              <div class="insure-input-block">{{mockData.mode_prem}} 元</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">年金給付開始日</label>
            <div class="col-sm-12">
              <div class="insure-input-block">保險年齡：{{mockData.fst_anny_pay_age}}歲之保單週年日</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
            <div class="col-sm-12">
              <div class="insure-input-block">{{mockData.anny_frequence}}</div>
            </div>
          </div>
          <div class="form-group row" v-show="mockData.anny_frequence > 0">
            <label for="" class="col-sm-12 col-form-label insure-label">保證期間</label>
            <div class="col-sm-12">
              <div class="insure-input-block">{{mockData.qpoop_19_year}}</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">保價金通知方式</label>
            <div class="col-sm-12" v-show="mockData.value_ind === '4'">
              <div class="insure-input-block">{{mockData.email}}</div>
            </div>
            <div class="col-sm-12" v-show="mockData.value_ind !== '4'">
              <div class="insure-input-block">寄送地址：<br>台北市松山區敦化北路102號B1樓</div>
            </div>
          </div>
        </form>
      </div>
      <div class="bg-radius">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
                <div class="insure-check-title">保單資料</div>
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
                <div class="insure-input-block">{{mockData.client_birth}}</div>
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
                      <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
                        <div class="insure-check-title">被保人投保資料告知事項</div>
                      </div>
                    </div>
                  </div>
                  <div class="border-bottom-line"></div>
                  <form class="form-bottom">
                    <div class="form-group row">
                      <label for="" class="col-sm-12 col-form-label insure-label">職業類別</label>
                      <div class="col-sm-12">
                        <div class="insure-input-block">{{mockData.client_occupation_class_name}} {{mockData.client_occupation_class_code_name}}</div>
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
                        <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
                          <div class="insure-check-title">FATCA及CRS個人客戶自我聲明書- 基本資料</div>
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
                        <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
                        <div class="col-sm-12">
                          <div class="insure-input-block">同本次申請文件之地址</div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="" class="col-sm-12 col-form-label insure-label">出生地</label>
                        <div class="col-sm-12">
                          <div class="insure-input-block">台灣，台北市</div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="bg-radius">
                    <div class="top">
                      <div class="top-title">
                        <div class="insure-notice-box">
                          <div class="insure-check"><img src="../../../../../static/img/account.png" alt=""></div>
                            <div class="insure-check-title">要保人匯款帳戶</div>
                          </div>
                        </div>
                      </div>
                      <div class="border-bottom-line"></div>
                      <form class="form-bottom">
                        <div class="form-group row">
                          <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構代碼</label>
                          <div class="col-sm-12">
                            <div class="insure-input-block">822</div>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構中文名稱</label>
                          <div class="col-sm-12">
                            <div class="insure-input-block">中信銀行</div>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="" class="col-sm-12 col-form-label insure-label insure-label">銀行帳號</label>
                          <div class="col-sm-12">
                            <div class="insure-input-block">123456789012</div>
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
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
// import { data } from './mockData'
export default {
  data() {
    return {
      // mockData: data.Data.Result
    }
  },
  created() {
    // console.log(this.mockData)
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetICanPostData
    ])
  }
}

</script>
