<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/phone.png" alt=""></div>
            <div class="insure-check-title">電訪時間</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="insure-text">
        依主管機關「保險業辦理電子商務應注意事項」本公司將抽樣電訪確認投保，如需電訪，您的方便聯絡時間為：
      </div>
      <div class="row insure-time-box">
        <div class="col-sm-4" @click="OnCkech('visit_time1')">
          <div :class="{ 'insure-times-active': visit_time1 }" class="insure-times">
            早上<br>
            9點~12點
          </div>
        </div>
        <div class="col-sm-4" @click="OnCkech('visit_time2')">
          <div :class="{ 'insure-times-active': visit_time2 }" class="insure-times">
            下午<br>
            1點~6點
          </div>
        </div>
        <div class="col-sm-4" @click="OnCkech('visit_time3')">
          <div :class="{ 'insure-times-active': visit_time3 }" class="insure-times">
            晚上<br>
            6點~9點
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
export default {
  data() {
    return {
      visit_time1: true,
      visit_time2: false,
      visit_time3: false
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIGoingPostData
    ])
  },
  methods: {
    OnCkech(phoneTime) {
      switch (phoneTime) {
        case 'visit_time1':
          this.visit_time1 = !this.visit_time1
          this.GetIGoingPostData.visit_time1 = this.visit_time1 ? '1' : '0'
          break
        case 'visit_time2':
          this.visit_time2 = !this.visit_time2
          this.GetIGoingPostData.visit_time2 = this.visit_time2 ? '1' : '0'
          break
        case 'visit_time3':
          this.visit_time3 = !this.visit_time3
          this.GetIGoingPostData.visit_time3 = this.visit_time3 ? '1' : '0'
          break
      }
    }
  }
}

</script>
