<template>
  <div>
    <Otp></Otp>
    <OtpFooter></OtpFooter>
  </div>
</template>

<script>
import Otp from './otp'
import OtpFooter from './otp_footer'
export default {
  data() {
    return {
      stateData: []
    }
  },
  components: {
    Otp,
    OtpFooter
  }
}

</script>
