import axios from "axios";
import { showLoading, hideLoading } from "../../loading";
// 添加请求拦截器
axios.interceptors.request.use(
  req => {
    // let url = req.url;
    // if (url.split("/").pop() === "getVideos") {
    //   showLoading();
    // }
    showLoading();
    return req;
  },
  err => Promise.reject(err)
);

// 添加响应拦截器
axios.interceptors.response.use(
  res => {
    hideLoading();

    return res;
  },
  err => {
    hideLoading();
    return Promise.reject(err);
  }
);

// 创建视频
const postVideo = from =>
  axios.post("/api/v1/video", from).then(res => res.data);

// 视频详情
const getVideo = id => axios.get(`/api/v1/video/${id}`).then(res => res.data);

//视频列表
const getVideos = () => axios.get("/api/v1/videos").then(res => res.data);

// 每日排行榜
const getRankDaily = () =>
  axios.get("/api/v1/rank/daily").then(res => res.data);

export { postVideo, getVideo, getVideos, getRankDaily };
