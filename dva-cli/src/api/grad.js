import request from "@/utils/request";

// 获取班级列表
export function get_gradlist() {
  const url = "/manger/grade";
  return request.get(url);
}
