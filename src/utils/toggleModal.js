function toggleModalShow(message) {
  window.jQuery('#errorModal').modal('show')
  window.jQuery('#modal-message').html(message)
}

export {
  toggleModalShow
}
