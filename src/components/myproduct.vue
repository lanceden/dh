<template>
  <div class="zoomIn animated">
    <!-- <loading v-show="showLoading" /> -->
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!showLoading">
      <div class="content">
        <div class="box box-primary box-margin-left">
          <div class="box-header">
            <h3>商品管理</h3>
          </div>
          <!-- 商品基本列 -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title"><b>商品基本資料列表</b></h3>
            </div>
            <div class="box-body">
            </div>
          </div>
          <!-- 商品基本資料修改 -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title"><b>商品基本資料修改</b></h3>
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
                          <option value="1">是</option>
                          <option value="0">否</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- /.box-body -->
                <div class="col-xs-4 col-md-4">
                  <div class="box-body">
                    <label>商品內頁圖片上傳</label>
                    <div style="background:#337ab7;color:#f4f4f4">檔名</div>
                    <ul>
                      <template v-if="Imgfile.length === 1">
                        <li>{{Imgfile.name}}</li>
                      </template>
                      <template v-else>
                        <li v-for="item in Imgfile">{{item.name}}</li>
                      </template>
                    </ul>
                    <div class="form-group">
                      <vue-core-image-upload class="btn btn-info btn-block" text="上傳圖片" :crop="false" @imagechanged="imagechanged" :max-file-size="5242880" :isXhr="false" :multiple="true">
                        <!-- url="/api/Product/PostProdMain" -->
                      </vue-core-image-upload>
                      <br>
                      <ul>
                        <li>檔案大小不超過2MB</li>
                        <li>檔名勿過長15個字</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-footer">
              <div class="col-md-4 col-md-offset-4">
                <button type="button" class="btn btn-success btn-lg btn-block" @click="postImage">送出</button>
              </div>
            </div>
          </div>
          <!-- 商品樣式列 -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title"><b>商品樣式列表</b></h3>
            </div>
            <div class="box-body">
            </div>
          </div>
          <!-- 商品樣式資料 -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title"><b>商品樣式資料</b></h3>
            </div>
            <div class="box-body">
              <div class="box-group">
                <form class="form-horizontal" role="form">
                  <!-- 商品資料 -->
                  <div class="col-xs-4 col-md-4">
                    <div class="box-body">
                      <div class="form-group">
                        <label>樣式序號(系統自動帶出)</label>
                        <input type="text" class="form-control" placeholder="" v-model="ProdStyle.ItemNo" disabled>
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
              <div class="col-md-4 col-md-offset-4">
                <button type="button" class="btn btn-success btn-lg btn-block" @click="postImage">送出</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueCoreImageUpload from 'vue-core-image-upload'
import {
  noty
} from '../assets/commons'
export default {
  components: {
    VueCoreImageUpload
  },
  data() {
    return {
      // 商品基本資料
      ProdDetail: {
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
      },
      // 商品樣式資料
      ProdStyle: {
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
      },
      Imgfile: [],
      imageId: ''
    }
  },
  methods: {
    imagechanged(res) {
      console.log(res)
      this.Imgfile = res
    },
    submit() {
      this.$http({
        method: 'post',
        url: `/api/Product/PostProdMain`,
        data: this.ProdDetail
      }).then((res) => {
        if (res.data.statu === 'ok') {
          this.imageId = res.data.data
          noty.TopRightShow(res.data.msg)
          // 上傳圖片
          if (this.imageId !== '') {
            this.postImage()
          }
        } else {
          noty.TopRightShow(res.data.msg)
        }
      })
    },
    postImage() {
      // 檔案上傳
      let formdata = new FormData()
      formdata.append('ProductName', this.ProdDetail.ProdName)
      formdata.append('imageId', this.imageId)
      Array.from(this.Imgfile).forEach((item) => {
        formdata.append(item.name, item)
      }, this)
      // 檔案post
      this.$http({
        method: 'post',
        url: `/api/Product/PostProdMainImage`,
        data: formdata,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        noty.TopRightShow(res.data.msg)
      })
    }
  }
}

</script>
<style>


</style>
