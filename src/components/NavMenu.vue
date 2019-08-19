<template>
    <div id="NavMenu">
        <el-menu router
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="/">首页</el-menu-item>
          
            <el-menu-item index="/postvideo">投稿视频</el-menu-item>
          
           
            <el-menu-item index="3" disabled>评论功能</el-menu-item>
            <el-menu-item><a href="https://github.com/Naist4869/i4k" target="_blank">GitHub</a></el-menu-item>
             <el-menu-item index="../../public/pages/2017108445-蓝竞程/index.html">作品</el-menu-item>
            
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
