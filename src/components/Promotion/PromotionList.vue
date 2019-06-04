<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/shape.png" alt=""></div>
            <div class="insure-check-title">優惠活動</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      
      <div class="tac" v-for="(item, index) in GetPromotionList" :key="index">
		    	<img class="promotion-Inside-topimg" src="../../../static/img/Promotion1.png">
		    </div>
        <div class="insure-text insure-text-explan posr">
          <div class="readarrow">
            <img src="../../../static/img/redarrow.png">
          </div>
          <u>
            {{item.Title}}
          </u>
          <div class="lastupdata insure-text-explancontent">
            {{item.Title}}
          </div>
        </div>
      <div class="border-bottom-line"></div>  
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {
  mounted() {
    this.FuncPromotionList()
  },
  computed: {
    ...mapGetters([
      'GetPromotionList'
    ])
  },
  methods: {
    ...mapActions([
      'FuncPromotionList'
    ])
  }
}

</script>
