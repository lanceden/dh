<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../static/img/bank.png" alt=""></div>
            <div class="insure-check-title">合作金融機構一覽表</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="col-sm-12">
          <table class='table table-bordered table-rate table-top'>
            <tbody>
              <tr>
                <td class='text-center table-bank'>(004)<br>台灣銀行</td>
                <td class='text-center table-bank'>(005)<br>土地銀行</td>
                <td class='text-center table-bank'>(006)<br>合庫商銀</td>
              </tr>
              <tr>
                <td class='text-center table-bank'>(007)<br>第一銀行</td>
                <td class='text-center table-bank'>(008)<br>華南銀行</td>
                <td class='text-center table-bank'>(009)<br>彰化銀行</td>
              </tr>
              <tr>
                <td class='text-center table-bank'>(011)<br>上海銀行</td>
                <td class='text-center table-bank'>(012)<br>台北富邦</td>
                <td class='text-center table-bank'>(013)<br>國泰世華</td>
              </tr>
              <tr>
                <td class='text-center table-bank'>(016)<br>高雄銀行</td>
                <td class='text-center table-bank'>(017)<br>兆豐商銀</td>
                <td class='text-center table-bank'>(021)<br>花旗銀行</td>
              </tr>
              <tr>
                <td class='text-center table-bank'>(048)<br>王道銀行</td>
                <td class='text-center table-bank'>(050)<br>台灣企銀</td>
                <td class='text-center table-bank'>(052)<br>渣打銀行</td>
              </tr>
              <tr>
                <td class='text-center table-bank'>(053)<br>台中銀行</td>
                <td class='text-center table-bank'>(081)<br>匯豐(台灣)</td>
                <td class='text-center table-bank'>(102)<br>華泰銀行</td>
              </tr>
              <tr>
                <td class='text-center table-bank'>(103)<br>新光銀行</td>
                <td class='text-center table-bank'>(108)<br>陽信銀行</td>
                <td class='text-center table-bank'>(147)<br>三信銀行</td>
              </tr>
              <tr>
                <td class='text-center table-bank'>(700)<br>中華郵政公司</td>
                <td class='text-center table-bank'>(803)<br>聯邦銀行</td>
                <td class='text-center table-bank'>(805)<br>遠東銀行>
                </td>
              </tr>
              <tr>
                <td class='text-center table-bank'>(806)<br>元大銀行</td>
                <td class='text-center table-bank'>(807)<br>永豐銀行</td>
                <td class='text-center table-bank'>(808)<br>玉山銀行</td>
              </tr>
              <tr>
                <td class='text-center table-bank'>(809)<br>凱基銀行</td>
                <td class='text-center table-bank'>(810)<br>星展銀行(台灣)</td>
                <td class='text-center table-bank'>(812)<br>台新銀行</td>
              </tr>
              <tr>
                <td class='text-center table-bank'>(815)<br>日盛銀行</td>
                <td class='text-center table-bank'>(816)<br>安泰銀行</td>
                <td class='text-center table-bank'>(822)<br>中國信託</td>
              </tr>
              <tr>
                <td class='text-center table-bank'><br>永旺信用卡</td>
                <td class='text-center table-bank'><br>樂天信用卡</td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>

    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-12 footer-title footer-right" @click="OnGoBack()">確認</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    OnGoBack() {
      this.$router.push(`/payment`)
    }
  }
}

</script>
