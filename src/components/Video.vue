<template>
<div id="Video">
<div class="demo-image" :class="{videoinfo:display}"  @mouseenter="mouseenter()" @mouseleave="mouseleave()">
  
 <img src="../assets/logo.png"   >
 <div class="card-mark" v-show="display" >
     <p class="title" >
     【王老菊】奴隶阿飞的励志人生10</p>
     <p class="author">up主：怕上火暴王老菊</p>
     <p class="play">播放：43.0万</p>
     </div>


</div>


</div>



</template>
<script>
export default {
    data() {
      return {
        fit: 'cover',
        url: '../assets/logo.png',
        display:false
      }
    },
    methods:{
        mouseenter(){
            this.display=true;
            console.log("aaa")
        },
        mouseleave(){
            this.display=false;
        }
    }
  }

</script>
<style>
  .videoinfo{
      background-color: rgba(0, 0, 0, 0.2);
      ;
  }
  .demo-image{
      width: 200px;
     height: 200px;
     
  }
  .card-mark{
      display: inline-block;
      position: relative;
      bottom: 180px;

  }
</style>
