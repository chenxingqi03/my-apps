import axios from "axios";
import { getLoa } from "@/utils";
import { message } from "antd";
const request = axios.create();
// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    config.headers["authorization"] = getLoa("token") || "";
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    console.log(error.response);
    // 如果权限过期就跳到登录页重新登录
    if (error.response.status === 401) {
      window.location.href = "/user/login";
    }
    if (error.response.status === 500) {
      message.success("用户名不正确");
    }
     if (error.response.status === 422) {
       message.error("内容不能为空");
     }
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default request;
