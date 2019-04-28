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
    <BenfFooter :insname="instypename"></BenfFooter>
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
  data() {
    return {
      instypename: ''
    }
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search)
    this.instypename = urlParams.get('instypename').toLowerCase()
  },
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
