<template>
  <div id="NewVideo">
    <div class="dialog">
      <a v-bind:href="'/video/' + videoindex">
        <img :src="poster" class="image" />
      </a>
    </div>
    <div class="abc">
      <a v-bind:href="'/video/' + videoindex">
        <h3>
          <slot name="videotitle">标题加载失败</slot>
        </h3>

       
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
  props: ["videoindex", "poster"],
  methods: {}
};
</script>
<style>
.video {
  max-height: 360px;
  max-width: 200px;
}

.image {
  width: 90%;
}

.abc {
 position: relative;
 width: 90%;
    padding-top: 8px;
    height: 90px;
    transition: all .2s linear;
    color: #222;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    text-align: left;

}
.abc h3 {
   height: 50px;
     word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    text-align: left;
}


.abc a {
  text-decoration: none;
  position: relative;
  display: inline-block;
  outline: none;
  color: black;
}
.abc a:link {
  color: #000000;
}

.abc a:hover {
  color: red;
  transition-duration: 0.3s;
  transition-timing-function: linear;
}
</style>
