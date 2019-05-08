<template>
  <!-- Modal -->
  <div class="modal fade modalTop" id="errorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-toped" role="document">
      <div class="modal-content">
        <!-- <div class="modal-header"></div> -->
        <div class="modal-body">
          <div class="modal-title" id="modalTitle">提醒</div>
          <div class="modal-title-line"></div>
          <div class="modal-text" id="modal-message"></div>
        </div>
        <div class="modal-footer">
          <button class="btn-modal-block" type="" onclick="window.jQuery('#errorModal').modal('hide')">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.modalTop {
  margin-top: 10%;
  overflow: hidden;
}

</style>
