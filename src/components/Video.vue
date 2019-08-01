<template>
  <div id="Video">

    <div class="mask">
    <a v-bind:href="'/video/' + videoindex" class="video">
      <img src="../assets/logo.png" class="image" />

      <div class="card-mark">
        <div>
          <h3>
            <slot name="videotitle">标题加载失败</slot>
          </h3>
        </div>
        <div>
          <slot name="username">up主名字加载失败</slot>
        </div>
        <div>
          <slot name="play">播放量</slot>
        </div>
      </div>
    </a>
    </div>
    <div class="abc">
      <a v-bind:href="'/video/' + videoindex">
        <h2>
          <slot name="videotitle">标题加载失败</slot>
        </h2>

        <small>
          <slot name="videoinfo">信息加载失败</slot>
        </small>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fit: "cover",
      url: "../assets/logo.png"
    };
  },
  props: ["videoindex"],
  methods: {}
};
</script>
<style>
.video {
  max-height: 360px;
  max-width: 200px;
}

a .card-mark {
  opacity: 0;
  display: none;
}

a:hover .card-mark {
  position: absolute;
  top: 25px;
  display: block;
  opacity: 1;
  white-space: nowrap;
  width: 90%;
  height: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  transition-duration: 0.3s;
}
a:hover .card-mark > * {
  margin: 20px auto;
}
.image {
  width: 100%;
}
a:hover .image {
  transition-duration: 0.3s;
  background-color: rgba(0, 0, 0, 0.2);
}
.mask a {
  text-decoration: none;
  position: relative;
  display: inline-block;
  outline: none;
  color: black;
}
.abc {
  max-height: 360px;
  max-width: 200px;
}
.abc a:link {
  color: #000000;
}

.abc a:hover {
  color: red;
  transition-duration: 0.1s;
  transition-timing-function: linear;
}

</style>
