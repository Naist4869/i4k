<template>
  <div id="user">
    <el-row>
      <div class="user">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>

        <span id="username">啊啊啊啊</span>
        <a id="sendMessage" href="#">
          <i class="el-icon-message"></i>发信息
        </a>
      </div>
    </el-row>
    <div class="userinfo">
     
        <p>啊啊啊爱上了的机会拉萨角动量喀什角动量喀什利空打击阿斯顿撒打算大三大四的爱aaaa上阿阿阿阿阿的</p>
   
      <div class="focus">
        <el-button type="primary">充电</el-button>
        <el-button type="success">
          <i class="el-icon-plus"></i>关注
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User"
};
</script>
<style>
#user {
    display: block;
    max-width: 400px;
     max-height: 150px;
  margin: 20px auto;
  position: relative;
}
#username {
    margin: 0 20px;
  font-size: 16px;
  vertical-align:baseline;
  
    
}
#sendMessage {
  margin: 0 20px;
  font-size: 14px;
}
.userinfo p {
text-overflow: ellipsis;
position: relative;
}


.focus {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}
.focus button {
  margin: 0px 30px;
}
</style>