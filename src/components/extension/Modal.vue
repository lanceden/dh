<template>
  <!-- Modal -->
  <div class="modal fade" id="errorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="false">
    <div class="modal-dialog modal-dialog-toped" role="document">
      <div class="modal-content">
        <!-- <div class="modal-header"></div> -->
        <div class="modal-body">
          <div class="modal-title">全國新光人壽行政中心繳費</div>
          <div class="modal-title-line"></div>
          <div class="modal-text">繳費金額限制，請見本商品受理規定。多元繳費方式，請見<a class="modal-link" href="http://www.skl.com.tw">新光人壽官網</a>保戶服務>保單服務>繳費服務>繳費管道>自行繳交續期保費。</div>
        </div>
        <div class="modal-footer">
          <!-- <button class="btn-modal-left" type="">關閉</button>
      	      <button class="btn-modal-right" type="">下一步</button> -->
          <button class="btn-modal-block" type="" onclick="$('#errorModal').modal('hide')">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  mounted() {
    window.jQuery('#errorModal').modal('show')
  },
  computed: {
    ...mapGetters([
      'isShowModal'
    ])
  },
  methods: {
    ...mapActions([
      'SetIsShowModal'
    ])
  }
}
</script>
