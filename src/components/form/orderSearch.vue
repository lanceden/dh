<template>
  <div>
    <div class="box box-danger box-solid collapsed-box">
      <div class="box-header with-border" data-widget="collapse">
        <h3 class="box-title">查詢</h3>
        <div class="box-tools pull-right">
        </div>
        <!-- /.box-tools -->
      </div>
      <!-- /.box-header -->
      <div class="box-body">
        <div>
          <div class="col-md-6">
            <label for="">日期區間</label>
            <input class="form-control" type="date" v-model="sDate">
          </div>
          <div class="col-md-6">
            <label for="">結束日期</label>
            <input class="form-control" type="date" v-model="eDate">
          </div>
        </div>
        <div>
          <div class="col-md-6">
            <label for="">出貨狀態</label>
            <select class="form-control" v-model="deliveryStatus">
              <option value="1">未出貨</option>
              <option value="2">已出貨</option>
              <option value="3">已送達</option>
              <option value="4">退貨中</option>
              <option value="5">退貨完成</option>
              <option value="6">退款完成</option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="">付款狀態</label>
            <select class="form-control" v-model="payStatus">
              <option value="1">未付款</option>
              <option value="2">已付款</option>
              <option value="3">退款中</option>
              <option value="4">已退款</option>
            </select>
          </div>
        </div>
        <div class="">
          <div class="col-md-12">
            <label for="">查詢條件</label>
            <input type="text" class="form-control" v-model="search">
            <button type="button" @click="doSearch" class="btn btn-info btn-block">Go</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  created() {
    let d = new Date()
    let sMonth = d.getMonth() + 1 < 10 ? `0${d.getMonth()}` : d.getMonth()
    let eMonth = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth()
    let day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
    this.sDate = `${d.getFullYear()}-${sMonth}-${day}`
    this.eDate = `${d.getFullYear()}-${eMonth}-${day}`
  },
  data() {
    return {
      sDate: '',
      eDate: '',
      search: '',
      payStatus: 1,
      deliveryStatus: 1
    }
  },
  computed: {
    ...mapGetters([
      'GetPageCount',
      'GetOrderPageCount'
    ])
  },
  methods: {
    ...mapActions([
      'GetSearchList'
    ]),
    doSearch() {
      this.GetSearchList({
        http: this.$http,
        model: {
          search: this.search,
          sDate: this.sDate,
          eDate: this.eDate,
          pageSize: this.GetPageCount,
          payStatus: this.payStatus,
          deliveryStatus: this.deliveryStatus
        }
      })
      setTimeout(() => {
        this.$emit('doPageCountChange')
      }, 2000)
    }
  }
}

</script>
<style>
.btn-margin-top {
  margin-top: 10px
}

.fa-plus::before {
  content: '' !important
}

.fa-minus::before {
  content: '' !important
}
</style>
