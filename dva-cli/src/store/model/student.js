import { studentlist, getusername, getuserviews, getuserapi } from "@/api/home";
export default {
  namespace: "student",
  state: {
    // 学生管理列表
    datalist: [],
    // 用户权限列表
    usernamelist: [],
    // 视图权限列表
    userviewslist: [],
    // 接口权限列表
    userapilist: [],
  },
  reducers: {
    // 学生管理方法
    updated_student(state, { payload }) {
      return {
        ...state,
        datalist: payload,
      };
    },
    // 用户权限方法
    updated_usernmae(state, { payload }) {
      return {
        ...state,
        usernamelist: payload,
      };
    },
    // 视图权限方法
    updated_getuserviews(state, { payload }) {
      return {
        ...state,
        userviewslist: payload,
      };
    },
    // 接口权限方法
    updated_userapi(state, { payload }) {
      return {
        ...state,
        userapilist: payload,
      };
    },
  },
  effects: {
    //   页面的方法的函数
    *studentlist(actions, { call, put }) {
      const result = yield call(studentlist);
      yield put({ type: "updated_student", payload: result.data.data });
    },
    // 用户权限方法
    *getusername(actions, { call, put }) {
      const result = yield call(getusername);
      yield put({ type: "updated_usernmae", payload: result.data.data });
    },
    // 用户视图方法
    *getuserviews(actions, { call, put }) {
      const result = yield call(getuserviews);
      yield put({ type: "updated_getuserviews", payload: result.data.data });
    },
    // 用户接口方法
    *getuserapi(actions, { call, put }) {
      const result = yield call(getuserapi);
      yield put({ type: "updated_userapi", payload: result.data.data });
    },
  },
};
