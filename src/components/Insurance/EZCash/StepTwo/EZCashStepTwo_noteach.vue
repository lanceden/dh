<template>
  <!--Start 銀行或郵局轉帳 -->
  <div class="bg-radius" v-show="!this.GetEZCashPostData.IsOneTimePayment">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/account.png" alt=""></div>
            <div class="insure-check-title">非約定帳戶</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構代碼</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit">
              <option v-for="(item, index) in GetBankData" :key="index" :value="item.bank_code">{{item.bank_name}}</option>
            </select>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips-text" onclick="location.href='Insure-BankList.html'">
            <img src="../../../../../static/img/insure-link.png" alt="">查詢合作金融機構
					</div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構中文名稱</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="中信銀行">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label insure-label">銀行帳號</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="請輸入">
            </div>
          </div>
          <div class="col-sm-12">
            <div class="insure-notice">
              ​<span class="insure-notice-title">備註</span>
              <div class="insure-notice-text">續期繳費管道若為「銀行或郵局帳戶轉帳」：</div>
              <ol class="insure-notice-text insure-notice-text-ol">
                <li>​請記得列印『保險費暨保單借款利息自動轉帳付款委託書』並檢視資料正確性。若委託書須再進行補印，您可至 新光人壽客戶服務中心 > 保單管理 > 保單明細中重新下載列印。</li>
                <li>​若確認資料無誤後，再於「原留帳戶印鑑」欄，簽蓋銀行開戶印鑑或簽名，並於二日內自付郵資寄回本公司受理，才算申請完成。請寄到：10018台北市中正區忠孝西路一段66號18樓 新光人壽保險股份有限公司 保費部
                  轉帳管理課收。</li>
              </ol>
            </div>
          </div>
      </form>
      <!-- Modal -->
      <div class="modal fade" id="service-center" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-toped" role="document">
          <div class="modal-content">
            <!-- <div class="modal-header"></div> -->
            <div class="modal-body">
              <div class="modal-title">全國新光人壽行政中心繳費</div>
              <div class="modal-title-line"></div>
              <div class="modal-text">繳費金額限制，請見本商品受理規定。多元繳費方式，請見<a class="modal-link" href="http://www.skl.com.tw">新光人壽官網</a>保戶服務>保單服務>繳費服務>繳費管道>自行繳交續期保費。</div>
            </div>
            <div class="modal-footer">
              <!-- <button class="btn-modal-left" type="">關閉</button>
      	      <button class="btn-modal-right" type="">下一步</button> -->
              <button class="btn-modal-block" type="" onclick="$('#service-center').modal('hide')">確定</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
export default {
  created() {
    this.FuncGetBank('103')
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetEZCashPostData,
      'GetBank',
      'GetBankData'
    ])
  },
  methods: {
    ...mapActions([
      'FuncGetBank'
    ])
  }
}

</script>
