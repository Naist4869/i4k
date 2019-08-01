

<template>
    <div id="postvideo">
<h3>欢迎投稿</h3>

<el-form ref="form" label-width="80px">
  <el-form-item label="视频标题">
    <el-input v-model="form.title" type="text"  placeholder="请输入内容" maxlength="30" minlength="5" show-word-limit></el-input>
 
  </el-form-item>



  <el-form-item label="视频详情">
    <el-input type="textarea" v-model="form.info"  placeholder="请输入内容" maxlength="80" show-word-limit  ></el-input>
  
  </el-form-item>
<el-form-item label="视频封面">

<el-upload
  class="avatar-uploader"
  action="i4k-poster.oss-cn-hongkong.aliyuncs.com"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>













 </el-form-item>
  
  <el-form-item label="视频地址">
    <el-input  v-model="form.url"  placeholder="请输入内容"  ></el-input>
  
  </el-form-item>


  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
 
  </el-form-item>
</el-form>


    </div>
</template>
<script>
import * as API from "@/api/video";


  export default {
    data() {
      return {
        
        form: {
          title: '',
          info: '',
          url:'',
           imageUrl: ''
        },
      };
    },
    methods: {
     
      onSubmit() {
    
     API.postVideo( {  title: this.form.title,
        info: this.form.info,  
          url: this.form.url
          }).then((res) => {
     if(res.status > 0 ){
  this.$notify({
          title: '投稿失败',
          message:  res.msg,
        });
               
                
            }
             else{
   this.$notify({
          title: '投稿成功',
          message: `您投稿的id为${res.data.id}`
        });       
    console.log(this.form);

    }

     }).catch((error) => {
        

             
   this.$notify.error({
          title: '网络错误或者服务器宕机',
          message:error
        });
      
    

     })


    
   
  }, // end submit
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  
  
  } // end method
  } // end export


</script>

<style>
 #postvideo{
     margin:20px 5px ;
     width: 50%;
     border: 1px solid gray;
     padding: 20px;
 }
 
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>


