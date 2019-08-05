import axios from "axios";

// 发送带Token的地址
const postUploadToken = fileName =>
  axios
    .post("/api/v1/upload/token", { filename: fileName })
    .then(res => res.data);

const postUploadVideo = fileName =>
  axios
    .post("/api/v1/upload/video", { filename: fileName })
    .then(res => res.data);
export { postUploadToken, postUploadVideo };
