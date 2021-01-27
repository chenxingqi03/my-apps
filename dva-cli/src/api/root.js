import request from "@/utils/request";

// 教师获取
export function get_roomlist() {
  const url = "/manger/room";
  return request.get(url);
}

// 教室号修改
export function get_roomput(data, text) {
  const url = "/manger/room/update";
  return request.put(url, {
    room_id: data.room_id,
    room_text: text,
  });
}

//有问题
// 教室删除
export function get_roomdelete(room_id) {
    console.log(room_id);
  const url = `/manger/room/delete${room_id}`;
  return request.delete(url, { params: { room_id: room_id } });
}

// 添加教室号
export function get_roomadd(room_text) {
  const url = "/manger/room";
  return request.post(url, { room_text });
}
