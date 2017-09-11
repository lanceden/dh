<template>
  <div class="zoomIn animated">
    <!-- <loading v-show="showLoading" /> -->
    <!-- Page content start-->
    <!-- <div class="content-wrapper" v-show="!showLoading"> -->
    <!-- modal 背景遮罩 -->
    <div :class="{modalBack:openModalBack}"></div>
    <div class="content-wrapper">
      <div class="content">
        <div class="box box-primary box-margin-left">
          <div class="box-header">
            <h3>商品管理</h3>
          </div>
          <!-- 商品基本列 -->
          <div class="box box-warning">
            <div class="box-header with-border">
              <h3 class="box-title"><b>商品基本資料列表</b></h3>
            </div>
            <div class="box-body">
              <div class="col-sm-3">
                <button type="button" class="btn btn-danger btn-lg btn-block" style="margin-bottom:20px;" @click="editProd('')">
                  新增商品
                </button>
              </div>
              <div class="col-sm-12">
                <table id="example2" class="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                  <thead>
                    <tr role="row" class="info">
                      <th style="width:200px">功能</th>
                      <th>No</th>
                      <th>商品編號 </th>
                      <th>商品名稱</th>
                      <th>商品描述(標題)</th>
                      <!-- <th>商品內頁內容</th> -->
                      <th>廠商</th>
                      <th>商品單位</th>
                      <th>贈品清單</th>
                      <th>加購品清單</th>
                      <!-- <th>活動起日</th>
                      <th>活動結束日</th> -->
                      <th>商品種類ID</th>
                      <th>分類標籤</th>
                      <th>運費</th>
                      <th>呈現順序</th>
                      <th>狀態</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-for="(item,Index) in ProdList">
                      <tr role="row" class="odd">
                        <td>
                          <button type="button" class="btn bg-purple btn-flat" data-toggle="modal" data-target="#ProdBasic" @click="editProd(item.ProdID)">商品基本資料</button>
                          <button type="button" class="btn  bg-olive btn-flat" @click="editStyle(item.ProdID)">
                            單項產品資料
                          </button>
                          <router-link to="/ImageUpload">
                            <button type="button" class="btn  bg-orange btn-flat" @click="editImg(item.ProdID,item.ProdName,item.DetailImgID,'1')">商品圖片上傳</button>
                          </router-link>
                          <router-link to="/ImageUpload">
                            <button type="button" class="btn bg-primary btn-flat" @click="editImg(item.ProdID,item.ProdName,item.DetailImgID,'4')">商品頁輪播圖
                            </button>
                          </router-link>
                          <button type="button" class="btn bg-maroon btn-flat" @click="editProdContent(item.ProdID,item.DetailContent,item.DetailContentDown,item.ProdName,item.DetailImgID)">
                            商品頁內容
                          </button>
                        </td>
                        <td>{{Index}}</td>
                        <td>{{item.ProdID }}</td>
                        <td>{{item.ProdName}}</td>
                        <td>{{item.Description}}</td>
                        <!-- <td>
                          {{item.DetailContent}}
                        </td> -->
                        <td>{{item.Manufacturer}}</td>
                        <td>{{item.Unit}}</td>
                        <td>{{item.GiftMenu}}</td>
                        <td>{{item.AddMenu}}</td>
                        <!-- <td>{{item.ActivStart}}</td>
                        <td>{{item.ActivEnd}}</td> -->
                        <td>{{item.CategoryID}}</td>
                        <td>{{item.Label}}</td>
                        <td>{{item.ShippingFee}}</td>
                        <td>{{item.DisplayOrder}}</td>
                        <td>{{item.Status | disableStatus}}</td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- 商品基本資料修改 -->
          <template v-if="openProdEdit">
            <div class="box box-info" :class="{myModal:openProdEdit}">
              <div class="box-header with-border ">
                <h3 class="box-title" v-if="ProdDetail.ProdID!=''"><b>商品基本資料(修改)</b></h3>
                <h3 class="box-title" v-else><b>商品基本資料(新增)</b></h3>
              </div>
              <div class="box-body">
                <div class="box-group">
                  <form class="form-horizontal " role="form">
                    <!-- 商品資料 -->
                    <div class="col-xs-4 col-md-4">
                      <div class="box-body">
                        <div class="form-group ">
                          <label>商品編號(系統自動帶出)</label>
                          <input type="text" class="form-control" placeholder="" v-model="ProdDetail.ProdID" disabled>
                        </div>
                        <div class="form-group">
                          <label>商品名稱</label>
                          <input type="text" class="form-control" placeholder="歐巴地板" v-model="ProdDetail.ProdName">
                        </div>
                        <div class="form-group">
                          <label>商品描述</label>
                          <input type="text" class="form-control" placeholder="歐巴地板改造你的家" v-model="ProdDetail.Description">
                        </div>
                        <div class="form-group">
                          <label>廠商</label>
                          <input type="text" class="form-control" placeholder="鴻佳" v-model="ProdDetail.Manufacturer">
                        </div>
                        <div class="form-group">
                          <label>商品單位</label>
                          <input type="text" class="form-control" placeholder="箱" v-model="ProdDetail.Unit">
                        </div>
                        <div class="form-group">
                          <label>商品種類</label>
                          <input type="text" class="form-control" placeholder="地板" v-model="ProdDetail.CategoryID">
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-4 col-md-4">
                      <div class="box-body">
                        <div class="form-group">
                          <label>運費</label>
                          <input type="text" class="form-control" placeholder="250" v-model="ProdDetail.ShippingFee">
                        </div>
                        <div class="form-group">
                          <label>贈品清單</label>
                          <input type="text" class="form-control" placeholder="" v-model="ProdDetail.GiftMenu">
                        </div>
                        <div class="form-group">
                          <label>加購品清單</label>
                          <input type="text" class="form-control" placeholder="" v-model="ProdDetail.AddMenu">
                        </div>
                        <div class="form-group">
                          <label>分類標籤</label>
                          <input type="text" class="form-control" placeholder="地板" v-model="ProdDetail.Label">
                        </div>
                        <div class="form-group">
                          <label>呈現順序</label>
                          <input type="text" class="form-control" placeholder="1" v-model="ProdDetail.DisplayOrder">
                        </div>
                        <div class="form-group">
                          <label>啟動狀態</label>
                          <select class="form-control" v-model="ProdDetail.Status">
                            <option value="0">是</option>
                            <option value="1">否</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>
                  <!-- /.box-body -->
                </div>
              </div>
              <div class="box-footer">
                <div class="col-md-4 col-md-offset-2">
                  <button type="button" class="btn btn-warning btn-lg btn-block" @click="closeModal('ProdEdit')">取消</button>
                </div>
                <div class="col-md-4">
                  <button type="button" class="btn btn-success btn-lg btn-block" @click="submit_editProd">送出</button>
                </div>
              </div>
            </div>
          </template>
          <!-- 商品樣式列 -->
          <template v-if="openStyleEdit">
            <div :class="{myModal:openStyleEdit}">
              <div class="box box-info">
                <div class="box-header with-border">
                  <h3 class="box-title"><b>商品樣式列表</b></h3>
                </div>
                <div class="box-body">
                  <div class="col-sm-3">
                    <button type="button" class="btn btn-danger btn-lg btn-block" style="margin-bottom:20px;" @click="editDetailStytle('')">新增商品樣式
                    </button>
                  </div>
                  <div class="col-sm-12">
                    <table id="example2" class="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                      <thead>
                        <tr role="row" class="info">
                          <th>功能</th>
                          <th>No</th>
                          <th>樣式編號 </th>
                          <th>商品ID</th>
                          <th>樣式名稱</th>
                          <th>產品規格</th>
                          <th>原價</th>
                          <th>一般售價</th>
                          <th>預購價</th>
                          <th>加購價</th>
                          <th>贈品價</th>
                          <th>可賣數量</th>
                          <th>可預購數量1</th>
                          <th>可預購數量2</th>
                          <th>可加購數量</th>
                          <th>可贈品數量</th>
                          <th>呈現順序</th>
                          <th>數量狀態</th>
                        </tr>
                      </thead>
                      <tbody>
                        <template v-for="(item,Index) in StyleList">
                          <tr role="row" class="odd" style="background:#ffffff">
                            <td>
                              <button type="button" class="btn bg-purple btn-flat" @click="editDetailStytle(item.ItemNo)">基本修改</button>
                              <router-link to="/ImageUpload">
                                <button type="button" class="btn bg-orange btn-flat" @click="editImg(item.ProdID,item.ItemName,item.ItemImgID,'2')">圖片修改
                                </button>
                              </router-link>
                            </td>
                            <td>{{Index}}</td>
                            <td>{{item.ItemNo }}</td>
                            <td>{{item.ProdID }}</td>
                            <td>{{item.ItemName }}</td>
                            <td>{{item.ItemSpec }}</td>
                            <td>{{item.OrignPrice }}</td>
                            <td>{{item.SalePrice }}</td>
                            <td>{{item.PreOrderPrice }}</td>
                            <td>{{item.AddPrice }}</td>
                            <td>{{item.GiftPrice }}</td>
                            <td>{{item.InventoryVal }}</td>
                            <td>{{item.F_PreVal }}</td>
                            <td>{{item.S_PreVal }}</td>
                            <td>{{item.AddVal }}</td>
                            <td>{{item.GiftVal }}</td>
                            <td>{{item.ItemDisplayOrder}}</td>
                            <td>{{item.ItemStatus |ItemStatus}}</td>
                          </tr>
                        </template>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="box-footer">
                  <div class="col-md-4 col-md-offset-4">
                    <button type="button" class="btn btn-warning btn-lg btn-block" @click="closeModal('StyleEdit')">取消</button>
                  </div>
                  <!-- <div class="col-md-4">
                    <button type="button" class="btn btn-success btn-lg btn-block">送出</button>
                  </div> -->
                </div>
              </div>
              <!-- 商品樣式資料 -->
              <div class="box box-success " id="styleDetail">
                <div class="box-header with-border">
                  <h3 class="box-title" v-if="ProdStyle.ItemNo !== ''"><b>商品樣式資料(修改)</b></h3>
                  <h3 class="box-title" v-else><b>商品樣式資料(新增)</b></h3>
                </div>
                <div class="box-body">
                  <div class="box-group">
                    <form class="form-horizontal" role="form">
                      <!-- 樣式資料 -->
                      <div class="col-xs-4 col-md-4">
                        <div class="box-body">
                          <div class="form-group">
                            <label>樣式序號(必須為唯一值，不可重複)</label>
                            <input type="text" class="form-control" placeholder="" v-model="ProdStyle.ItemNo">
                          </div>
                          <div class="form-group">
                            <!-- 商品ID -->
                            <label>連結主商品</label>
                            <input type="text" class="form-control" placeholder="" v-model="ProdStyle.ProdID">
                          </div>
                          <div class="form-group">
                            <label>樣式名稱</label>
                            <input type="text" class="form-control" placeholder="極簡灰橡" v-model="ProdStyle.ItemName">
                          </div>
                          <div class="form-group">
                            <label>樣式規格</label>
                            <input type="text" class="form-control" placeholder="95*18.4*5mm" v-model="ProdStyle.ItemSpec">
                          </div>
                          <div class="form-group">
                            <label>原價</label>
                            <input type="text" class="form-control" placeholder="4190" v-model="ProdStyle.OrignPrice">
                          </div>
                          <div class="form-group">
                            <label>一般售價</label>
                            <input type="text" class="form-control" placeholder="2090" v-model="ProdStyle.SalePrice">
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-4 col-md-4">
                        <div class="box-body">
                          <div class="form-group">
                            <label>預購價</label>
                            <input type="text" class="form-control" placeholder="2000" v-model="ProdStyle.PreOrderPrice">
                          </div>
                          <div class="form-group">
                            <label>加購價</label>
                            <input type="text" class="form-control" placeholder="2000" v-model="ProdStyle.AddPrice">
                          </div>
                          <div class="form-group">
                            <label>贈品價</label>
                            <input type="text" class="form-control" placeholder="0" v-model="ProdStyle.GiftPrice">
                          </div>
                          <div class="form-group">
                            <label>可販賣數量</label>
                            <input type="text" class="form-control" placeholder="200" v-model="ProdStyle.InventoryVal">
                          </div>
                          <div class="form-group">
                            <label>可預購數量(1)</label>
                            <input type="text" class="form-control" placeholder="100" v-model="ProdStyle.F_PreVal">
                          </div>
                          <div class="form-group">
                            <label>可預購數量(2)</label>
                            <input type="text" class="form-control" placeholder="100" v-model="ProdStyle.S_PreVal">
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-4 col-md-4">
                        <div class="box-body">
                          <div class="form-group">
                            <label>可加購數量</label>
                            <input type="text" class="form-control" placeholder="50" v-model="ProdStyle.AddVal">
                          </div>
                          <div class="form-group">
                            <label>可贈品數量</label>
                            <input type="text" class="form-control" placeholder="10" v-model="ProdStyle.GiftVal">
                          </div>
                          <div class="form-group">
                            <label>呈現順序</label>
                            <input type="text" class="form-control" placeholder="1" v-model="ProdStyle.ItemDisplayOrder">
                          </div>
                          <div class="form-group">
                            <label>啟用狀態</label>
                            <select class="form-control" v-model="ProdStyle.ItemStatus">
                              <option value="1">正常販售</option>
                              <option value="2">預購中(1)</option>
                              <option value="3">預購中(2)</option>
                              <option value="4">完售</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="box-footer">
                  <div class="col-md-4 col-md-offset-2">
                    <button type="button" class="btn btn-warning btn-lg btn-block" @click="closeModal('StyleEdit_Detail')">取消</button>
                  </div>
                  <div class="col-md-4">
                    <button type="button" class="btn btn-success btn-lg btn-block" @click="submit_editStyle">送出</button>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <!-- 商品內容顯示頁編輯 -->
          <template v-if="openProdContent">
            <div :class="{myModal:openProdContent}">
              <div class="row">
                <!-- 圖片引入 -->
                <div class="col-sm-5 scrollPic">
                  <ImageUpload :globalbox='false'></ImageUpload>
                </div>
                <div class="col-sm-7">
                  <div class="box-header with-border">
                    <h3 class="box-title"><b>商品頁編輯</b></h3>
                  </div>
                  <div class="box-body">
                    <div class="col-md-2">
                      <button type="button" class="btn btn-lg bg-purple btn-flat" @click="showContent2 = !showContent2">
                        {{showContent2?'到編輯頁(上半)':'到編輯頁(下半)'}}
                      </button>
                    </div>
                    <template v-if="!showContent2">
                      <!-- 切換html內容 -->
                      <div class="col-md-2 col-md-offset-6">
                        <button type="button" class="btn btn-lg btn-info" @click="showPreview = !showPreview">
                          {{showPreview?'編輯HTML(上半)': '預覽畫面(上半)'}}
                        </button>
                      </div>
                      <!-- 預覽畫面_上 -->
                      <div class="col-md-12" v-if="showPreview">
                        <h3><b>預覽畫面(上半)</b></h3>
                        <div v-html="content"></div>
                      </div>
                      <!-- HTML 編輯 -->
                      <div class="col-md-12 overView" v-else>
                        <h3><b>編輯HTML(上半)</b></h3>
                        <textarea class="txtArea" v-model="content"></textarea>
                      </div>
                    </template>
                    <template v-else>
                      <div class="col-md-2 col-md-offset-6">
                        <button type="button" class="btn btn-lg btn-info" @click="showPreviewDown = !showPreviewDown">
                          {{showPreviewDown?'編輯HTML(下半)':'預覽畫面(下半)'}}
                        </button>
                      </div>
                      <!-- 預覽畫面_下 -->
                      <div class="col-md-12" v-if="showPreviewDown">
                        <h3><b>預覽畫面(下)</b></h3>
                        <div v-html="contentDown"></div>
                      </div>
                      <!-- HTML 編輯 -->
                      <div class="col-md-12 overView" v-else>
                        <h3><b>編輯HTML(下半)</b></h3>
                        <textarea class="txtArea" v-model="contentDown"></textarea>
                      </div>
                    </template>
                    <!-- quill編輯器 -->
                    <!-- <div class="col-md-12" >
                    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption">
                    </quill-editor>
                  </div> -->
                  </div>
                  <div class="box-footer">
                    <div class="col-md-4 col-md-offset-2">
                      <button type="button" class="btn btn-warning btn-lg btn-block" @click="closeModal('ProdContent')">取消</button>
                    </div>
                    <div class="col-md-4">
                      <button type="button" class="btn btn-success btn-lg btn-block" @click="submit_editContent">送出</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let _prodDetail = {
  'ProdID': '',
  'Description': '',
  'ProdName': '',
  'Manufacturer': '',
  'Unit': '',
  'GiftMenu': '',
  'AddMenu': '',
  'CategoryID': '',
  'Label': '',
  'DisplayOrder': '',
  'Status': '1',
  'ShippingFee': ''
}
let _styleDetail = {
  'ItemNo': '',
  'ProdID': '',
  'ItemImgID': '',
  'ItemName': '',
  'ItemSpec': '',
  'OrignPrice': '',
  'SalePrice': '',
  'PreOrderPrice': '',
  'AddPrice': '',
  'GiftPrice': '',
  'InventoryVal': '',
  'F_PreVal': '',
  'S_PreVal': '',
  'AddVal': '',
  'GiftVal': '',
  'ItemDisplayOrder': '',
  'ItemStatus': '1'
}
import {
  noty
} from '../assets/commons'
import ImageUpload from './extension/ImageUpload'
// import {
//   quillEditor
// } from 'vue-quill-editor'
// import {
//   ImageResize
// } from '../components/extension/ImageResize'
// import Quill from 'quill'
// Quill.register('modules/imageResize', ImageResize)
export default {
  // components: {
  //   quillEditor
  // },
  data() {
    return {
      // 編輯器內容
      content: '',
      contentDown: '',
      // 編輯器選項
      // editorOption: {
      //   modules: {
      //     toolbar: {
      //       container: [
      //         ['bold', 'italic', 'underline', 'direction'],
      //         ['blockquote', 'formula'],
      //         [{
      //           'list': 'ordered'
      //         }, {
      //           'list': 'bullet'
      //         }],
      //         [{
      //           'color': []
      //         }, {
      //           'background': []
      //         }],
      //         [{
      //           'header': []
      //         }, {
      //           'size': []
      //         }],
      //         [{
      //           'font': []
      //         }, {
      //           'align': []
      //         }],
      //         ['link', 'image', 'video']
      //       ],
      //       handlers: {
      //         'image': this.imageHandler
      //       }
      //     },
      //     imageResize: {
      //       displaySize: true
      //     }
      //   }
      // },
      currentID: '',
      //  顯示預覽
      showContent2: false,
      showPreview: false,
      showPreviewDown: false,
      // 商品List,
      ProdList: [],
      // 樣式List
      StyleList: [],
      // 商品基本資料
      ProdDetail: _prodDetail,
      // 商品樣式資料
      ProdStyle: _styleDetail,
      imgDetail: {
        dropdownData: [],
        // 當前項目名稱
        itemname: '',
        // 當前修改imgid
        imgid: '',
        // type:1:商品主圖 2:商品樣式(正常) 3:文章
        type: ''
      },
      openModalBack: false,
      openModalBack_Second: false,
      openProdEdit: false,
      openStyleEdit: false,
      openProdContent: false
    }
  },
  components: {
    ImageUpload
  },
  created() {
    this.GetProdList()
  },
  methods: {
    // imageHandler() {
    //   var range = this.$refs.myQuillEditor.quill.getSelection()
    //   var value = prompt('請輸入圖片網址')
    //   this.$refs.myQuillEditor.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER)
    // },
    // 關閉 Modal
    closeModal(id) {
      this.openModalBack = false
      switch (id) {
        //
        case 'ProdEdit':
          this.openProdEdit = false
          this.ProdDetail = _prodDetail
          break
        case 'ProdContent':
          this.openProdContent = false
          this.content = ''
          break
        case 'StyleEdit':
          this.openStyleEdit = false
          this.ProdStyle = _styleDetail
          break
        case 'StyleEdit_Detail':
          this.openStyleEdit_Detail = false
          this.ProdStyle = _styleDetail
          break
      }
      window.scrollTo(0, 0)
    },
    // 修改商品基本資料
    editProd(prodID) {
      // 修改
      if (prodID !== '') {
        // deep copy
        let detail = JSON.parse(JSON.stringify(this.ProdList))
        console.log(detail)
        this.ProdDetail = detail.find(x => x.ProdID === prodID)
      }
      // open Modal
      this.openModalBack = true
      this.openProdEdit = true
      window.scrollTo(0, 0)
    },
    // 修改商品內容
    editProdContent(prodID, prodContent, prodContentDown, itemName, imgid) {
      this.currentID = prodID
      this.content = prodContent
      this.contentDown = prodContentDown
      // open Modal
      this.openModalBack = true
      this.openProdContent = true
      // GetImage
      this.editImg(prodID, itemName, imgid, '1')
    },
    // 修改圖片
    editImg(prodID, itemName, imgid, type) {
      // 輪播圖_上半，依樣式顯示，要先抓樣式呈現下拉選單
      if (type === '4') {
        console.log(type)
        this.GetStyleList(prodID)
        this.imgDetail.prodID = prodID
      }
      this.imgDetail.itemname = itemName
      this.imgDetail.imgid = imgid
      this.imgDetail.type = type
      window.Lockr.set('imgDetail', this.imgDetail)
    },
    // 修改樣式按鈕
    editStyle(prodID) {
      this.GetStyleList(prodID)
      this.openModalBack = true
      this.openStyleEdit = true
      window.scrollTo(0, 0)
    },
    // 修改樣式基本資料
    editDetailStytle(itemNo) {
      // 新增
      if (itemNo === '') {

      } else {
        let Styledetail = JSON.parse(JSON.stringify(this.StyleList))
        console.log(Styledetail)
        this.ProdStyle = Styledetail.find(x => x.ItemNo === itemNo)
      }
      var anchor = this.$el.querySelector('#styleDetail')
      console.log(anchor)
      window.scrollTo(100, anchor.scrollHeight + 500)
    },
    // 送出商品基本資料修改
    submit_editProd() {
      this.$http({
        method: 'post',
        url: `/api/Product/PostProdMain`,
        data: this.ProdDetail
      }).then((res) => {
        // 新增商品
        if (res.data.statu === 'ok') {
          noty.TopRightShow(res.data.msg)
          // 取得更新後商品列
          this.GetProdList()
          this.closeModal('ProdEdit')
        } else {
          noty.TopRightShow(res.data.msg)
        }
      })
    },
    // 送出商品內容頁修改
    submit_editContent() {
      this.$http({
        method: 'post',
        url: `/api/Product/PostProdContent`,
        data: {
          ProdID: this.currentID,
          DetailContent: this.content,
          DetailContentDown: this.contentDown
        }
      }).then((res) => {
        // 新增商品
        if (res.data.statu === 'ok') {
          noty.TopRightShow(res.data.msg)
          this.closeModal('ProdContent')
        } else {
          noty.TopRightShow(res.data.msg)
        }
      })
    },
    // 送出商品樣式修改
    submit_editStyle() {
      this.$http({
        method: 'post',
        url: `/api/Product/PostProdStyle`,
        data: this.ProdStyle
      }).then((res) => {
        // 新增商品
        if (res.data.statu === 'ok') {
          noty.TopRightShow(res.data.msg)
          // 取得更新後商品樣式列
          this.GetStyleList(this.ProdStyle.ProdID)
          this.closeModal('StyleEdit_Detail')
        } else {
          noty.TopRightShow(res.data.msg)
        }
      })
    },
    // 取得商品列表
    GetProdList() {
      this.$http({
        method: 'get',
        url: `/api/Product/GetProductList`
      }).then((res) => {
        if (res.data.statu === 'err') {
          noty.TopRightShow(res.data.msg)
        }
        this.ProdList = res.data.data
      }).catch((res) => {
        console.log(res)
      })
    },
    // 取得樣式列表
    GetStyleList(prodID) {
      this.$http({
        method: 'get',
        url: `/api/Product/GetStylList?ProdID=${prodID}`
      }).then((res) => {
        if (res.data.statu === 'err') {
          noty.TopRightShow(res.data.msg)
        }
        this.StyleList = res.data.data
      }).catch((res) => {
        console.log(res)
      })
    }
  }
}

</script>
<style scoped>
.modalBack {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 800;
  background-color: #000;
  opacity: .5
}

.myModal {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 810;
  background-color: #fff;
}

.btn {
  margin: 1px;
}

.form-control {
  color: #e01717;
  font-size: 18px;
}

.overView {
  border: 1px solid #ccc !important;
}

.txtArea {
  width: 100%;
  height: 1000px;
}

.scrollPic {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 1100px;
}

</style>
