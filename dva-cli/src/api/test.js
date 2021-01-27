import request from "@/utils/request";
import { getLoa } from "@/utils/index";

// 试题管理
// 获取所有试题列表
export function gettestlist() {
  const url = "/exam/questions/new";
  return request.get(url);
}

// 试题类型
export function getesttypelist() {
  const url = "/exam/getQuestionsType";
  return request.get(url);
}

// 获取课程列表
export function gettestlistdata() {
  const url = "/exam/subject";
  return request.get(url);
}

// 获取所有考试类型
export function gettestexamlistdata() {
  const url = "/exam/examType";
  return request.get(url);
}

// 添加试题接口
export function getuserapi_add({ ...inpdata }) {
  let token = JSON.parse(getLoa("tokenInfo"));
  const url = "/exam/questions";
  return request.post(url, {
    questions_type_id: inpdata.test_usertype,
    questions_stem: inpdata.test_userstem,
    subject_id: inpdata.test_usersurr,
    exam_id: inpdata.test_examtype,
    user_id: token.userInfo.user_id,
    questions_answer: inpdata.test_question,
    title: inpdata.test_usertext,
  });
}
