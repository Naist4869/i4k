<template>
    <div class="videoplayer">
        <videoPlayer></videoPlayer>

    </div>
</template>
<script>
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';

export default {
    name:'VideoPlayer',
    data(){
        return{
            playerOptions: {
          playbackRates: [0.75, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "/static/images/author.jpg",
            preload: "metadata",
             fluid: true,
        }
        }


    },
    components: {
    videoPlayer
  }



}
</script>
