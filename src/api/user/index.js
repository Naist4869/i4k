import axios from "axios";

// 用户注册
const UserRegister = from =>
  axios.post("/api/v1/user/register", from).then(res => res.data);

// 用户登录
const UserLogin = () => axios.get("/api/v1/user/login").then(res => res.data);

export { UserRegister, UserLogin };
