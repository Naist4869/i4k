<template>
    <div id="user">
    <el-row>
                <div style="display: inline-block" class="user">
                    <el-avatar  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              
        <span id="username">啊啊啊啊</span>
        <a id="sendMessage" href="#"><i class="el-icon-message"></i>发信息</a>

                   
          </div>
        </el-row>
       <div class="userinfo">
       <div class="ppp">
        <p>啊啊啊爱上了的机会拉萨角动量喀什角动量喀什利空打击阿斯顿撒打算大三大四的爱上大三大四的</p></div>
           <el-button type="primary">充电</el-button>
                <el-button type="success" ><i class="el-icon-plus"></i>关注</el-button>
        </div>

    </div>
</template>

<script>
    export default {
        name : "User",
    }

</script>
<style>
    #user{
        margin: 0 auto;
       margin-top: 20px;
        margin-bottom: 20px;
    }
    #username{
        margin-left: 20px;
        font-size: 16px;
        /* position: absolute ; */
        top: 30%;

    }
    #sendMessage{
       
       
       margin:0 20px; 
        font-size: 14px;
    }
    .userinfo{
    
        height: 35px;
        text-overflow:hidden;
    }
      .userinfo p{
       width: 100%;
       height: 100%;
     text-overflow:hidden;
    }
    .user{
        position: relative;
    }
    .ppp{
        position: relative;
    }
</style>