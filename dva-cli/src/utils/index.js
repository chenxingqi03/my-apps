// export function getSession(key) {
//     return window.sessionStorage.getItem(key)
// }

// export function setSession(key, val) {
//     window.sessionStorage.setItem(key, val)
// }

// 封装本地存储的的一些组件
export function getLoa(key){
    return window.localStorage.getItem(key)
}

export function setLoa(key,val) {
  return window.localStorage.setItem(key,val);
}

