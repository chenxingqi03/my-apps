/*
 * @Author: heinan
 * @Date: 2019-12-06 13:41:06
 * @Last Modified by: heinan
 * @Last Modified time: 2019-12-06 13:57:27
 */
import request from "@/utils/request";

export function getcarouselList() {
  const url = "";
  return request.get(url);
}

// 登录接口
export function _login({ username, password }) {
  const url = "/user/login";
  return request.post(url, {
    user_name: username,
    user_pwd: password,
  });
}

// 获取学生的所有信息
export function studentlist() {
  const url = "/manger/student/new";
  return request.get(url);
}

// 学生信息编辑接口
export function studentbj({ inone, intwo, intree }) {
  const url = "/manger/student/edit";
  return request.put(url, {
    student_id: inone,
    student_name: intwo,
    student_pwd: intree,
  });
}

// 学生的信息接口
export function studentdelete(id) {
  const url = `/manger/student/${id}`;
  return request.delete(url);
}

// 学生添加信息接口
export function studentaddto({ username_id, username_mima, username_name }) {
  console.log(username_id, username_mima, username_name);
  const url = "/manger/student";
  return request.post(url, {
    student_id: username_id,
    student_name: username_name,
    student_pwd: username_mima,
  });
}

// 获取登录者的信息
export function getname() {
  const url = "/user/userInfo";
  return request.get(url);
}

// 获取用户数据
export function getusername() {
  const url = "/user/identity";
  return request.get(url);
}

// 用户身份的添加
export function getuseradd(useritem) {
  const url = "/user/identity/edit";
  return request.get(url, { params: { identity_text: useritem } });
}

// 用户视图数据
export function getuserviews() {
  const url = "/user/view_authority";
  return request.get(url);
}

// 用户视图添加数据
export function getuserviewsadd({ username, Username }) {
  const url = "/user/authorityView/edit";
  return request.get(url, {
    params: {
      view_authority_text: username,
      view_id: Username,
    },
  });
}

// 接口权限列表
export function getuserapi() {
  const url = "/user/api_authority";
  return request.get(url);
}

// 添加接口权限信息
export function getuserapiadd({ username, Username, UserURL }) {
  const url = "/user/authorityApi/edit";
  return request.get(url, {
    params: {
      api_authority_text: username,
      api_authority_url: UserURL,
      api_authority_method: Username,
    },
  });
}

// 用户视图接口获取
export function getviewsdatalist(ID) {
  const url = "/user/new";
  return request.get(url, {
    params: {
      user_id: ID,
    },
  });
}



