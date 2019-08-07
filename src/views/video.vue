<template>
  <div id="home">
    <el-container>
      <el-header height="200px">
        <el-row>
          <el-col :span="16">
            <h2>{{video.title}}</h2>
            <el-breadcrumb separator-class="el-icon-arrow-right" style="display: inline-block">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path:'/about' }">关于我们</el-breadcrumb-item>
            </el-breadcrumb>
            <span id="time">{{video.created_at | formatDate}}</span>
            <div class="video-data">
              <span class="view">{{video.view}}播放&nbsp;·&nbsp;</span>
              <span title="历史累计弹幕数46982" class="dm">4.7万弹幕&nbsp;</span>
              <span class="copyright"><i class="el-icon-warning"></i>未经作者授权，禁止转载</span><!----></div>
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
        <videoPlayer :options="playerOptions"></videoPlayer>
      
        
       <div class="block">
  <span class="demonstration">评分</span>
  <el-rate
    v-model="value"
    :colors="colors">
  </el-rate>
</div>
        <div class="info">{{video.info}}</div>
      </el-main>
      <el-aside>
        <BulletScreen></BulletScreen>
        <h3>相关视频</h3>
        <ul id="recommend">
          <li v-for="video in videos" :key="video.id">
            <Video :videoindex="video.id" :poster="video.poster">
              <template v-slot:videotitle>
                <h3>{{video.title}}</h3>
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

import User from "../components/User";
import BulletScreen from "../components/BulletScreen.vue";
import Video from "../components/Video";
import * as API from "@/api/video";
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';
import moment from 'moment';

export default {
    name: "video",

    data(){
        return{
            value: null,
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
  
    filters:{
 formatDate: function (value) {
        return moment.unix(value).format('YYYY-MM-DD HH:mm:ss')
    }},
 

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
        this.playerOptions.sources[0].src = this.video.video;
        this.playerOptions.poster = this.video.poster;
        
         
       
      
      });
 API.getRankDaily().then(res => {
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
  height: 3000px;
}
#recommend {
  list-style-type: none;
}
.video-data {
    margin-top: 11px;
    font-size: 12px;
    height: 16px;
    color: #999;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.video-data .copyright {
    margin-left: 16px;
    display: inline-block;
    font-size: 12px;
    line-height: 18px;
}
 .info {
    white-space: pre-line;
    transition: all .3s;
    font-size: 12px;
    color: #212121;
    letter-spacing: 0;
    line-height: 18px;
    height: 63px;
    width: 573px;
    overflow: hidden;
    border-top: #212121 solid 1px;
}
</style>