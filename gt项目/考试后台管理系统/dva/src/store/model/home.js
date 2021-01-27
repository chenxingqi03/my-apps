import { _getInfo} from "@/api/home.js"
import { _getinfoView} from "@/api/home.js"

export default {
    //命名空间
    namespace: 'home',
    //仓库初始化状态
    state: {
        pathname: (localStorage.getItem("pathname")) || "",
        info:{},
        infoData:null
    },
    reducers: {
        menuActive(state, {  type,payload }) {
            console.log(payload)

            return {
                ...state,
                menuActiveArr: payload
            }
        },
        getInfo(state, { type, payload }) {
            console.log(payload)
            return {
                ...state,
                info: payload
            }
        },
        getInfoData(state, { type, payload }) {
            console.log(payload)
            
            return {
                ...state,
                infoData: payload
            }
        },
    },
    effects: {
        pathnames({
            payload
        }, {
            call,
            put
        }) {
            localStorage.setItem("pathname", (payload))
        },
        *efcgetInfo(action, { call, put }) {
            const result = yield call(_getInfo)
            yield put({ type: 'getInfo', payload: result.data.data })
        },
        *efcgetInfoData(action, { call, put }) {
            const result = yield call(_getinfoView,action.user_id)
            localStorage.setItem("infoData" , JSON.stringify(result.data.data))
            
            yield put({ type: 'getInfoData', payload: result.data.data })
        }
    }
}