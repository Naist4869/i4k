

<template>
    <div id="NavMenu">
        <el-menu router
                default-active="/"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                
                >
            <el-menu-item index="/">
              <i class="el-icon-s-home"></i>

              <span slot="title">首页</span>
            </el-menu-item>
          
            <el-menu-item index="/postvideo">
             <i class="el-icon-upload"></i>
    <span slot="title">投稿视频</span>
            
            </el-menu-item>
          
           
            <el-menu-item index="3" disabled>
              <i class="el-icon-s-custom"></i>
    <span slot="title">评论功能</span>
              
              </el-menu-item>
          
            
        </el-menu>




    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex2: '/'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style>
    a,
    a:hover,
    a:visited,
    a:focus,
    a:active{
        text-decoration: none;
    }
    .el-menu.el-menu--horizontal{
        border-bottom: 0;
    }
    .el-menu{
        box-shadow: 1px 0 5px black ;
    }

</style>
