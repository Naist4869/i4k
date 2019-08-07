<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="220px">
      <el-carousel-item v-for="item in items" :key="item">
        <el-image :src="item" :fit="fit" class="cover"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      items: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
      ],
      fit: "cover"
    };
  }
};
</script>



<style>
.block {
  margin: 20px auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 220px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.cover {
  object-fit:cover;
  height: 100%;
}
</style>