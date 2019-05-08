function toggleModalShow(message, modalTitle) {
  if(modalTitle !== '') {
    window.jQuery('#modalTitle').html(modalTitle)
  }
  window.jQuery('#errorModal').modal('show')
  window.jQuery('#modal-message').html(message)
}

export {
  toggleModalShow
}
