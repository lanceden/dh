<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="images/chat.png" alt=""></div>
          <div class="insure-check-title">保單寄送地址</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="insure-form">
      保險單形式：<span class="insure-form-im">紙本保單</span>
    </div>
    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label" @click="OnCheck('cbOldAddr')">同通訊地址</label>
        <div class="col-sm-12">
          <div class="insure-input-block" v-show="cbOldAddr">{{GetIGoingPostData.InsAddress}}</div>
        </div>
        <div :class="{ checked: cbOldAddr }" class="checkbox" @click="OnCheck('cbOldAddr')"></div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label" @click="OnCheck('cbNewAddr')">輸入新的通訊地址</label>
        <div class="col-sm-12">
          <input type="text" class="form-control insure-input-block" id="newCommunityAddress" v-show="cbNewAddr" placeholder="為保障您的權益，此欄位不可為空白" v-model="newAddress">
        </div>
        <div :class="{ checked: cbNewAddr }" class="checkbox" @click="OnCheck('cbNewAddr')"></div>
      </div>
      <div class="col-sm-12">
        <div class="insure-tips">
          ※將同步更新客戶基本資料
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
export default {
  data() {
    return {
      cbOldAddr: true,
      cbNewAddr: false,
      tempAddr: ''
    }
  },
  created() {
    this.tempAddr = this.GetIGoingPostData.InsAddress
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIGoingPostData
    ]),
    newAddress: {
      get() {
        return this.tempAddr
      },
      set(value) {
        /**
         * city1: 花蓮縣
           district1: 富里鄉
           road1: 水往上流1號
         */
        this.tempAddr = value
        this.GetMyWayPostData.InsAddress = value
      }
    }
  },
  methods: {
    OnCheck(type) {
      switch (type) {
        case 'cbOldAddr':
          this.cbOldAddr = true
          this.cbNewAddr = false
          this.tempAddr = ''
          break
        case 'cbNewAddr':
          this.cbOldAddr = false
          this.cbNewAddr = true
          break
      }
    }
  }
}

</script>
