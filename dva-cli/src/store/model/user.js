import { _login, getviewsdatalist } from "@/api/home";
import { getLoa, setLoa } from "@/utils";
import { message } from "antd";
export default {
  namespace: "user",
  state: {
    token: getLoa("token") || "",
    views_userdata: [],
  },
  reducers: {
    logins(state, { payload }) {
      return {
        ...state,
        token: payload,
      };
    },
    // 侧边栏数据
    updated_getviewsdatalist(state, { payload }) {
      return {
        ...state,
        views_userdata: payload,
      };
    },
  },
  effects: {
    *login({ payload, pirc }, { call, put }) {
      const result = yield call(_login, payload);
      console.log(payload.usertext);
      console.log(pirc);
      if (payload.usertext != pirc) {
        message.error('验证码输入错误')
      } else if (result.data.code === 1) {
        message.success(result.data.msg);
        yield put({ type: "logins", payload: result.data.token });
        setLoa("token", result.data.token);
        setLoa("tokenInfo", JSON.stringify(result.data));
        // 跳转路由
        window.location.href = "/home";
      } else {
        message.success(result.data.msg);
      }
    },
    // 侧边栏
    *getviewsdatalist(actions, { call, put }) {
      let Info = JSON.parse(getLoa("tokenInfo"));
      const result = yield call(getviewsdatalist, Info.userInfo.user_id);
      yield put({
        type: "updated_getviewsdatalist",
        payload: result.data.data,
      });
    },
  },
};
