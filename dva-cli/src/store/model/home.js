/*
 * @Author: heinan 
 * @Date: 2019-12-06 13:59:43 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2019-12-06 13:59:43 
 */


export default {
  //命名空间
  namespace: "home",
  //仓库初始化状态
  state: {
    hometitle: "homepage",
    showHeader: true,
    showFoor: true,
  },
  reducers: {
    updateHeader(state, { type, payload }) {
      return {
        ...state,
        showHeader: payload,
      };
    },
    updateFoor(state, { type, payload }) {
      return {
        ...state,
        showFoor: payload,
      };
    },
  },
  
};