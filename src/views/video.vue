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
         <videoPlayer
         :options="playerOptions"
         ></videoPlayer>
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
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';

export default {
    name: "video",
    data(){
        return{
             video:{},
             videos:[],
                playerOptions: {
          playbackRates: [0.75, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src:"",
          }],
          poster: "/static/images/author.jpg",
      
             fluid: true,
        }
        }
    },
  
 

  components: {
    User,
    BulletScreen,
    Video,
     videoPlayer
    
  },
  methods:{
       load() {
      API.getVideo(this.$route.params.id).then(res => {
        this.video = res.data;
        this.playerOptions.sources[0].src = this.video.url;
      });
 API.getVideos().then(res => {
        this.videos = res.data;
      });
      
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