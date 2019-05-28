<template>
  <div>
    <loading v-show="true" />
    連線文字客服中...
  </div>
</template>

<script>
import { getQueryStringParameterByKey } from '../../utils/getQueryStringParameterByKey'
import { toggleModalShow } from '../../utils/toggleModal.js'
export default {
  created() {
    this.dosubmit()
  },
  methods: {
    dosubmit() {
      let domainServer = `https://cti.skl.com.tw/mmccmedia/`
      let [CustName, CustIDN] = [getQueryStringParameterByKey('CustName'), getQueryStringParameterByKey('CustIDN')]
      window.jQuery.ajax({
        url: domainServer + 'ajax/jsonp/domainInfo/getWorkTime/',
        dataType: 'jsonp'
      }).done(function(data) {
        if ((data) && (data.reply) && (window.jQuery.trim(data.reply) === 'YES')) {
          if (CustName.length > 0 && CustIDN.length > 0) {
            let gender = CustIDN.substr(1, 1) === '1' ? '男' : '女'
            let result = `${domainServer}html/chat-service.html?customerName=${CustName}&customerGender=${gender}&customerQuestion=網路投保`
            window.location.href = result
          } else {
            toggleModalShow('親愛的保戶您好，請登入後在使用文字客服。')
          }
        } else {
          toggleModalShow('親愛的保戶您好，線上客服開放時間為: 週一至週五上午8點30分至晚上5點30分; 請於開放時間使用或直撥免費服務電話', '貼心提醒您')
        }
      })
    }
  }
}

</script>
