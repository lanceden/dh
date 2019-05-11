<template>
  <div>
    <form class="form-bottom">
      <div class="form-group row">
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnRegisterAddr('old')">
            <div class="insure-check"><img :src="ensure.old" /></div>
            <div class="insure-check-content">{{stateData.city2 + stateData.district2 + stateData.road2}}</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnRegisterAddr('new')">
            <div class="insure-check"><img :src="ensure.new" /></div>
            <div class="insure-check-content">輸入新的戶籍地址</div>
            <select class="form-control data-input insure-select insure-input-block-edit" :disabled="!cbNewAddr2" v-model="city2">
              <option selected="selected" value="0">請選擇</option>
              <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
            </select>
            <select class="form-control data-input insure-select insure-input-block-edit" :disabled="!cbNewAddr2" v-model="district2">
              <option selected="selected" value="0">請選擇</option>
              <option v-for="(item, index) in GetDistrictData" :key="index" :value="item.Zip + '-' +item.Area">{{item.Area}}</option>
            </select>
            <input type="text" class="form-control insure-input-block" id="txtNewAddress2" placeholder="為保障您的權益，此欄位不可為空白" v-model="road2" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'
import { InitColumnData } from '../../../utils/initColumnData'

const DEFAULTCITYNAME = '基隆市'
export default {
  props: [
    'stateData'
  ],
  data() {
    return {
      ensure: {
        old: `../../../static/img/oval.png`,
        new: '../../../static/img/oval.png'
      },
      cbOldAddr2: true,
      cbNewAddr2: false
    }
  },
  created() {
    this.FuncGetCityData()
    this.FuncGetDistrictData(DEFAULTCITYNAME)
    this.OnRegisterAddr(this.stateData.IsSaveRegistered ? 'new' : 'old')
  },
  computed: {
    ...mapGetters([
      'GetCityData',
      'GetDistrictData'
    ]),
    cityData: {
      get() {
        return this.GetCityData
      }
    },
    districtData: {
      get() {
        return this.GetDistrictData
      }
    },
    // 輸入新的戶籍地址-縣市
    city2: {
      get() {
        return this.stateData.city2 || '0'
      },
      set(value) {
        this.stateData.city2 = value
        // 重新選取縣市, 要更新區域下拉框並清空區域原先的值
        this.FuncGetDistrictData(value)
        this.stateData.district2 = 0
      }
    },
    // 輸入新的戶籍地址-區域
    district2: {
      get() {
        let result = InitColumnData(this.stateData.district2, '0')
        if (result === '0') return '0'
        return (`${this.stateData.zip2}-${this.stateData.district2}`) || 0
      },
      set(value) {
        // item.Zip|item.Area
        let data = value.split('-')
        this.stateData.zip2 = data[0]
        this.stateData.district2 = data[1]
      }
    },
    // 輸入新的戶籍地址-路
    road2: {
      get() {
        return this.stateData.road2
      },
      set(value) {
        this.stateData.road2 = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetCityData',
      'FuncGetDistrictData'
    ]),
    /**
     * 戶籍地址
     */
    OnRegisterAddr(target) {
      switch (target) {
        case 'old':
          $('#divOldAddress2').addClass('checked')
          $('#divNewAddress2').removeClass('checked')
          $('#txtNewAddress2').attr('disabled', true)
          $('#txtNewAddress2').val('')
          this.ensure.old = '../../../static/img/oval-ed.png'
          this.ensure.new = '../../../static/img/oval.png'
          this.cbNewAddr2 = false
          this.stateData.IsSaveRegistered = false
          break
        case 'new':
          $('#divOldAddress2').removeClass('checked')
          $('#divNewAddress2').addClass('checked')
          $('#txtOldAddress2').attr('disabled', true)
          $('#txtNewAddress2').removeAttr('disabled')
          this.ensure.old = '../../../static/img/oval.png'
          this.ensure.new = '../../../static/img/oval-ed.png'
          this.cbNewAddr2 = true
          this.stateData.IsSaveRegistered = true
          break
      }
    }
  }
}

</script>
