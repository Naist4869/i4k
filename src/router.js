import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Videoinfo from "./views/Videoinfo.vue";
Vue.use(Router);

export default new Router({
  // mode: "hash",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/postvideo",
      name: "postvideo",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/PostVideo.vue")
    },
    {
      path: "/video/:id",
      name: "videoinfo",
      component: Videoinfo,
      props: true
    }
    // {
    //   path: "*",
    //   name: "home",
    //   component: Home
    // }
  ]
});
