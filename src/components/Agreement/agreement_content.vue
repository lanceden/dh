<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/oval.png" alt=""></div>
            <div class="insure-check-title">新光人壽Up Cash利率變動型年金保險【乙型】保險單條款</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="col-sm-12">
        <ul class="insure-text-notice">
          <li :class="{ height100: isScroll }" class="provision" v-html="GetProvisionData[this.provisionindex].Result.Content"></li>
        </ul>
        <div class="text-center table-more insure-more-img" @click="OnToggle()">{{contentButtonTitle}}<img src="../../../static/img/table-more.png" alt=""></div>
        </div>
      </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      isScroll: false,
      contentButtonTitle: '展開閱讀更多'
    }
  },
  created() {
    this.FuncGetProvision(this.GetProvision[this.provisionindex])
  },
  props: [
    'provisionindex'
  ],
  computed: {
    ...mapGetters([
      'GetProvision',
      'GetProvisionData'
    ])
  },
  methods: {
    ...mapActions([
      'FuncGetProvision'
    ]),
    OnToggle() {
      this.isScroll = !this.isScroll
      this.contentButtonTitle = this.isScroll ? '已閱讀' : '展開閱讀更多'
      console.log(this.isScroll)
    },
    /**
     * 上一步(回到第一頁)
     */
    GoPrev() {
      this.SetHeaderIsActive(false)
      this.$router.push('/benf')
    },
    /**
     * 前往填寫聯絡資料
     */
    GoNext() {
      this.$router.push('/upcash-4')
    }
  }
}

</script>
<style>
.provision {
  height: 300px;
  overflow: scroll;
  overflow-x: hidden;
}

.height100 {
  height: 100%;
}

</style>
