<template>
  <div class="myModal" v-show="isAdd">
    <div style="width:95%;height:100%;position:absolute;left:3%;z-index:777;">
      <div class="nav-tabs-custom">
        <ul class="nav nav-tabs">
          <li class="active">
            <a href="#tab_1" data-toggle="tab" aria-expanded="true">資料(一)</a>
          </li>
          <li>
            <a href="#tab_2" data-toggle="tab" aria-expanded="false">資料(二)</a>
          </li>
        </ul>
        <!-- 單頭資料Tab -->
        <div class="tab-content">
          <div class="tab-pane active" id="tab_1">
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">訂單編號</button>
              </div>
              <input class="form-control" readonly name="OrderNum" v-model="GetOrder.OrderNum" type="text" placeholder="請輸入訂單編號">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">訂購日期</button>
              </div>
              <input class="form-control" name="OrderDate" v-model="GetOrder.OrderDate" type="text" placeholder="請輸入訂購日期">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">購買人</button>
              </div>
              <input class="form-control" name="Purchaser" v-model="GetOrder.Purchaser" type="text" placeholder="請輸入購買人">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">購買人電話</button>
              </div>
              <input class="form-control" name="P_Phone" v-model="GetOrder.P_Phone" type="text" placeholder="請輸入購買人電話">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">購買人地址</button>
              </div>
              <input class="form-control" name="P_Address" v-model="GetOrder.P_Address" type="text" placeholder="請輸入購買人地址">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">購買人mail</button>
              </div>
              <input class="form-control" name="P_Mail" v-model="GetOrder.P_Mail" type="text" placeholder="請輸入購買人mail">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">購買人註記</button>
              </div>
              <input class="form-control" name="P_Note" v-model="GetOrder.P_Note" type="text" placeholder="請輸入購買人註記">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">收件人</button>
              </div>
              <input class="form-control" name="Recipient" v-model="GetOrder.Recipient" type="text" placeholder="請輸入收件人">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">收件人電話</button>
              </div>
              <input class="form-control" name="R_Phone" v-model="GetOrder.R_Phone" type="text" placeholder="請輸入收件人電話">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">收件人地址</button>
              </div>
              <input class="form-control" name="R_Address" v-model="GetOrder.R_Address" type="text" placeholder="請輸入收件人地址">
            </div>
          </div>
          <div class="tab-pane" id="tab_2">
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">收件人mail</button>
              </div>
              <input class="form-control" name="R_Mail" v-model="GetOrder.R_Mail" type="text" placeholder="請輸入收件人mail">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">統一編號</button>
              </div>
              <input class="form-control" name="taxIDNum" v-model="GetOrder.taxIDNum" type="text" placeholder="請輸入統一編號">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">公司抬頭</button>
              </div>
              <input class="form-control" name="Corporation" v-model="GetOrder.Corporation" type="text" placeholder="請輸入公司抬頭">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">捐贈愛心碼</button>
              </div>
              <input class="form-control" name="InoviceLoveCode" v-model="GetOrder.InoviceLoveCode" type="text" placeholder="請輸入捐贈愛心碼">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">發票號碼</button>
              </div>
              <input class="form-control" name="InoviceNum" v-model="GetOrder.InoviceNum" type="text" placeholder="請輸入發票號碼">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">發票狀態</button>
              </div>
              <input class="form-control" name="InoviceStatus" v-model="GetOrder.InoviceStatus" type="text" placeholder="請輸入發票狀態">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">發票類型</button>
              </div>
              <input class="form-control" name="InoviceType" v-model="GetOrder.InoviceType" type="text" placeholder="請輸入發票類型">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">運送方式</button>
              </div>
              <input class="form-control" name="DeliveryType" v-model="GetOrder.DeliveryType" type="text" placeholder="請輸入運送方式">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">付款方式</button>
              </div>
              <input class="form-control" name="PayType" v-model="GetOrder.PayType" type="text" placeholder="請輸入付款方式">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">付款狀態</button>
              </div>
              <input class="form-control" name="PayStatus" v-model="GetOrder.PayStatus" type="text" placeholder="請輸入付款狀態">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">付款日期</button>
              </div>
              <input class="form-control" name="PayDate" v-model="GetOrder.PayDate" type="text" placeholder="請輸入付款日期">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">處理狀態</button>
              </div>
              <input class="form-control" name="OperateStatus" v-model="GetOrder.OperateStatus" type="text" placeholder="請輸入處理狀態">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">結案日期</button>
              </div>
              <input class="form-control" name="CloseDate" v-model="GetOrder.CloseDate" type="text" placeholder="請輸入結案日期">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">活動名稱</button>
              </div>
              <input class="form-control" name="ActivityName" v-model="GetOrder.ActivityName" type="text" placeholder="請輸入活動名稱">
            </div>
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">綠界 訂單編號</button>
              </div>
              <input class="form-control" name="MerchantTradeNo" v-model="GetOrder.MerchantTradeNo" type="text" placeholder="請輸入綠界 訂單編號">
              <div class="input-group-btn">
                <button type="button" class="btn btn-danger">總金額</button>
              </div>
              <input class="form-control" name="AllTotalAmt" v-model="GetOrder.AllTotalAmt" type="text" placeholder="請輸入總金額">
            </div>
          </div>
        </div>
        <!-- 單身資料新增 -->
        <div class="box box-info" v-show="isdtShow">
          <div class="box-body">
            <div class="col-md-6">
              <input class="form-control" name="序號" v-model="GetOrderdt.No" type="hidden">
              <ul>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 訂單編號</span>
                  <input class="form-control" readonly name="訂單編號" v-model="GetOrderdt.OrderNum" type="text" placeholder="請輸入訂單編號">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 產品編號</span>
                  <input class="form-control" name="產品編號" v-model="GetOrderdt.ProdID" type="text" placeholder="請輸入產品編號">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 運送狀態</span>
                  <select class="form-control" id="DeliveryStatus" v-model="GetOrderdt.DeliveryStatus">
                    <option value="1">未出貨</option>
                    <option value="2">已出貨</option>
                    <option value="3">已送達</option>
                    <option value="4">退貨中</option>
                    <option value="5">退貨完成</option>
                  </select>
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 出貨日期</span>
                  <input class="form-control" name="出貨日期" v-model="GetOrderdt.DeliveryDate" type="text" placeholder="請輸入出貨日期">
                </li>
                <li>
                  <span class="input-group-addon">
                  <i class="fa fa-child" aria-hidden="true"></i> 貨運編號</span>
                  <input v-validate="'required'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('貨運編號') }" class="form-control" name="貨運編號" v-model="GetOrderdt.DeliveryNumber" type="text" placeholder="請輸入貨運編號">
                  <span v-show="errors.has('貨運編號')" class="help is-danger">{{ errors.first('貨運編號') }}</span>
                </li>
                <li>
                  <span class="input-group-addon">
                  <i class="fa fa-child" aria-hidden="true"></i> 貨運公司</span>
                  <input v-validate="'required'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('貨運公司') }" class="form-control" name="貨運公司" v-model="GetOrderdt.DeliveryCompany" type="text" placeholder="請輸入貨運公司">
                  <span v-show="errors.has('貨運公司')" class="help is-danger">{{ errors.first('貨運公司') }}</span>
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 訂單註記(後台)</span>
                  <input v-validate="'required'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('訂單註記(後台)') }" class="form-control" name="訂單註記(後台)" v-model="GetOrderdt.I_Note" type="text" placeholder="請輸入訂單註記(後台)">
                  <span v-show="errors.has('訂單註記(後台)')" class="help is-danger">{{ errors.first('訂單註記(後台)') }}</span>
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 數量</span>
                  <input class="form-control" name="數量" v-model="GetOrderdt.Quantity" type="text" placeholder="請輸入數量">
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 商品總價</span>
                  <input class="form-control" name="商品總價" v-model="GetOrderdt.TotalAmount" type="text" placeholder="請輸入商品總價">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 運費</span>
                  <input class="form-control" name="運費" v-model="GetOrderdt.DeliveryFee" type="text" placeholder="請輸入運費">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 產品名稱</span>
                  <input class="form-control" name="產品名稱" v-model="GetOrderdt.ProdName" type="text" placeholder="請輸入產品名稱">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 產品樣式</span>
                  <input class="form-control" name="產品樣式" v-model="GetOrderdt.ProdStyle" type="text" placeholder="請輸入產品樣式">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 產品售價</span>
                  <input class="form-control" name="產品售價" v-model="GetOrderdt.OrderPrice" type="text" placeholder="請輸入產品售價">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 活動名稱</span>
                  <input class="form-control" name="活動名稱" v-model="GetOrderdt.活動名稱" type="text" placeholder="請輸入活動名稱">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 使用包裝</span>
                  <input class="form-control" name="使用包裝" v-model="GetOrderdt.ActivityName" type="text" placeholder="請輸入使用包裝">
                </li>
                <li>
                  <span class="input-group-addon">
                    <i class="fa fa-child" aria-hidden="true"></i> 折價金額</span>
                  <input class="form-control" name="折價金額" v-model="GetOrderdt.DiscountPrice" type="text" placeholder="請輸入折價金額">
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button v-show="!isdtShow" class="btn btn-info btn-block" @click="dodtAdd">新增</button>
        <!-- 單身資料修改 -->
        <div class="box box-info" v-show="!isdtShow">
          <template v-for="(item,i) in GetOrderDtList">
            <div class="btn-group">
              <button @click="dodtEdit(i)" class="btn bg-info btn-flat" type="button">編輯</button>
              <button @click="dodtDel(i,item.No,item.OrderNum)" class="btn bg-danger btn-flat" type="button">刪除</button>
            </div>
            <div class="box-body">
              <div class="col-md-3">
                <ul>
                  <li>
                    <span> 訂單編號: {{item.OrderNum}}</span>
                  </li>
                  <li>
                    <span>產品編號: {{item.ProdID}}</span>
                  </li>
                  <li>
                    <span>運送狀態: {{item.DeliveryStatus}}</span>
                  </li>
                  <li>
                    <span>出貨日期: {{item.DeliveryDate}}</span>
                  </li>
                  <li>
                    <span>貨運編號: {{item.DeliveryNumber}}</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <ul>
                  <li>
                    <span>貨運公司: {{item.DeliveryCompany}}</span>
                  </li>
                  <li>
                    <span>訂單註記(後台): {{item.I_Note}}</span>
                  </li>
                  <li>
                    <span>數量: {{item.Quantity}}</span>
                  </li>
                  <li>
                    <span>商品總價: {{item.TotalAmount|decimalComma}}</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <ul>
                  <li>
                    <span>運費: {{item.DeliveryFee|decimalComma}}</span>
                  </li>
                  <li>
                    <span>產品名稱: {{item.ProdName}}</span>
                  </li>
                  <li>
                    <span>產品樣式: {{item.ProdStyle}}</span>
                  </li>
                  <li>
                    <span>產品售價: {{item.SalePrice}}</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <ul>
                  <li>
                    <span>活動名稱: {{item.ActivityName}}</span>
                  </li>
                  <li>
                    <span>折價金額: {{item.DiscountPrice}}</span>
                  </li>
                </ul>
              </div>
              <hr>
            </div>
          </template>
        </div>
      </div>
      <div class="btn-group">
        <!-- 單身的按鈕 -->
        <button v-show="isdtShow" @click="doMethodsdt(GetOrderdt)" class="btn bg-orange btn-flat" type="button">確定</button>
        <button v-show="isdtShow" @click="isdtShow = false" class="btn bg-maroon btn-flat" type="button">取消</button>
        <!-- 最後的提交 -->
        <button v-show="!isdtShow" @click="doMethods(GetOrder)" class="btn bg-orange btn-flat" type="button">確定</button>
        <button v-show="!isdtShow" @click="HideDiv" class="btn bg-maroon btn-flat " type="button">取消</button>
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
  computed: {
    ...mapGetters([
      'GetOrder',
      'GetOrderdt',
      'GetOrderDtList'
    ])
  },
  data() {
    return {
      isdtShow: false,
      OrderdtAdd: false,
      tempIndex: 0
    }
  },
  props: {
    isAdd: {
      type: null,
      required: true
    },
    HideDiv: {
      type: Function,
      required: true
    }
  },
  methods: {
    ...mapActions([
      'OrderdtAddGet', // 單身點擊新增
      'OrderdtEditGet', // 單身點擊修改
      'OrderdtDelete', // 單身點擊刪除
      'OrderAddPost', // 新增提交
      'OrderEditPut' // 修改提交
    ]),
    /* 最後的提交 */
    doMethods(model) {
      // 判斷單據編號是否有值,若有值則為修改,否則為新增
      if (model.OrderNum !== undefined) {
        this.OrderEditPut({
          http: this.$http,
          model: model,
          dtModel: this.GetOrderDtList
        })
      } else {
        this.OrderAddPost({
          http: this.$http,
          model: model,
          dtModel: this.GetOrderDtList
        })
      }
    },
    /* 單身資料點擊新增 */
    dodtAdd() {
      this.OrderdtAddGet()
      this.isdtShow = true // 單身編輯視窗顯示
      this.OrderdtAdd = true // 單身資料新增
    },
    /* 單身資料點擊修改 */
    dodtEdit(index) {
      this.tempIndex = index // 點擊修改第幾個dt索引
      this.OrderdtEditGet(index)
      this.isdtShow = true // 單身編輯視窗顯示
      this.OrderdtAdd = false // 單身資料編輯
    },
    /* 單身資料點擊刪除 */
    dodtDel(index, no, orderNum) {
      this.tempIndex = index // 點擊修改第幾個dt索引
      // 新增的刪除,直接從數組中移除即可
      if (orderNum === undefined) {
        this.GetOrderDtList.splice(this.tempIndex, 1)
        return
      }
      this.OrderdtDelete({
        http: this.$http,
        no,
        orderNum
      })
    },
    /* dtModel: 單身資料確定新增資料 */
    doMethodsdt(dtModel) {
      this.$validator.validateAll()
        .then(() => {
          if (this.OrderdtAdd) { // 新增
            this.GetOrderDtList.push(dtModel)
          } else { // 不是新增則要取代此筆資料
            this.GetOrderDtList.splice(this.tempIndex, 1, dtModel)
          }
          this.isdtShow = false // 單身編輯視窗不顯示
        }).catch((err) => console.log(err))
    }
  }
}

</script>
<style scoped>
ul {
  list-style-type: none;
}

ul li {
  text-align: left;
}

html hr {
  margin-top: 0;
  margin-bottom: 0px;
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

</style>
