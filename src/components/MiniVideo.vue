<template>
<div id="MiniVideo">

    <div class="minivideo">
    <a v-bind:href="'/video/' + videoindex" class="video" >
      <img src="../assets/logo.png" class="image"  :key="cover" />

      <div class="card-mark">
        <div>
        
            <slot name="videotitle">标题加载失败</slot>
          
        </div>
        <div>
        
          <slot name="username">up主:</slot>
          
        </div>

        <div>
             
          <slot name="play">播放量:</slot>
           
        </div>
      </div>
    </a>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  props: ["videoindex"],
}
</script>
<style>
  
#MiniVideo{
 
  margin: 20px 20px;

}
#MiniVideo a .card-mark {
     
  opacity: 0; 
   display: none; 
}

#MiniVideo a:hover .card-mark {
  position: absolute;
  top: -10px;
  display: block;
  opacity: 1;
  white-space: nowrap;
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  transition-duration: 0.3s;
}

 .minivideo .image {
   width: 40%;

}
.minivideo{
    position: relative;
    display: flex;
  justify-content: center;
  align-items: center;
}
#MiniVideo a:hover .image {
  transition-duration: 0.3s;
  background-color: rgba(0, 0, 0, 0.2);
}

</style>
