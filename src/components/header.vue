<template>
  <div class="step">
    <ul class="ul-step">
      <li :class="{ 'ul-step-active': !HeaderIsActive }">
        <div class="ul-number">step1</div>輸入資料
      </li>
      <li :class="{ 'ul-step-active': HeaderIsActive }">
        <div class="ul-number">step2</div>投保資料
      </li>
      <li class="">
        <div class="ul-number">step3</div>聯絡資料
      </li>
      <li class="">
        <div class="ul-number">step4</div>確認資料
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'HeaderIsActive'
    ])
  }
}
</script>
