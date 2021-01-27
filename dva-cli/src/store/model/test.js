import {
  gettestlist,
  getesttypelist,
  gettestlistdata,
  gettestexamlistdata,
} from "@/api/test";

export default {
  namespace: "test",
  state: {
    //   所有试题，存储
    testlist: [],
    // 所有试题类型
    test_usertypelist: [],
    // 课程列表数据
    test_usercurrlist: [],
    // 获取所有考试类型的数据
    test_userexamlist: [],
  },
  reducers: {
    //   试题所有列表方法
    updated_tsetlist(state, { payload }) {
      return {
        ...state,
        testlist: payload,
      };
    },
    // 所有试题的类型
    updated_tsettypelist(state, { payload }) {
      return {
        ...state,
        test_usertypelist: payload,
      };
    },
    // 所有课程列表
    updated_testcurrlist(state, { payload }) {
      return {
        ...state,
        test_usercurrlist: payload,
      };
    },
    // 获取所有考试类型
    updated_userexamlist(state, { payload }) {
      return {
        ...state,
        test_userexamlist: payload,
      };
    },
  },
  effects: {
    //   所有试题列表
    *gettestlist(actions, { call, put }) {
      const result = yield call(gettestlist);
      yield put({ type: "updated_tsetlist", payload: result.data.data });
    },
    //   所有试题的类型的方法
    *getesttypelist(actions, { call, put }) {
      const result = yield call(getesttypelist);
      yield put({ type: "updated_tsettypelist", payload: result.data.data });
    },
    // 所有课程列表
    *gettestlistdata(actions, { call, put }) {
      const result = yield call(gettestlistdata);
      yield put({ type: "updated_testcurrlist", payload: result.data.data });
    },
    // 获取所有考试类型
    *gettestexamlistdata(actions, { call, put }) {
      const result = yield call(gettestexamlistdata);
      yield put({ type: "updated_userexamlist", payload: result.data.data });
    },
  },
};
