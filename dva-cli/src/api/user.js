import request from "@/utils/request";

// 获取身份数据
export function get_userlist() {
  const url = "/user/identity";
  return request.get(url);
}

//给身份设置视图权限
export function _postuserviews(identity_id, view_authority_id) {
  console.log(identity_id, view_authority_id);
  const url = "/user/setIdentityView";
  return request.post(url, {
    identity_id,
    view_authority_id,
  });
}
