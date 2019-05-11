<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../static/img/insurance.png" alt=""></div>
          <div class="insure-check-title">電訪時間</div>
          <span class="insure-text text-red-i">(時段可多選)</span>
        </div>
      </div>
    </div>
    <div class="border-bottom-line col-sm-12"></div>
    <div class="insure-text">
      依主管機關「保險業辦理電子商務應注意事項」本公司將抽樣電訪(本公司顯示電話02-77078599)以確認投保，如需電訪，您方便的聯絡時間為：
    </div>
    <div class="border-bottom-line col-sm-12"></div>
    <div class="top col-sm-12" @click="OnVisitTime('visit_time1')">
      <div class="insure-notice-box">
        <div class="insure-check"><img :src="time.one" alt=""></div>
        <div class="insure-check-content">早上 9點 ~ 12點</div>
      </div>
    </div>
    <div class="border-bottom-line col-sm-12"></div>
    <div class="top col-sm-12" @click="OnVisitTime('visit_time2')">
      <div class="insure-notice-box">
        <div class="insure-check"><img :src="time.two" alt=""></div>
        <div class="insure-check-content">下午 1點 ~ 6點</div>
      </div>
    </div>
    <div class="border-bottom-line col-sm-12"></div>
    <div class="top col-sm-12" @click="OnVisitTime('visit_time3')">
      <div class="insure-notice-box">
        <div class="insure-check"><img :src="time.three" alt=""></div>
        <div class="insure-check-content">晚上 6點 ~ 9點</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'stateData'
  ],
  data() {
    return {
      visit_time1: false,
      visit_time2: false,
      visit_time3: false,
      time: {
        one: '../../../../static/img/oval.png',
        two: '../../../../static/img/oval.png',
        three: '../../../../static/img/oval.png'
      }
    }
  },
  created() {
    if (this.stateData.visit_time1 !== '') {
      this.visit_time1 = this.stateData.visit_time1 === '1'
    }
    if (this.stateData.visit_time2 !== '') {
      this.visit_time2 = this.stateData.visit_time2 === '1'
    }
    if (this.stateData.visit_time3 !== '') {
      this.visit_time3 = this.stateData.visit_time3 === '1'
    }
  },
  methods: {
    OnVisitTime(phoneTime) {
      switch (phoneTime) {
        case 'visit_time1':
          this.visit_time1 = !this.visit_time1
          this.stateData.visit_time1 = this.visit_time1 ? '1' : '0'
          this.time.one = this.visit_time1 ? '../../../../static/img/oval-ed.png' : '../../../../static/img/oval.png'
          break
        case 'visit_time2':
          this.visit_time2 = !this.visit_time2
          this.stateData.visit_time2 = this.visit_time2 ? '1' : '0'
          this.time.two = this.visit_time2 ? '../../../../static/img/oval-ed.png' : '../../../../static/img/oval.png'
          break
        case 'visit_time3':
          this.visit_time3 = !this.visit_time3
          this.stateData.visit_time3 = this.visit_time3 ? '1' : '0'
          this.time.three = this.visit_time3 ? '../../../../static/img/oval-ed.png' : '../../../../static/img/oval.png'
          break
      }
      console.log(`${this.stateData.visit_time1}, ${this.stateData.visit_time2}, ${this.stateData.visit_time3}`)
    }
  }
}

</script>
