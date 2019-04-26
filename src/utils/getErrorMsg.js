function GetErrorMsg(errorMessage) {
  let errMsg = ''
  errorMessage.forEach(err => {
    errMsg += `${err}。\r\n`
  })
  return errMsg
}

export {
  GetErrorMsg
}
