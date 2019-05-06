<template>
  <div>
    <div class='container'>
      <div class='banner-img'>
        <img src='../../../../static/img/banner_upcash.jpg' alt=''>
      </div>
      <div class='bg-radius'>
        <div class='top'>
          <div class='top-title'>
            <img src='../../../../static/img/calculator.png' alt=''>
            保費試算
          </div>
        </div>
        <div class='border-bottom-line'></div>
        <div class='top-tips'>
          若您為新光人壽之保戶，請先登入以利享有更多保額優惠喔！
        </div>
        <div class='form-bottom'>
          <div class='form-group row'>
            <label for='' class='col-sm-12 col-form-label'>請問您想選擇的繳法為?</label>
            <div class='col-sm-12'>
              <select id='payMode' class='form-control data-input'>
                <option value='1' selected>躉繳(一次繳交)</option>
                <option value='2'>定期繳</option>
              </select>
            </div>
          </div>
          <div class='form-group row'>
            <label for='' class='col-sm-12 col-form-label'>請問您預計規劃<span id='span_payMode'>一次</span>繳交多少保險費?</label>
            <div class='col-sm-12'>
              <select class='form-control data-input' id='insurePay' name='insurePay'>
                <option value='1'>1萬</option>
                <option value='5'>5萬</option>
                <option selected='selected' value='10'>10萬</option>
                <option value='15'>15萬</option>
                <option value='20'>20萬</option>
                <option value='25'>25萬</option>
                <option value='30'>30萬</option>
                <option value='35'>35萬</option>
                <option value='40'>40萬</option>
                <option value='45'>45萬</option>
                <option value='50'>50萬</option>
                <option value='55'>55萬</option>
                <option value='60'>60萬</option>
                <option value='65'>65萬</option>
                <option value='70'>70萬</option>
                <option value='75'>75萬</option>
              </select>
            </div>
          </div>
          <div class='form-group row'>
            <label for='' class='col-sm-12 col-form-label'>請問您想了解第_ _保單年度未，保單累計可領回多少金額?</label>
            <div class='col-sm-12'>
              <select class='form-control data-input' id='insureYear' name='insureYear'>
                <option v-for="n in 66" v-show="n > 5" :key="n" :value="n" :selected='n === 6'>{{n}}年</option>
              </select>
            </div>
          </div>
        </div>
        <div class='border-bottom-line'></div>
        <div class='bg-money'>
          <div class='col-sm-12'>
            <div class='font-label'>當您所投保的保險商品達到第 <bid id='inputAge'>Y</bid> 年度末時，您所累積可領回的金額為</div>
            <div id='UpCashSurrenderValue' class='font-money'> NT$ 0</div>
            <div class='money-icon'><img src='../../../../static/img/coins.png' alt=''></div>
          </div>
        </div>
        <div class='border-bottom-line'></div>
        <div class='text-description'>
          說明：
          <ol class='ol-number'>
            <li>所領回金額為當時之年金保單價值準備金並假設宣告利率皆維持在2.66%不變之情況下。</li>
            <li>試算金額僅供參考，正式購買商品可依實際需求選擇投保金額。</li>
          </ol>
        </div>
        <div class='border-bottom-line'></div>
        <div class='text-description'>
          <img src='../../../../static/img/loudspeaker.png' alt=''>
          首次登入》肯德基6折優惠券
        </div>
      </div>
    </div>
    <div class='footer'>
      <div class='footer-content'>
        <nav class='navbar navbar-dark row'>
          <div class='col-sm-6 footer-title footer-left' id='CountUpCashDetails'>詳細試算結果</div>
          <div class='col-sm-6 footer-title footer-right'>立即投保</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { toggleModalShow } from '../../../utils/toggleModal'
import Url from '../../../utils/constUrl.js'

const URL = Url.UpCashSimpleEstimate
export default {
  mounted() {
    let self = this
    // 一進來頁面就計算
    self.Compute()
    // 繳法別
    $('#payMode').on('change', () => {
      var value = $('#payMode').val()
      var word = $('#payMode').val() === '1' ? '一次' : '一年'
      $('#span_payMode').text(word)
      if (value === '1') {
        $('#insurePay').val('10')
      } else if (value === '2') {
        $('#insurePay').val('5')
      }
      $('#insurePay').trigger('change')
      self.Compute()
    })

    // 投保金額
    $('#insurePay').on('change', () => {
      var $this = $(this)
      // 定期繳上限750萬
      if ($('#payMode').val() === '2') {
        var insurepay = $this.val()
        var maxInsureYear = Math.floor(7500000 / (insurepay * 10000))
        this.UpdateInsurePayList(maxInsureYear)
      } else {
        this.UpdateInsurePayList(66)
      }
      self.Compute()
    })

    // 保單年度未
    $('#insureYear').on('change', () => self.Compute())

    // 試算詳細頁
    $('#CountUpCashDetails').on('click', () => {
      var paymentMode = $('#payMode').val()
      var insurePay = $('#insurePay').val()
      var insureYear = $('#insureYear').val()
      if (paymentMode === '' || insurePay === '' || insureYear === '') return
      this.$router.push(`/UpCashSimpleEstimateResult?paymentMode=${paymentMode}&insurePay=${insurePay}&insureYear=${insureYear}`)
    })
  },
  methods: {
    // 試算
    Compute() {
      $('#inputAge').text('Y')
      var paymentMode = $('#payMode').val()
      var insurePay = $('#insurePay').val()
      var insureYear = $('#insureYear').val()
      if (paymentMode === '' || insurePay === '' || insureYear === '') return
      var para = {
        'InsurerSourceID': 'InsuranceWeb',
        'CoreData': {
          'modx_99_ind': paymentMode,
          'Amount': insurePay,
          'Year': insureYear
        }
      }

      $.ajax({
        url: URL,
        type: 'POST',
        data: para,
        success: (rep) => {
          if (rep.Status === 'OK' && rep.Data.IsSuccess && rep.Data !== undefined && rep.Data.Result !== undefined) {
            $('#UpCashSurrenderValue').html('NT$' + rep.Data.Result.InvAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
            $('#inputAge').text(insureYear)
          } else if (rep.Status === 'OK' && !rep.Data.IsSuccess) {
            toggleModalShow(rep.Data.Message)
            return
          } else {
            toggleModalShow('親愛的客戶，感謝您對網路投保的支持，由於目前系統更新，請您稍候再試。造成不便我們深感抱歉，再次感謝您的惠顧。')
          }
        }
      })
    },
    // 更新保險年度下拉式選單
    UpdateInsurePayList(year) {
      var strOption = ''
      year = year > 66 ? 66 : year
      $('#insureYear').empty()
      for (var i = 6; i <= year; i++) {
        strOption += `<option value=${i}>${i}年</option>`
      }
      $('#insureYear').html(strOption)
    }
  }
}

</script>
