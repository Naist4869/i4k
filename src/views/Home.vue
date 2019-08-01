<template>
  <div id="index">
    <el-container>
      <el-header  height="300px">
          <el-col :span="8"> <Carousel></Carousel></el-col>
          <el-col :span="16">
           
            <!-- <el-col :span="6" v-for="video in videos.slice(0, 8)"   :key="video.id" >  

            
                    <div class="mini">
 <Video :videoindex="video.id">
   
            <template v-slot:videotitle>{{video.title}}</template>
            <template v-slot:videoinfo>{{video.info}}</template>
          </Video>
              </div>
            </el-col> -->
            <el-col :span="6" v-for="video in videos.slice(0, 8)"   :key="video.id" >
               <MiniVideo>
 <template v-slot:videotitle>{{video.title}}</template>
         

               </MiniVideo>
            </el-col>
           
        
          </el-col>
       
      </el-header>

      <el-main>
       
        <el-col :span="4" v-for="video in videos" :key="video.id" class="aaa">
          <Video :videoindex="video.id">
            <template v-slot:videotitle>{{video.title}}</template>
            <template v-slot:videoinfo>{{video.info}}</template>
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
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';

export default {
  name: "index",
  data() {
    return {
      index: Number,
      videos: [],
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
.mini{
  width: 160px;
  height: 100px;
}
#Video{
  width:100%;
  height: 100%;
}
</style>