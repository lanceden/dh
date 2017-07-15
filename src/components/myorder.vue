<template>
  <div class="zoomIn animated" :class="{modalTop:isAdd}">
    <loading v-show="ShowLoading"></loading>
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!ShowLoading">
      <!-- Content Header (Page header) -->
      <div class="myModal" v-show="isAdd">
        <OrderForm :isAdd='isAdd' :HideDiv="HideDiv"></OrderForm>
      </div>
      <!-- Main content start-->
      <div class="content">
        <!--table start-->
        <div>
          <div class="box box-primary box-margin-left">
            <div class="box-header">
              <h3>訂單管理
                <!--<button @click="add()" class="btn btn-info pull-right">新增</button>-->
              </h3>
            </div>
            <div class="box-body">
              <div class="box-group" id="accordion">
                <div class="panel box box-primary" style="overflow:auto" v-for="(order,index) in GetOrderList">
                  <div class="box-header with-border">
                    <table class="table table-striped table-hover" data-parent="#accordion" :href="index|anchorHash">
                      <tbody>
                        <tr>
                          <th>
                            <a :href="index|anchorHash" data-toggle="collapse" data-parent="#accordion" @click="getdt(order.OrderNum)">詳細資料</a>
                          </th>
                          <th>訂單</th>
                        </tr>
                        <tr>
                          <td>
                            <div class="small-box bg-aqua col-md-12">
                              <div class="inner">
                                <h3>未處理</h3>
                                <p>共一筆</p>
                                <button @click="get(order.OrderNum)" class="btn bg-orange btn-flat" type="button">編輯</button>
                                <button @click="del(order.OrderNum)" class="btn bg-maroon btn-flat " type="button">刪除</button>
                              </div>
                              <div class="icon">
                                <i class="fa fa-shopping-cart"></i>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="col-md-6">
                              <ul class="list-group ulLeft">
                                <li class="list-group-item">訂單編號: {{order.OrderNum }}</li>
                                <li class="list-group-item">訂購日期: {{order.OrderDate }}</li>
                                <li class="list-group-item">購買人: {{order.Purchaser }}</li>
                                <li class="list-group-item">購買人電話: {{order.P_Phone }}</li>
                                <li class="list-group-item">購買人地址: {{order.P_Address }}</li>
                                <li class="list-group-item">購買人mail: {{order.P_Mail }}</li>
                                <li class="list-group-item">購買人註記: {{order.P_Note }}</li>
                                <li class="list-group-item">收件人: {{order.Recipient }}</li>
                                <li class="list-group-item">收件人電話: {{order.R_Phone }}</li>
                                <li class="list-group-item">收件人地址: {{order.R_Address }}</li>
                                <li class="list-group-item">收件人mail: {{order.R_Mail }}</li>
                                <li class="list-group-item">統一編號: {{order.taxIDNum }}</li>
                                <li class="list-group-item">公司抬頭: {{order.Corporation }}</li>
                              </ul>
                            </div>
                            <div class="col-md-6">
                              <ul class="list-group ulLeft">
                                <li class="list-group-item">捐贈愛心碼: {{order.InoviceType }}</li>
                                <li class="list-group-item">發票號碼: {{order.InoviceNum}}</li>
                                <li class="list-group-item">發票狀態: {{order.InoviceStatus|inoviceStatus}}</li>
                                <li class="list-group-item">發票類型: {{order.InoviceType|inoviceType}}</li>
                                <li class="list-group-item">運送方式: {{order.DeliveryType|deliveryType }}</li>
                                <li class="list-group-item">付款方式: {{order.PayType|payType }}</li>
                                <li class="list-group-item">付款狀態: {{order.PayStatus|payStatus }}</li>
                                <li class="list-group-item">付款日期: {{order.PayDate}}</li>
                                <li class="list-group-item">處理狀態: {{order.OperateStatus|operateStatus }}</li>
                                <li class="list-group-item">結案日期: {{order.CloseDate }}</li>
                                <li class="list-group-item">活動名稱: {{order.ActivityName }}</li>
                                <li class="list-group-item">綠界 訂單編號: {{order.MerchantTradeNo }}</li>
                                <li class="list-group-item">總金額: {{order.AllTotalAmt }}</li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div :id="index" class="panel-collapse collapse" style="min-width:3500px">
                    <template v-if="GetOrderList.length > 0">
                      <div class="box-body" :id="index">
                        <h4 class="pull-left">詳細資料</h4>
                        <table class="table table-striped table-hover">
                          <tbody>
                            <tr>
                              <th>
                                <a :href="index|anchorHash" data-toggle="collapse">關閉</a>
                              </th>
                              <th>序號</th>
                              <th>訂單編號</th>
                              <th>產品編號</th>
                              <th>運送狀態</th>
                              <th>出貨日期</th>
                              <th>貨運編號</th>
                              <th>貨運公司</th>
                              <th>訂單註記(後台)</th>
                              <th>數量</th>
                              <th>商品總價</th>
                              <th>運費</th>
                              <th>產品名稱</th>
                              <th>產品樣式</th>
                              <th>產品售價</th>
                              <th>活動名稱</th>
                              <th>折價金額</th>
                            </tr>
                            <tr v-for="(dt,tindex) in GetOrderDtList" key="dt.No">
                              <td>
                                <i class="fa fa-info-circle"></i>
                              </td>
                              <td>{{dt.No}}</td>
                              <td>{{dt.OrderNum}}</td>
                              <td>{{dt.ProdID}}</td>
                              <td>{{dt.DeliveryStatus|deliveryStatus}}</td>
                              <td>{{dt.DeliveryDate}}</td>
                              <td>{{dt.DeliveryNumber}}</td>
                              <td>{{dt.DeliveryCompany}}</td>
                              <td>{{dt.I_Note}}</td>
                              <td>{{dt.Quantity}}</td>
                              <td>{{dt.TotalAmount}}</td>
                              <td>{{dt.DeliveryFee}}</td>
                              <td>{{dt.ProdName}}</td>
                              <td>{{dt.ProdStyle}}</td>
                              <td>{{dt.OrderPrice}}</td>
                              <td>{{dt.ActivityName}}</td>
                              <td>{{dt.DiscountPrice}}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--table end-->
        <pagination v-show="!ShowLoading" :cur="tcur" :all="tall" :callback="getPageData"></pagination>
      </div>
      <!-- Main content end-->
    </div>
    <!-- Page content end-->
  </div>
</template>
<script>
import {
  mapActions,
  mapGetters,
  mapState
} from 'vuex'
import {
  noty
} from '../assets/commons.js'
import OrderForm from './form/orderForm'
export default {
  data() {
    return {
      tcur: 1,
      tall: 0,
      orderAdd: false
    }
  },
  components: {
    OrderForm
  },
  created() {
    this.getPageData(1)
  },
  computed: {
    ...mapState([
      'ShowLoading',
      'isAdd'
    ]),
    ...mapGetters([
      'GetOrder',
      'GetOrderList',
      'GetOrderDtList',
      'GetOrder',
      'GetOrderPageCount',
      'GetOrderModel',
      'GetOrderModelList',
      'GetOrderPageCount'
    ])
  },
  methods: {
    ...mapActions([
      'OrderList',
      'OrderDtList',
      'OrderAddGet',
      'OrderAddPost',
      'OrderEditGet',
      'OrderEditPut',
      'OrderDelete',
      'ShowDiv',
      'HideDiv'
    ]),
    getPageData(page) {
      this.OrderList({
        http: this.$http,
        model: {
          PageIndex: page,
          PageSize: 5
        }
      })
      setTimeout(() => {
        this.tall = this.GetOrderPageCount
        this.tcur = page
      }, 2000)
    },
    getdt(id) {
      this.OrderDtList({
        http: this.$http,
        id
      })
    },
    get(id) {
      this.isAdd = false
      this.OrderEditGet({
        http: this.$http,
        id
      })
      this.ShowDiv()
    },
    del(id) {
      noty.Show('是否確定要刪除?', () => {
        this.OrderDelete({
          http: self.$http,
          id: id
        })
      })
    },
    add() {
      this.isAdd = true
      this.OrderAddGet(this.$http)
      this.ShowDiv()
    },
    doMethods(model) {
      if (!this.isAdd) {
        this.OrderEditPut({
          http: this.$http,
          model: model
        })
      } else {
        this.OrderAddPost({
          http: this.$http,
          model: model
        })
      }
    }
  }
}

</script>
<style scoped>
.modalTop {
  position: relative;
  z-index: 999
}

.ulLeft {
  text-align: left;
}

.margincenter {
  width: 350px;
  text-align: left;
  margin: 0px auto;
  font-size: 16px;
}

.myModal {
  position: fixed;
  /* Stay in place */
  z-index: 778;
  /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

.box-margin-left {
  margin-left: 10px;
}

.help {
  display: block;
  font-size: 11px;
  margin-top: 5px;
}

.help.is-danger {
  background-color: #ff3860;
  font-size: 18px;
  font-weight: bold;
  color: #34495e;
  font-family: '微軟正黑體';
}

.input.is-danger,
.textarea.is-danger {
  border: 1px solid #ff3860;
}

.even {
  --background-color: #95da8b;
}

.box-body {
  --overflow: auto;
}

</style>
