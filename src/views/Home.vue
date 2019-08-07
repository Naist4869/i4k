<template>
  <div id="index">
    <el-container>
      <el-header height="300px">
        <el-col :span="8">
          <Carousel></Carousel>
        </el-col>
        <el-col :span="16" >
          <div id="rank">
         <h3>每日排行榜</h3>
          <el-col :span="6" v-for="video in dailyvideos.slice(0, 4)" :key="video.id">
            <MiniVideo  :videoindex="video.id" :poster="video.poster">
              <template v-slot:videotitle>{{video.title}}</template>
                <template v-slot:videoinfo>{{video.info}}</template>
                   <template v-slot:play>播放量:{{video.view}}</template>
            </MiniVideo>
          </el-col>
          </div>
        </el-col>
      </el-header>

      <el-main>
        <el-col :span="4" v-for="video in videos" :key="video.id" class="aaa">
          <Video :videoindex="video.id" :poster="video.poster">
            <template v-slot:videotitle>{{video.title}}</template>
          
             <template v-slot:play>播放量：{{video.view}}</template>
          </Video>
        </el-col>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Video from "../components/Video";
import * as API from "@/api/video";
import Carousel from "../components/Carousel";
import MiniVideo from "../components/MiniVideo";


export default {
  name: "index",
  data() {
    return {
      index: Number,
      videos: [],
      dailyvideos:[],
    };
  },
  components: {
    Video,
    Carousel,
    MiniVideo
  },
  methods: {
    load() {
      API.getVideos().then(res => {
        this.videos = res.data;
      });
      // console.log(...videos);
       API.getRankDaily().then(res => {
        this.dailyvideos = res.data;
      });
    }
  },
  beforeMount() {
    this.load();
  },
  mounted() {
    //    console.log(...videos)
  }
};
</script>
<style>

#Video {
  width: 100%;
  height:100%;
  
 
}
#rank{
  margin: 15px 10px;
}

</style>