<template>
  <div>
    <loading v-show="true" />
    <div class="content">
      <section class="content-header">
        <h1>
          <p><i aria-hidden="true" class="fa fa-meh-o fa-6"></i></p>
        </h1>
        <ol class="breadcrumb">
          <li></li>
          <li class="active">
            <p style="color: red;">連線文字客服中...</p>
          </li>
        </ol>
      </section>
      <section class="content">
        <h2></h2>
      </section>
    </div>
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
      var self = this
      let domainServer = `https://cti.skl.com.tw/mmccmedia/`
      let [CustName, CustIDN] = [getQueryStringParameterByKey('CustName'), getQueryStringParameterByKey('CustIDN')]
      window.jQuery.ajax({
        url: `${domainServer}ajax/jsonp/domainInfo/getWorkTime/`,
        dataType: 'jsonp'
      }).done(data => {
        if ((data) && (data.reply) && (window.jQuery.trim(data.reply) === 'YES')) {
          if (CustName.length > 0 && CustIDN.length > 0) {
            let gender = CustIDN.substr(1, 1) === '1' ? '男' : '女'
            let result = `${domainServer}html/chat-service.html?customerName=${CustName}&customerGender=${gender}&customerQuestion=網路投保`
            window.location.href = result
          } else {
            toggleModalShow('親愛的保戶您好，請登入後在使用文字客服。', '貼心提醒您')
            setTimeout(() => {
              self.$router.push(`/leave=true`)
              window.location.reload()
            }, 2000)
          }
        } else {
          toggleModalShow('親愛的保戶您好，線上客服開放時間為: 週一至週五上午8點30分至晚上5點30分; 請於開放時間使用或直撥免費服務電話', '貼心提醒您')
          setTimeout(() => {
            self.$router.push(`/leave=true`)
            window.location.reload()
          }, 2000)
        }
      })
    }
  }
}

</script>
