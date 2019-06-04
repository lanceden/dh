<template>
  <div class="bg-radius">
    <loading v-show="GetLoading" />
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/shape.png" alt=""></div>
          <div class="insure-check-title">優惠活動</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="insure-text insure-text-explan posr" @click="OnDetail(item.ID)" v-for="(item, index) in GetPromotionList" :key="index">
      <div class="tac">
        <img class="promotion-Inside-topimg" :src="item.Image3">
      </div>
      <div class="readarrow">
        <img src="../../../static/img/redarrow.png">
      </div>
      <div class="lastupdata insure-text-explancontent">
        {{item.Title}}
      </div>
      <div class="border-bottom-line"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created() {
    this.FuncPromotionList()
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      'GetPromotionList'
    ])
  },
  methods: {
    ...mapActions([
      'FuncPromotionList',
      'FuncPromotionDetail'
    ]),
    OnDetail(id) {
      this.FuncPromotionDetail({
        para: id,
        router: this.$router
      })
    }
  }
}

</script>
