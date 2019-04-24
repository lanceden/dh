<template>
  <div>
    <PaymentAccount></PaymentAccount>
    <PaymentCreditcard></PaymentCreditcard>
    <PaymentFooter></PaymentFooter>
  </div>
</template>

<script>
import PaymentAccount from './payment_account'
import PaymentCreditcard from './payment_creditcard'
import PaymentFooter from './payment_footer'
export default {
  components: {
    PaymentAccount,
    PaymentCreditcard,
    PaymentFooter
  }
}

</script>
