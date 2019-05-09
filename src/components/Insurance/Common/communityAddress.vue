<template>
  <div>
    <form class="form-bottom">
      <div class="form-group row">
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnCommunityAddr('old')">
            <div class="insure-check"><img :src="ensure.old" /></div>
            <div class="insure-check-content">客戶住所(通訊地址):{{stateData.city1 + stateData.district1 + stateData.road1}}</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnCommunityAddr('new')">
            <div class="insure-check"><img :src="ensure.new" /></div>
            <div class="insure-check-content">輸入新的戶籍地址</div>
            <select class="form-control data-input insure-select insure-input-block-edit" :disabled="!cbNewAddr1" v-model="city1">
              <option selected="selected" value="0">請選擇</option>
              <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
            </select>
            <select class="form-control data-input insure-select insure-input-block-edit" :disabled="!cbNewAddr1" v-model="district1">
              <option selected="selected" value="0">請選擇</option>
              <option v-for="(item, index) in GetDistrictData" :key="index" :value="item.Zip + '-' +item.Area">{{item.Area}}</option>
            </select>
            <input type="text" class="form-control insure-input-block" id="txtNewAddress1" placeholder="為保障您的權益，此欄位不可為空白" v-model="road1" />
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
      cbOldAddr1: true,
      cbNewAddr1: false
    }
  },
  created() {
    this.FuncGetCityData()
    this.FuncGetDistrictData(DEFAULTCITYNAME)
    this.OnCommunityAddr(this.stateData.IsSaveCommu ? 'new' : 'old')
  },
  computed: {
    ...mapGetters([
      'GetCityData',
      'GetDistrictData'
    ]),
    // 輸入新的通訊地址-縣市
    city1: {
      get() {
        return this.stateData.city1 || '0'
      },
      set(value) {
        this.stateData.city1 = value
        // 重新選取縣市, 要更新區域下拉框並清空區域原先的值
        this.FuncGetDistrictData(value)
        this.stateData.district1 = 0
      }
    },
    // 輸入新的通訊地址-區域
    district1: {
      get() {
        let result = InitColumnData(this.stateData.district1, '0')
        if (result === '0') return '0'
        return (`${this.stateData.zip1}-${this.stateData.district1}`) || 0
      },
      set(value) {
        // item.Zip|item.Area
        let data = value.split('-')
        this.stateData.zip1 = data[0]
        this.stateData.district1 = data[1]
      }
    },
    // 輸入新的通訊地址-路
    road1: {
      get() {
        return this.stateData.road1
      },
      set(value) {
        this.stateData.road1 = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetCityData',
      'FuncGetDistrictData'
    ]),
    /**
     * 通訊地址
     */
    OnCommunityAddr(target) {
      switch (target) {
        case 'old':
          $('#divOldAddress1').addClass('checked')
          $('#divNewAddress1').removeClass('checked')
          $('#txtNewAddress1').attr('disabled', true)
          $('#txtNewAddress1').val('')
          this.ensure.old = '../../../static/img/oval-ed.png'
          this.ensure.new = '../../../static/img/oval.png'
          this.cbNewAddr1 = false
          this.stateData.IsSaveCommu = false
          break
        case 'new':
          $('#divOldAddress1').removeClass('checked')
          $('#divNewAddress1').addClass('checked')
          $('#txtOldAddress1').attr('disabled', true)
          $('#txtNewAddress1').removeAttr('disabled')
          this.ensure.old = '../../../static/img/oval.png'
          this.ensure.new = '../../../static/img/oval-ed.png'
          this.cbNewAddr1 = true
          this.stateData.IsSaveCommu = true
          break
      }
    }
  }
}

</script>
