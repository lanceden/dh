/**
 * 取回當前網址中的參數
 * @param {string} key URL傳送Key值
 * @param {string} url URL傳送Value值
 */
function getQueryStringParameterByKey(key, url) {
  if (!url) {
    url = window.location.href
  }
  key = key.replace(/[ \\[\] ]/g, '\\$&')
  var regex = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)')
  let value = regex.exec(url)
  if (!value) return null
  if (!value[2]) return null
  if (value[2] === 'null') return null
  return decodeURIComponent(value[2].replace(/\+/g, ' '))
}

export {
  getQueryStringParameterByKey
}
