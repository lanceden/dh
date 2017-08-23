<!-- 圖片修改 -->
<template>
  <div class="content-wrapper">
    <div class="box">
      <div class="">
        <h3 class=""><b>{{imgDetail.itemname}}-圖片列表</b></h3>
      </div>
      <div class="box-body">
        <div class="col-sm-12">
          <template v-if="ImageList.length>0">
            <table id="example2" class="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
              <thead>
                <tr role="row" class="info">
                  <th>功能</th>
                  <th>No</th>
                  <th>圖片ID</th>
                  <th>商品/樣式名稱</th>
                  <th>圖片名稱</th>
                  <th>圖片網址</th>
                  <th>種類</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="item in ImageList">
                  <tr role="row" class="odd" style="background:#ffffff">
                    <td>
                      <button type="button" class="btn bg-purple btn-flat" @click="deleteImage(item.No, item.ImgUrl )">圖片刪除</button>
                    </td>
                    <td>{{item.No}}</td>
                    <td>{{item.ImgID}}</td>
                    <td>{{item.ItemName}}</td>
                    <td>{{item.ImgName}}</td>
                    <td>http://223.27.48.157:8080/{{item.ImgUrl}}</td>
                    <td>{{item.ImgType |ImageType}}</td>
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
        <div class="">
          <h3 class="box-title"><b>{{imgDetail.itemname}}-圖片上傳</b></h3>
        </div>
        <div class="col-sm-4 col-sm-offset-4">
          <div class="box-body">
            <label圖片上傳</label>
              <div style="background:#337ab7;color:#f4f4f4">檔名</div>
              <ul>
                <template v-if="Imgfile.length>0">
                  <li v-for="item in Imgfile">{{item.name}}</li>
                </template>
                <template v-else>
                  <li>{{Imgfile.name}}</li>
                </template>
              </ul>
              <div class="form-group">
                <vue-core-image-upload class="btn btn-info btn-block" text="選擇圖片" :crop="false" @imagechanged="imagechanged" :max-file-size="5242880" :isXhr="false" :multiple="true">
                  <!-- url="/api/Product/PostProdMain" -->
                </vue-core-image-upload>
                <br>
                <ul>
                  <li>一次上傳勿超過5張</li>
                  <li>檔案大小不超過2MB</li>
                  <li>檔名勿過長15個字</li>
                </ul>
              </div>
          </div>
        </div>
        <div class="col-sm-4 col-sm-offset-4">
          <button type="button" class="btn btn-warning btn-lg btn-block" @click="postImage">確認送出</button>
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
      // 上傳圖片
      Imgfile: [],
      imgDetail: {}
    }
  },
  created() {
    this.imgDetail = window.Lockr.get('imgDetail')
    console.log(this.imgDetail)
    this.GetImageList(this.imgDetail.imgid)
  },
  methods: {
    imagechanged(res) {
      console.log(res)
      this.Imgfile = res
    },
    // type:1:商品主圖 2:商品樣式(正常) 3:文章
    postImage(type) {
      // 檔案上傳
      let formdata = new FormData()
      formdata.append('ItemName', this.imgDetail.itemname)
      formdata.append('imageId', this.imgDetail.imgid)
      formdata.append('type', this.imgDetail.type)
      Array.from(this.Imgfile).forEach((item) => {
        formdata.append(item.name, item)
      }, this)
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
    }
  }
}

</script>
