<template>
  <div>
    <div class="form-group row">
      <!-- 客戶住所(通訊地址) -->
      <label for="" class="col-sm-12 col-form-label insure-label">客戶住所(通訊地址)</label>
      <div class="col-sm-12">
        <input type="text" class="form-control insure-input" id="txtOldAddress1" :value="stateData.city1 + stateData.district1 + stateData.road1" disabled="disabled">
        <div :class="{checkbox: true, checked: true}" id="divOldAddress1" @click="OnCommunityAddr('old')"></div>
      </div>
    </div>
    <!-- 輸入新的通訊地址 -->
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">輸入新的通訊地址</label>
      <div class="col-sm-12">
        <template>
          <div v-show="cbNewAddr1">
            <select class="form-control data-input insure-select insure-input-edit" :disabled="!cbNewAddr1" v-model="city1">
              <option selected="selected" value="0">請選擇</option>
              <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
            </select>
            <select class="form-control data-input insure-select insure-input-edit" :disabled="!cbNewAddr1" v-model="district1">
              <option selected="selected" value="0">請選擇</option>
              <option v-for="(item, index) in GetDistrictData" :key="index" :value="item.Zip + '-' +item.Area">{{item.Area}}</option>
            </select>
            <input type="text" class="form-control insure-input-block" id="txtNewAddress1" placeholder="為保障您的權益，此欄位不可為空白" v-model="road1" />
          </div>
        </template>
        <div :class="{checkbox: true, checked: false}" id="divNewAddress1" @click="OnCommunityAddr('new')"></div>
      </div>
    </div>
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
          this.cbNewAddr1 = false
          this.stateData.IsSaveCommu = false
          break
        case 'new':
          $('#divOldAddress1').removeClass('checked')
          $('#divNewAddress1').addClass('checked')
          $('#txtOldAddress1').attr('disabled', true)
          $('#txtNewAddress1').removeAttr('disabled')
          this.cbNewAddr1 = true
          this.stateData.IsSaveCommu = true
          break
      }
    }
  }
}

</script>
