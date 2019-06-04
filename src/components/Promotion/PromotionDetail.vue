<template>
  <div>
    <loading v-show="GetLoading" />
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../static/img/megaphone.png" alt=""></div>
            <div class="insure-check-title">{{Detail.Title}}</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="row col-width">
        <div class="col-sm-12">
          <img :src="Detail.Image3" />
        </div>
      </div>
      <div class="insure-text" v-html="Detail.Content"></div>
      <div class="border-bottom-line"></div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-6 footer-title footer-left" @click="GoPrev()">回前一頁</div>
          <div class="col-sm-6 footer-title footer-right" @click="GoProduct()">{{Detail.MenuGroup1_Title}}</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      'GetPromotionDetail'
    ]),
    Detail() {
      return this.GetPromotionDetail[0]
    }
  },
  methods: {
    GoPrev() {
      this.$router.push(`promotion-list`)
    },
    GoProduct() {
      this.$router.push(`/product-detail?product={productCode}`)
    }
  }
}

</script>
