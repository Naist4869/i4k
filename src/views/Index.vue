<template>
  <div id="index">
    <el-container>
      <el-header>

<Video  v-for="video in videos" :key="video.id"></Video>

          <!-- <div class="Video">
        <div
          class="demo-image"
          v-for="video in videos"
          :key="video.id"
          :class="{videoinfo:display}"
          @mouseenter="mouseenter()"
          @mouseleave="mouseleave()"
        >
          <img src="../assets/logo.png" />
          <div class="card-mark" v-if="display">
            <p class="title">{{video.title}}</p>
            <p class="info">{{video.info}}</p>
            <p class="author">up主：怕上火暴王老菊</p>
            <p class="play">播放：43.0万</p>
          </div>
        </div>
        </div> -->
      </el-header>

      <el-main></el-main>
    </el-container>
  </div>
</template>

<script>
import Video from "../components/Video";
import Carousel from "../components/Carousel";
import * as API from "@/api/video";

export default {
  name: "index",
  data() {
    return {
      videos: [],
      urls: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
      ],
        fit: 'cover',
        url: '../assets/logo.png',
        display:false

    };
  },
  components: {
    Video,
    Carousel
  },
  methods: {
    load() {
      API.getVideos().then(res => {
        this.videos = res.data;
      });
    },
         mouseenter(){
            this.display=true;
           
        },
        mouseleave(){
            this.display=false;
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
  .videoinfo{
      background-color: rgba(0, 0, 0, 0.2);
      ;
  }
  .demo-image{
      display: inline-block;
      width: 200px;
     height: 200px;
     
  }
  .card-mark{
      display: inline-block;
      position: relative;
      bottom: 180px;
      text-overflow:ellipsis;


  }
</style>