<template>
  <div>
    <loading v-show="GetLoading" />
    <BenfSetup></BenfSetup>
    <BenfOne></BenfOne>
    <BenfOneAccount></BenfOneAccount>
    <BenfTwo></BenfTwo>
    <BenfTwoAccount></BenfTwoAccount>
    <BenfThree></BenfThree>
    <BenfThreeAccount></BenfThreeAccount>
    <BenfFooter></BenfFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BenfSetup from './benfsetup'
import BenfOne from './benfone'
import BenfOneAccount from './benfoneAccount'
import BenfTwo from './benftwo'
import BenfTwoAccount from './benftwoAccount'
import BenfThree from './benfthree'
import BenfThreeAccount from './benfthreeAccount'
import BenfFooter from './benffooter'
export default {
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    BenfSetup,
    BenfOne,
    BenfOneAccount,
    BenfTwo,
    BenfTwoAccount,
    BenfThree,
    BenfThreeAccount,
    BenfFooter
  }
}

</script>
