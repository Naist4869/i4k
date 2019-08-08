<template>
<div id="MiniVideo">

 <div class="mask"></div>
    <div class="dialog"></div>




    <div class="minivideo">

      <router-link  :to="{ path:`/video/${videoindex}` }">
    <a href="#" >
      <img :src="poster" class="image"  />

      <div class="card-mask">
        <div>
        
            <h3><slot name="videotitle">标题加载失败</slot></h3>
          
        </div>
        <div>
        <small>
          <slot name="videoinfo"></slot>
        </small>
        </div>

        <div>
              <small>
          <slot name="play"></slot>
              </small>
        </div>
      </div>
    </a>
    </router-link>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  props: ["videoindex","poster"],
}
</script>
<style>
  
.minivideo a .card-mask {
 
  display: none;
  
}
.minivideo a .card-mask > *{
 
  margin: 15px;
  
}

.minivideo a:hover .card-mask {
  position: relative;
  top: -140px;
  display: block;
  width: 90%;
  white-space: nowrap;
transition-duration: 0.3s;
  transition-timing-function: linear;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  background: linear-gradient(transparent,rgba(0,0,0,.2) 10%,rgba(0,0,0,.3) 35%,rgba(0,0,0,.6) 55%,rgba(0,0,0,.9));
}
.minivideo .image {
  width: 90%;
}
.minivideo a {
  color: white
}

</style>
