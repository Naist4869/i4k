
<template>
  <div id="app">
    <NavMenu v-if="show"></NavMenu>
    <Collapse v-else></Collapse>
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";
import Collapse from "./components/Collapse";
export default {
 data() {
    return {
      show:true,
    }
    },
  name: 'app',
  components: {
    NavMenu,
    Collapse
  },
    mounted() {
    let w = document.documentElement.offsetWidth || document.body.offsetWidth;
    if (w < 1000) {
      this.show = false;
    }
  }
}

</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  
</style>
