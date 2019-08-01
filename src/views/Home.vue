<template>
  <div id="home">
    <el-container>
      <el-header height="200px">
        <el-row>
          <el-col :span="16">
            <h2>我是标题</h2>
            <el-breadcrumb separator-class="el-icon-arrow-right" style="display: inline-block">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path:'/about' }">关于我们</el-breadcrumb-item>
            </el-breadcrumb>
            <span id="time">2019-07-29 19:28</span>
          </el-col>
          <el-col :span="6">
            <user></user>
          </el-col>
          <el-col :span="2"></el-col>
        </el-row>
      </el-header>
    </el-container>
    <el-container class="main">
      <el-main>
        <el-container>
          <el-header>
       
          </el-header>
        </el-container>
      </el-main>
      <el-aside >
        <BulletScreen></BulletScreen>
        <h3>相关视频</h3>
        <ul id="recommend">
          <li v-for="video in videos" :key="video.id">
            <Video :videoindex="video.id">
              <template v-slot:videotitle>
                <h3>{{video.title}}</h3>
              </template>
              <template v-slot:videoinfo>
                <small>{{video.info}}</small>
              </template>
            </Video>
          </li>
        </ul>
      </el-aside>
      <el-col :span="3"></el-col>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import User from "../components/User";
import BulletScreen from "../components/BulletScreen.vue";
import Video from "../components/Video";
import * as API from "@/api/video";

export default {
    data(){
        return{
             videos: [],
        }
    },
  name: "home",
  components: {
    User,
    BulletScreen,
    Video,
    
  },
  methods:{
       load() {
      API.getVideos().then(res => {
        this.videos = res.data;
      });
      console.log(...videos)
    },
  },
  beforeMount() {
    this.load();
  },
};
</script>
<style>
#time {
  margin-left: 20px;
  font-size: 12px;
  color: black;
}
.main {
  height:3000px;
}
#recommend{
    list-style-type:none
}

</style>