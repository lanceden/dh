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
                                <h3>{{order.PayStatus|payStatus}}</h3>
                              </div>
                              <div class="icon">
                                <i class="fa fa-shopping-cart"></i>
                              </div>
                              <div class="small-box bg-aqua col-md-12">
                                <button v-show="order.PayStatus == 2" @click="get(order.OrderNum)" class="btn btn-xs bg-orange btn-flat" type="button">編輯</button>
                                <button v-show="false" @click="del(order.OrderNum)" class="btn btn-xs bg-maroon btn-flat " type="button">刪除</button>
                                <select class="form-control" v-model="payStatusSelect">
                                  <option value="1">未付款</option>
                                  <option value="2">已付款</option>
                                  <option value="3">退款中</option>
                                  <option value="4">已退款</option>
                                </select>
                                <button class="btn bg-olive btn-flat margin" @click="updateOrderPayStatus(order.OrderNum,payStatusSelect)">確定</button>
                              </div>
                            </div>
                          </td>
                          <div class="box-header with-border" style="min-width:3500px">
                            <h4 class="pull-left">詳細資料
                              <i class="fa fa-arrow-circle-down"></i>
                            </h4>
                            <table class="table table-striped table-hover" data-parent="#accordion" :href="index|anchorHash">
                              <tbody>
                                <tr>
                                  <th>訂購日期</th>
                                  <th>購買人</th>
                                  <th>購買人電話</th>
                                  <th>購買人地址</th>
                                  <th>購買人mail</th>
                                  <th>購買人註記</th>
                                  <th>收件人</th>
                                  <th>收件人電話</th>
                                  <th>收件人地址</th>
                                  <th>收件人mail</th>
                                  <th>統一編號</th>
                                  <th>公司抬頭</th>
                                  <th>捐贈愛心碼</th>
                                  <th>發票號碼</th>
                                  <th>發票狀態</th>
                                  <th>發票類型</th>
                                  <th>運送方式</th>
                                  <th>付款方式</th>
                                  <th>付款狀態</th>
                                  <th>付款日期</th>
                                  <th>處理狀態</th>
                                  <th>結案日期</th>
                                  <th>活動名稱</th>
                                  <th>綠界 訂單編號</th>
                                  <th>總金額</th>
                                </tr>
                                <tr>
                                  <td>{{order.OrderDate|isEmpty}} </td>
                                  <td>{{order.Purchaser|isEmpty}} </td>
                                  <td>{{order.P_Phone|isEmpty}} </td>
                                  <td>{{order.P_Address|isEmpty}} </td>
                                  <td>{{order.P_Mail|isEmpty}} </td>
                                  <td>{{order.P_Note|isEmpty}} </td>
                                  <td>{{order.Recipient|isEmpty}} </td>
                                  <td>{{order.R_Phone|isEmpty}} </td>
                                  <td>{{order.R_Address|isEmpty}}</td>
                                  <td>{{order.R_Mail|isEmpty}} </td>
                                  <td>{{order.taxIDNum|isEmpty}}</td>
                                  <td>{{order.Corporation|isEmpty}}</td>
                                  <td>{{order.InoviceType|isEmpty}}</td>
                                  <td>{{order.InoviceNum|isEmpty}} </td>
                                  <td>{{order.InoviceStatus|inoviceStatus|isEmpty}} </td>
                                  <td>{{order.InoviceType|inoviceType|isEmpty}} </td>
                                  <td>{{order.DeliveryType|deliveryType|isEmpty }} </td>
                                  <td>{{order.PayType|payType|isEmpty }} </td>
                                  <td>{{order.PayStatus|isEmpty|payStatus }} </td>
                                  <td>{{order.PayDate|isEmpty}} </td>
                                  <td>{{order.OperateStatus|isEmpty|operateStatus }} </td>
                                  <td>{{order.CloseDate|isEmpty}} </td>
                                  <td>{{order.ActivityName|isEmpty}} </td>
                                  <td>{{order.MerchantTradeNo|isEmpty}} </td>
                                  <td>{{order.AllTotalAmt|decimalComma|isEmpty }} </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
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
                                <!-- 未付款  -->
                                <div v-if="order.PayStatus == 1">
                                  <!-- <button @click="updateOrderDtRowType(dt.No,dt.OrderNum)">取消</button> -->
                                </div>
                                <!-- 已付款  -->
                                <div v-else-if="order.PayStatus == 2">
                                  <button class="btn btn-warning" v-show="dt.DeliveryStatus == 1" @click="updateOrderDtDeliveryStatus(dt.OrderNum,dt.No,2)">出貨</button>
                                  <button class="btn btn-danger" v-show="dt.DeliveryStatus == 1" @click="updateOrderDtDeliveryStatus(dt.OrderNum,dt.No,2)">退貨</button>
                                  <button class="btn btn-danger" v-show="dt.DeliveryStatus == 2" @click="updateOrderDtDeliveryStatus(dt.OrderNum,dt.No,3)">送達</button>
                                </div>
                                <!-- 退款中  -->
                                <div v-else-if="order.PayStatus == 3">
                                  <button class="btn btn-danger" v-show="dt.DeliveryStatus == 1" @click="updateOrderDtDeliveryStatus(dt.OrderNum,dt.No,2)">出貨</button>
                                  <button class="btn btn-danger" v-show="dt.DeliveryStatus == 2" @click="updateOrderDtDeliveryStatus(dt.OrderNum,dt.No,3)">送達</button>
                                </div>
                                <!-- 已退款  -->
                                <div v-else-if="order.PayStatus == 4">
                                  <button class="btn btn-danger" v-show="dt.DeliveryStatus == 1" @click="updateOrderDtDeliveryStatus(dt.OrderNum,dt.No,2)">出貨</button>
                                  <button class="btn btn-danger" v-show="dt.DeliveryStatus == 2" @click="updateOrderDtDeliveryStatus(dt.OrderNum,dt.No,3)">送達</button>
                                </div>
                              </td>
                              <td>{{dt.No|isEmpty}}</td>
                              <td>{{dt.OrderNum|isEmpty}}</td>
                              <td>{{dt.ProdID|isEmpty}}</td>
                              <td>{{dt.DeliveryStatus|deliveryStatus|isEmpty}}</td>
                              <td>{{dt.DeliveryDate|isEmpty}}</td>
                              <td>{{dt.DeliveryNumber|isEmpty}}</td>
                              <td>{{dt.DeliveryCompany|isEmpty}}</td>
                              <td>{{dt.I_Note|isEmpty}}</td>
                              <td>{{dt.Quantity|decimalComma|isEmpty}}</td>
                              <td>{{dt.TotalAmount|decimalComma|isEmpty}}</td>
                              <td>{{dt.DeliveryFee|decimalComma|isEmpty}}</td>
                              <td>{{dt.ProdName|isEmpty}}</td>
                              <td>{{dt.ProdStyle|isEmpty}}</td>
                              <td>{{dt.SalePrice|decimalComma|isEmpty}}</td>
                              <td>{{dt.ActivityName|isEmpty}}</td>
                              <td>{{dt.DiscountPrice|isEmpty}}</td>
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
      orderAdd: false,
      payStatusSelect: 1
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
      'OrderEditPayStatus',
      'OrderDtEditDeliveryStatus',
      'OrderDtEditRowType',
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
    },
    updateOrderPayStatus(orderNum, payStatus) {
      this.OrderEditPayStatus({
        http: this.$http,
        orderNum: orderNum,
        payStatus: payStatus
      })
    },
    updateOrderDtDeliveryStatus(orderNum, no, deliveryStatus) {
      this.OrderDtEditDeliveryStatus({
        http: this.$http,
        orderNum: orderNum,
        no: no,
        deliveryStatus: deliveryStatus
      })
    },
    updateOrderDtRowType(no, OrderNum) {
      this.OrderDtEditRowType({
        http: this.$http,
        no: no,
        OrderNum: OrderNum
      })
    }
  }
}

</script>
<style scoped>
.modalTop {
  position: relative;
  z-index: 999
}

.noPadding {
  padding: 0px;
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
