<template>
  <div>
    <loading v-show="true" />
    <div>
      <div class="font-label">連線全國繳費網中...</div>
    </div>
    <form id="form1" action="#" method="post">
      <input type="hidden" id="notice_no" name="notice_no" />
      <input type="hidden" id="amount" name="amount" />
      <input type="submit" id="doPayment" hidden="hidden" />
    </form>
  </div>
</template>

<script>
import Url from '../../utils/constUrl.js'

export default {
  mounted() {
    if (this.$store.state.PAYMENTCOMPLETE !== null || this.$store.state.PAYMENTCOMPLETE !== undefined) {
      document.getElementById('notice_no').value = this.$store.state.PAYMENTCOMPLETE.NoticeNo
      document.getElementById('amount').value = this.$store.state.PAYMENTCOMPLETE.TransAmt
      document.getElementById('form1').action = Url.EbillForm
      document.getElementById('doPayment').click()
      console.log(document.getElementById('form1').action)
    }
  }
}

</script>
