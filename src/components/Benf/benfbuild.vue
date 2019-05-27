<template>
  <div>
    <loading v-show="GetLoading" />
    <BenfSetup :stateData="stateData"></BenfSetup>
    <template>
      <div v-for="(item, index) in BenfNum" :key="index">
        <BenfOne
        v-if="index === 0"
        :stateData="stateData" :index="index"></BenfOne>
        <BenfOneAccount
        v-if="index === 0 && isShowAccount"
        :stateData="stateData"></BenfOneAccount>
        <BenfTwo
        v-if="index === 1"
        :stateData="stateData" :index="index"></BenfTwo>
        <BenfTwoAccount
        v-if="index === 1 && isShowAccount"
        :stateData="stateData"></BenfTwoAccount>
        <BenfThree
        v-if="index === 2"
        :stateData="stateData" :index="index"></BenfThree>
        <BenfThreeAccount
        v-if="index === 2 && isShowAccount"
        :stateData="stateData"></BenfThreeAccount>
      </div>
    </template>
    <BenfFooter></BenfFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BenfSetup from './benfsetup'
import BenfOne from './benfone'
import BenfTwo from './benftwo'
import BenfThree from './benfthree'
import BenfOneAccount from './benfoneAccount'
import BenfTwoAccount from './benftwoAccount'
import BenfThreeAccount from './benfthreeAccount'
import BenfFooter from './benffooter'
export default {
  data() {
    return {
      stateData: [],
      isShowAccount: true
    }
  },
  components: {
    BenfSetup,
    BenfOne,
    BenfTwo,
    BenfThree,
    BenfOneAccount,
    BenfTwoAccount,
    BenfThreeAccount,
    BenfFooter
  },
  created() {
    this.FuncGetNationality('')
    // 當前險種名稱-進入每個險種時會初始化`PLANNAME`值
    let planName = this.$store.state.PLANNAME.toLowerCase()
    switch (planName) {
      case 'upcash':
        console.log('this.GetUpCashPostData')
        this.stateData = this.GetUpCashPostData
        this.isShowAccount = true
        break
      case 'ezcash':
        console.log('this.GetEZCashPostData')
        this.stateData = this.GetEZCashPostData
        this.isShowAccount = true
        break
      case 'myway':
        console.log('this.GetMyWayPostData')
        this.stateData = this.GetMyWayPostData
        this.isShowAccount = true
        break
      case 'ican':
        console.log('this.GetICanPostData')
        this.stateData = this.GetICanPostData
        this.isShowAccount = false
        break
      case 'iwell':
        console.log('this.GetIWellPostData')
        this.stateData = this.GetIWellPostData
        this.isShowAccount = false
        break
      case 'igoing':
        console.log('this.GetIGoingPostData')
        this.stateData = this.GetIGoingPostData
        this.isShowAccount = false
        break
      case 'accident':
        console.log('this.GetAccidentPostData')
        this.stateData = this.GetAccidentPostData
        this.isShowAccount = false
        break
      case 'health':
        console.log('this.GetHealthPostData')
        this.stateData = this.GetHealthPostData
        this.isShowAccount = false
        break
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      'GetUpCashPostData',
      'GetEZCashPostData',
      'GetICanPostData',
      'GetIWellPostData',
      'GetIGoingPostData',
      'GetMyWayPostData',
      'GetAccidentPostData',
      'GetHealthPostData'
    ]),
    BenfNum() {
      if(!this.stateData.benf_num) {
        this.stateData.benf_num = 1
      }
      return parseInt(this.stateData.benf_num)
    }
  },
  methods: {
    ...mapActions([
      'FuncGetNationality'
    ])
  }
}

</script>
