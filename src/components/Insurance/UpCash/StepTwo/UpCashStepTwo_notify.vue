<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">保價金通知方式(請擇其一填選)</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label" @click="OnCheck('cbOldMail')">電子信箱</label>
          <div class="col-sm-12">
            <div class="insure-input-block"></div>
            <input type="text" class="form-control insure-input insure-input-edit" readonly="readonly" v-show="cbOldMail" v-model="email">
          </div>
          <div :class="{ checked: cbOldMail }" class="checkbox"></div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label" @click="OnCheck('cbOldAddr')">寄送至客戶住所(通訊地址)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.InsAddress}}</div>
            <input type="text" class="form-control insure-input insure-input-edit" readonly="readonly">
          </div>
          <div :class="{ checked: cbOldAddr }" class="checkbox"></div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label" @click="OnCheck('cbNewMail')">輸入新的電子信箱</label>
          <div class="col-sm-12">
            <template>
              <div v-show="cbNewMail">
                <input type="text" class="form-control insure-input-block" placeholder="為保障您的權益，此欄位不可為空白" v-model="newMail" :disabled="!cbNewMail">
              </div>
            </template>
          </div>
          <div :class="{ checked: cbNewMail }" class="checkbox"></div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label" @click="OnCheck('cbNewAddr')">輸入新的寄送地址</label>
          <div class="col-sm-12">
            <template>
              <div v-show="cbNewAddr">
                <select class="form-control data-input insure-select insure-input-edit" :disabled="!cbNewAddr" v-model="city3">
                  <option selected="selected">請選擇</option>
                  <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
                </select>
                <select class="form-control data-input insure-select insure-input-edit" :disabled="!cbNewAddr" v-model="district3">
                  <option selected="selected">請選擇</option>
                  <option v-for="(item, index) in GetDistrictData" :key="index" :value="item.Zip">{{item.Area}}</option>
                </select>
                <input type="text" class="form-control insure-input-block" placeholder="為保障您的權益，此欄位不可為空白" v-model="road3" :disabled="!cbNewAddr" />
              </div>
            </template>
          </div>
          <div :class="{ checked: cbNewAddr }" class="checkbox"></div>
        </div>
      </form>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
export default {
  data() {
    return {
      cbOldMail: true,
      cbOldAddr: false,
      cbNewMail: false,
      cbNewAddr: false
    }
  },
  created() {
    this.cbOldMail = this.GetNotifyCheckBox[0]
    this.cbOldAddr = this.GetNotifyCheckBox[1]
    this.cbNewMail = this.GetNotifyCheckBox[2]
    this.cbNewAddr = this.GetNotifyCheckBox[3]
    this.city3 = this.GetUpCashPostData.city3
    this.district3 = this.GetUpCashPostData.district3
    this.road3 = this.GetUpCashPostData.road3
    this.GetUpCashPostData.value_ind = '4'
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData,
      'GetNotifyCheckBox',
      'GetCityData',
      'GetDistrictData'
    ]),
    email: {
      get() {
        return this.GetUpCashPostData.email
      }
    },
    newMail: {
      get() {
        return this.GetUpCashPostData.email
      },
      set(value) {
        this.GetUpCashPostData.email = value
      }
    },
    city3: {
      get() {
        return this.GetUpCashPostData.city3
      },
      set(value) {
        this.GetUpCashPostData.city3 = value
      }
    },
    district3: {
      get() {
        return this.GetUpCashPostData.district3
      },
      set(value) {
        this.GetUpCashPostData.district3 = value
      }
    },
    road3: {
      get() {
        return this.GetUpCashPostData.road3
      },
      set(value) {
        this.GetUpCashPostData.road3 = value
      }
    }
  },
  methods: {
    OnCheck(cbName) {
      switch (cbName) {
        case 'cbOldMail':
          this.cbOldMail = true
          this.cbOldAddr = false
          this.cbNewMail = false
          this.cbNewAddr = false
          this.$store.state.NOTIFYCHECKBOX = [true, false, false, false]
          this.GetUpCashPostData.value_ind = '4'
          this.road3 = ''
          this.newMail = ''
          break
        case 'cbOldAddr':
          this.cbOldMail = false
          this.cbOldAddr = true
          this.cbNewMail = false
          this.cbNewAddr = false
          this.$store.state.NOTIFYCHECKBOX = [false, true, false, false]
          this.GetUpCashPostData.value_ind = '1'
          this.road3 = ''
          this.newMail = ''
          break
        case 'cbNewMail':
          this.cbOldMail = false
          this.cbOldAddr = false
          this.cbNewMail = true
          this.cbNewAddr = false
          this.$store.state.NOTIFYCHECKBOX = [false, false, true, false]
          this.GetUpCashPostData.value_ind = '4'
          this.road3 = ''
          break
        case 'cbNewAddr':
          this.cbOldMail = false
          this.cbOldAddr = false
          this.cbNewMail = false
          this.cbNewAddr = true
          this.$store.state.NOTIFYCHECKBOX = [false, false, false, true]
          this.GetUpCashPostData.value_ind = '2'
          this.newMail = ''
          break
      }
    }
  }
}

</script>
