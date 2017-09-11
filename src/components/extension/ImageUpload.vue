<!-- 圖片修改 -->
<template>
  <div :class="[{'content-wrapper': globalbox},{'imageUpload': !globalbox}]">
    <div class="box">
      <div class="">
        <h3 class=""><b>{{imgDetail.itemname}}-圖片列表</b></h3>
      </div>
      <div class="box-body">
        <!-- 圖片列表 -->
        <div :class="[{'col-md-8': globalbox},{'scrollPic':globalbox}]">
          <template v-if="ShowImageList.length>0">
            <!-- 分類篩選 -->
            <div v-show="this.imgDetail.type==='4'">
              <label>單項商品種類篩選:</label>
              <select class="form-control option" v-model="DistrStyle">
                <option value=''>全部</option>
                <template v-for="item in StyleList">
                  <option :value='item.ItemNo' @change="DistrSelected(item.ItemNo)">{{item.ItemName}}</option>
                </template>
              </select>
            </div>
            <br>
            <table id="example2" class="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
              <thead>
                <tr role="row" class="info">
                  <th class="col-md-4">功能</th>
                  <th class="col-md-6">縮圖</th>
                  <!-- <th>No</th> -->
                  <!--<th>圖片ID</th> -->
                  <!-- <th>圖片網址</th> -->
                </tr>
              </thead>
              <tbody>
                <template v-for="item in ShowImageList">
                  <tr role="row" class="odd" style="background:#ffffff">
                    <td col>
                      <table class="table table-bordered">
                        <tr class="innerth">
                          <th>商品/樣式名稱:</th>
                        </tr>
                        <tr>
                          <td class="innertd">{{item.ItemName}}</td>
                        </tr>
                        <tr class="innerth">
                          <th>圖片名稱:</th>
                        </tr>
                        <tr>
                          <td class="innertd">{{item.ImgName}}</td>
                        </tr>
                        <tr class="innerth">
                          <th>圖片種類:</th>
                        </tr>
                        <tr>
                          <td class="innertd">{{item.ImgType |ImageType}}</td>
                        </tr>
                        <tr class="innerth">
                          <th>單項商品種類:</th>
                        </tr>
                        <tr>
                          <td class="innertd">{{getSubGroupName(item.ItemSubGroup)}}</td>
                        </tr>
                      </table>
                      <div>
                        <button type="button" class="btn btn-lg bg-purple btn-flat" @click="deleteImage(item.No, item.ImgUrl )">圖片刪除</button>
                      </div>
                      <br>
                      <!-- <div>
                        <button type="button" class="btn btn-lg bg-orange btn-flat" @click="CopyUrl(item.ImgUrl )">複製圖片網址</button>
                      </div> -->
                    </td>
                    <td>
                      <div>
                        <label>圖片網址:</label>
                        <a :href="imgWithLoacl(item.ImgUrl)" target="_blank">{{imgWithLoacl(item.ImgUrl)}}</a>
                      </div>
                      <br>
                      <img :src="imgWithLoacl(item.ImgUrl)" class="PreviewPic">
                    </td>
                    <!-- <td>{{item.No}}</td>
                    <td>{{item.ImgID}}</td> -->
                    <!-- <td>http://223.27.48.157/{{item.ImgUrl}}</td> -->
                  </tr>
                </template>
              </tbody>
            </table>
          </template>
          <template v-else>
            <h3>尚未上傳圖片，請先上傳</h3>
          </template>
        </div>
        <!-- 圖片上傳 -->
        <div :class="{'col-md-4': globalbox}">
          <div class="">
            <h3 class="box-title"><b>{{imgDetail.itemname}}-圖片上傳</b></h3>
          </div>
          <!-- 選擇圖片類型 -->
          <div>
            <label>選擇上傳圖片類型:</label>
            <select class="form-control option" v-model="imgDetail.type">
              <template v-for="item in imageType">
                <option :value='item.value'>{{item.type}}</option>
              </template>
            </select>
          </div>
          <br>
          <!-- 輪播圖單項商品種類 -->
          <div v-show="this.imgDetail.type==='4'">
            <label>輪播圖上半部需選擇單項商品種類，
              <br>不同種類圖片請分開上傳:</label>
            <select class="form-control option" v-model="SelectedStyle">
              <option value=''>請選擇上傳單項商品種類</option>
              <template v-for="item in StyleList">
                <option :value='item.ItemNo'>{{item.ItemName}}</option>
              </template>
            </select>
          </div>
          <div class="">
            <div class="box-body">
              <label圖片上傳</label>
                <div style="background:#337ab7;color:#f4f4f4" :class="{'form-group': globalbox}">檔名</div>
                <ul>
                  <template v-if="Imgfile.length>0">
                    <li v-for="item in Imgfile">{{item.name}}</li>
                  </template>
                  <template v-else>
                    <li>{{Imgfile.name}}</li>
                  </template>
                </ul>
                <div class="form-group">
                  <vue-core-image-upload class="btn btn-info btn-block" text="選擇圖片" :crop="false" @imagechanged="imagechanged" :max-file-size="5242880" :isXhr="false" :multiple="true" :multiple-size="5">
                    <!-- url="/api/Product/PostProdMain" -->
                  </vue-core-image-upload>
                  <br>
                  <br>
                  <li>一次上傳勿超過5張</li>
                  <li>檔案大小不超過2MB</li>
                  <li>檔名勿過長15個字</li>
                </div>
            </div>
          </div>
          <div class="col-sm-5 col-sm-offset-4">
            <button type="button" class="btn btn-warning btn-lg btn-block" @click="postImage">確認送出</button>
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
} from '../../assets/commons'
export default {
  components: {
    VueCoreImageUpload
  },
  data() {
    return {
      ImageList: [],
      ShowImageList: [],
      // 上傳圖片
      Imgfile: [],
      // 上傳的基本資料
      imgDetail: {},
      // 選擇上傳的樣式(輪播上半部)
      StyleList: [],
      SelectedStyle: '',
      DistrStyle: '',
      imageType: [
        {
          'value': '',
          'type': '請選擇圖片類型'
        },
        {
          'value': '1',
          'type': '商品主圖'
        },
        {
          'value': '2',
          'type': '商品樣式'
        },
        {
          'value': '3',
          'type': '文章圖'
        },
        {
          'value': '4',
          'type': '商品輪播_上半'
        },
        {
          'value': '5',
          'type': '商品輪播_下半'
        }
      ]
    }
  },
  props: {
    // 控制寬度
    globalbox: {
      type: [Boolean],
      required: false,
      'default': true
    }
  },
  created() {
    this.imgDetail = window.Lockr.get('imgDetail')
    console.log(this.imgDetail)
    this.GetImageList(this.imgDetail.imgid)
    // 輪播圖上半_需取出樣式
    if (this.imgDetail.type === '4') {
      this.GetStyleList(this.imgDetail.prodID)
    }
    this.ShowImageList = JSON.parse(JSON.stringify(this.ImageList))
  },
  methods: {
    imgWithLoacl(url) {
      return 'http://223.27.48.157/' + url
    },
    imagechanged(res) {
      console.log(res)
      this.Imgfile = res
    },
    // 單項商品種類篩選
    DistrSelected(itemNo) {
      this.ShowImageList.find(x => x.ItemNo === itemNo)
      console.log(this.ShowImageList)
    },
    // type:1:商品主圖 2:商品樣式(正常) 3:文章 4:商品輪播_上 5:商品輪播_下
    postImage() {
      if (this.imgDetail.type === '4' && this.SelectedStyle === '') {
        noty.TopRightShow('您尚未選擇上傳單項商品種類，請先選擇')
        return false
      } else if (this.imgDetail.type !== '4') {
        this.SelectedStyle === ''
      }
      if (this.imgDetail.type === '') {
        noty.TopRightShow('您尚未選擇上傳圖片類型，請先選擇')
        return false
      }
      if (this.Imgfile.length === 0) {
        noty.TopRightShow('您尚未上傳任何圖片，請先選擇圖片')
        return false
      }
      // 檔案上傳
      let formdata = new FormData()
      // 輪播圖上半需要傳入種類
      formdata.append('ItemSubGroup', this.SelectedStyle)
      formdata.append('ItemName', this.imgDetail.itemname)
      formdata.append('imageId', this.imgDetail.imgid)
      formdata.append('type', this.imgDetail.type)
      console.log(Object.keys(this.Imgfile).length)
      if (Object.keys(this.Imgfile).length < 2) {
        formdata.append(this.Imgfile.name, this.Imgfile)
        console.log(formdata)
      } else {
        Array.from(this.Imgfile).forEach((item) => {
          formdata.append(item.name, item)
        }, this)
      }
      // 檔案post
      this.$http({
        method: 'post',
        url: `/api/Product/PostImage`,
        data: formdata,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        this.GetImageList(this.imgDetail.imgid)
        noty.TopRightShow(res.data.msg)
      })
    },
    // 刪除檔案
    deleteImage(imgNo, imgUrl) {
      // 檔案post
      this.$http({
        method: 'post',
        url: `/api/Product/PostDeleteImage`,
        data: {
          imgNo: imgNo,
          imgUrl: imgUrl
        }
      }).then((res) => {
        this.GetImageList(this.imgDetail.imgid)
        noty.TopRightShow(res.data.msg)
      })
    },
    // CopyUrl(url) {
    //   console.log(url)
    //   // window.clipboardData.setData('00', url)
    //   document.createTextNode('url00000000')
    //   document.execCommand('copy')
    // },
    GetImageList(imageId) {
      this.ImageList = []
      this.$http({
        method: 'get',
        url: `/api/Product/GetImageList?imgID=${imageId}`
      }).then((res) => {
        console.log(res)
        if (res.data.statu === 'err') {
          noty.TopRightShow(res.data.msg)
        } else {
          this.ImageList = res.data.data
        }
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
    },
    getSubGroupName(groupID) {
      if (groupID !== '' && Object.keys(this.StyleList).length > 0) {
        var val = this.StyleList.find(x => x.ItemNo === groupID)
        return typeof (val) === undefined ? '無' : val.ItemName
      } else {
        return '無'
      }
    }
  }
}

</script>
<style scoped>
.imageUpload {
  width: 500px;
}

.innerth {
  background-color: #02b563;
  color: #f5f5f5;
}

.innertd {
  height: 50px;
}


.PreviewPic {
  width: 100%;
  max-height: 50%;
}

.table-bordered>thead>tr>th,
.table-bordered>tbody>tr>th,
.table-bordered>tfoot>tr>th,
.table-bordered>thead>tr>td,
.table-bordered>tbody>tr>td,
.table-bordered>tfoot>tr>td {
  border: 1px solid #777;
}

.scrollPic {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 1100px;
}

.option {
  font-size: 18px;
  font-weight: bold;
  color: red;
  height: 50px;
}

</style>
