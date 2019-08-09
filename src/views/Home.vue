<template>
  <div id="index">
    <el-container>
      <el-header height="300px" v-if="show">
        <el-col :span="8">
          <Carousel></Carousel>
        </el-col>
        <el-col :span="16">
          <div class="rank">
            <h3>每日排行榜</h3>
            <el-col :span="6" v-for="video in dailyvideos.slice(0, 4)" :key="video.id">
              <MiniVideo :videoindex="video.id" :poster="video.poster">
                <template v-slot:videotitle>{{video.title}}</template>
                <template v-slot:videoinfo>{{video.info}}</template>
                <template v-slot:play>播放量:{{video.view}}</template>
              </MiniVideo>
            </el-col>
          </div>
        </el-col>
      </el-header>

      <el-header height="150px" v-else>
        <div class="rank">
          <h3>每日排行榜</h3>
          <el-col :span="12" v-for="video in dailyvideos.slice(0, 2)" :key="video.id">
            <MiniVideo :videoindex="video.id" :poster="video.poster">
              <template v-slot:videotitle>{{video.title}}</template>
              <template v-slot:videoinfo>{{video.info}}</template>
              <template v-slot:play>播放量:{{video.view}}</template>
            </MiniVideo>
          </el-col>
        </div>
         
      </el-header>
       <el-divider v-if="!show"><i class="el-icon-mobile-phone"></i></el-divider>

      <el-main>
        <div v-if="show" class="showlist">
          <el-col :span="4" v-for="video in videos" :key="video.id" class="aaa">
            <NewVideo :videoindex="video.id" :poster="video.poster">
              <template v-slot:videotitle>{{video.title}}</template>

              <template v-slot:play>播放量：{{video.view}}</template>
            </NewVideo>
          </el-col>
        </div>
        <div v-else class="showlist">
          <el-col :span="8" v-for="video in videos" :key="video.id" class="aaa">
            <NewVideo :videoindex="video.id" :poster="video.poster">
              <template v-slot:videotitle>{{video.title}}</template>

              <template v-slot:play>播放量：{{video.view}}</template>
            </NewVideo>
          </el-col>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NewVideo from "../components/NewVideo";
import * as API from "@/api/video";
import Carousel from "../components/Carousel";
import MiniVideo from "../components/MiniVideo";

export default {
  name: "index",
  data() {
    return {
      show: true,
      index: Number,
      videos: [],
      dailyvideos: []
    };
  },
  components: {
    NewVideo,
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

    let w = document.documentElement.offsetWidth || document.body.offsetWidth;
    if (w < 1000) {
      this.show = false;
    }
  }
};
</script>
<style>
#NewVideo {
  width: 100%;
  height: 100%;
}
.rank {
  margin: 15px 10px;
}
</style>