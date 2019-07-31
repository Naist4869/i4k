

<template>
    <div id="postvideo">
<el-form ref="form" label-width="80px">
  <el-form-item label="视频标题">
    <el-input v-model="form.title" type="text"  placeholder="请输入内容" maxlength="30" minlength="5" show-word-limit></el-input>
 
  </el-form-item>



  <el-form-item label="视频详情">
    <el-input type="textarea" v-model="form.info"  placeholder="请输入内容" maxlength="80" show-word-limit  ></el-input>
  
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
          info: ''
        },
      };
    },
    methods: {
     
      onSubmit() {
   //  { //  title: this.form.title,
      //  info: this.form.info,  }
     API.postVideo(this.form).then((res) => {
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


    
   
  } // end submit
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
</style>
