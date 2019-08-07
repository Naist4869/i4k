<template>
  <div id="postvideo">
    <h3>欢迎投稿</h3>

    <el-form ref="form" label-width="80px" :model="form">
      <el-form-item label="视频地址">
        <el-upload
          class="upload-demo"
          action
          accept=".mp4"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :before-upload="BeforevideoUpload"
          :http-request="videoUploadRequest"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传MP4文件，且不超过500MB!</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="视频封面">
        <el-upload
          class="poster-uploader"
          action
          :before-upload="fnBeforeUpload"
          :http-request="fnUploadRequest"
          :show-file-list="false"
          accept=".png"
        >
          <img v-if="imageUrl" :src="imageUrl" class="poster" />
          <i v-else class="el-icon-plus poster-uploader-icon"></i>
          <div class="el-upload__tip" slot="tip">只能上传png文件，且不超过2MB!</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="视频标题">
        <el-input
          v-model="form.title"
          type="text"
          placeholder="请输入内容"
          maxlength="80"
          minlength="5"
          show-word-limit
        ></el-input>
      </el-form-item>

      <el-form-item label="视频详情">
        <el-input
          type="textarea"
          v-model="form.info"
          placeholder="请输入内容"
          maxlength="80"
          show-word-limit
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import * as API from "@/api/video/";
import * as UPLOAD from "@/api/upload/";


export default {
  data() {
    return {
      imageUrl: "",
        fileList: [],
      form: {
        title: "",
        info: "",
        poster: "",
        video:""
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    BeforevideoUpload(file) {
      console.log(file.type);
      const isMP4 = file.type === "video/mp4";
      const isLt2M = file.size / 1024 / 1024 < 500;

      if (!isMP4) {
        this.$message.error("上传头像图片只能是 MP4 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 500MB!");
      }
      return isMP4 && isLt2M;
    },
    videoUploadRequest(option) {
      UPLOAD.postUploadVideo(option.file.name)
        .then(res => {
          const oReq = new XMLHttpRequest();
          oReq.open("PUT", res.data.put, true);
          oReq.send(option.file);
          oReq.onload = () => {
            this.fileList.push({name: "上传成功"+option.file.name})
            this.form.video = res.data.key
            console.log(this.fileList)
           
          };
        })
        .catch(error => {
          this.$notify.error({
            title: `网络错误，或者服务器宕机`,
            message: error
          });
        });
    },

    fnBeforeUpload(file) {
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 3;

      if (!isPNG) {
        this.$message.error("上传头像图片只能是 PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 3MB!");
      }
      return isPNG && isLt2M;
    },
    fnUploadRequest(option) {
      UPLOAD.postUploadToken(option.file.name)
        .then(res => {
          const oReq = new XMLHttpRequest();
          oReq.open("PUT", res.data.put, true);
          oReq.send(option.file);
          oReq.onload = () => {
            this.imageUrl = res.data.get;
            this.form.poster = res.data.key;
          };
        })
        .catch(error => {
          this.$notify.error({
            title: `网络错误，或者服务器宕机`,
            message: error
          });
        });
    },
    onSubmit() {
      // title: this.form.title,
      //     info: this.form.info,
      //       url: this.form.url
      API.postVideo(this.form)
        .then(res => {
          if (res.status > 0) {
            this.$notify({
              title: "投稿失败",
              message: res.msg
            });
          } else {
            this.$notify({
              title: "投稿成功",
              message: `您投稿的id为${res.data.id}`
            });
         
           setTimeout( function(){window.open('/video/'+res.data.id, '_blank')},4000)
             
          }
        })
        .catch(error => {
          this.$notify.error({
            title: "网络错误或者服务器宕机",
            message: error
          });
        });
    } // end submit
  } // end method
}; // end export
</script>

<style>
#postvideo {
  margin: 20px 5px;
  width: 50%;
  border: 1px solid gray;
  padding: 20px;
}

.poster-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.poster-uploader .el-upload:hover {
  border-color: #409eff;
}
.poster-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.poster {
  max-width: 178px;
  max-height: 178px;
  display: block;
}
</style>
