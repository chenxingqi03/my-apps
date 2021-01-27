import { _studentList} from '../../api/home'
import { _getroomlist} from '../../api/home'
import { _getApiList } from  '../../api/home'
import { _getViewList } from  '../../api/home'
import { _getUserList } from  '../../api/home'
import { _getTypeList } from  '../../api/home'
import { _getallexamList } from  '../../api/home'
import { _getsubject } from  '../../api/home'
import { _getexamType } from  '../../api/home'
import { _getQuestionsType } from  '../../api/home'

export default {
    //命名空间
    namespace: 'student',
    //仓库初始化状态
    state: {
        studentList:[],
        roomLists:[],
        ApiList:[],
        ViewList:[],
        showList:[],
        testList:[],
        allexamList:[],
        questionsType:[],
        subjectList:[],
        examType:[],
    },
    reducers: {
        getList(state, { type, payload }) {
            return {
                ...state,
                studentList: payload
            }
        },
        getRList(state, { type, payload }) {
            return {
                ...state,
                roomLists: payload
            }
        },
        getApiList(state, { type, payload }) {
            return {
                ...state,
                ApiList: payload
            }
        },
        getViewList(state, { type, payload }) {
            return {
                ...state,
                ViewList: payload
            }
        },
        getUserList(state, { type, payload }) {
            return {
                ...state,
                UserList: payload
            }
        },
        getTestList(state, { type, payload }) {
            return {
                ...state,
                testList: payload
            }
        },
        getallexamList(state, { type, payload }) {
            return {
                ...state,
                allexamList: payload
            }
        },
        getsubject(state, { type, payload }) {
            return {
                ...state,
                subjectList: payload
            }
        },
        getexamType(state, { type, payload }) {
            return {
                ...state,
                examType: payload
            }
        },
        getQuestionsType(state, { type, payload }) {
            return {
                ...state,
                questionsType: payload
            }
        },
    },
    effects: {
        *getStudentList(action, { call, put }) {
            const result = yield call(_studentList)
            yield put({ type: 'getList', payload: result.data.data })
        },
        *getRoomList(action, { call, put }) {
            const result = yield call(_getroomlist)
            yield put({ type: 'getRList', payload: result.data.data })
        },
        *efcgetApiList(action, { call, put }) {
            const result = yield call(_getApiList)
            yield put({ type: 'getApiList', payload: result.data.data })
        },
        *efcgetViewList(action, { call, put }) {
            const result = yield call(_getViewList)
            yield put({ type: 'getViewList', payload: result.data.data })
        },
        *efcgetUserList(action, { call, put }) {
            const result = yield call(_getUserList,action.api)
            yield put({ type: 'getUserList', payload: result.data.data })
        },
        //获取所有的试题类型
        *efcgetalltypeList(action, { call, put }) {
            const result = yield call(_getTypeList)
            yield put({ type: 'getTestList', payload: result.data.data })
        },
        //获取所有的试题列表
        *efcgetallexamList(action, { call, put }) {
            const result = yield call(_getallexamList)
            yield put({ type: 'getallexamList', payload: result.data.data })
        },
        
        //获取所有的课程类型
        *efcgetsubject(action, { call, put }) {
            const result = yield call(_getsubject)
            yield put({ type: 'getsubject', payload: result.data.data })
        },
        //获取所有的课程类型
        *efcgetexamType(action, { call, put }) {
            const result = yield call(_getexamType)
            yield put({ type: 'getexamType', payload: result.data.data })
        },
        //获取所有的课程类型
        *efcQuestionsType(action, { call, put }) {
            const result = yield call(_getQuestionsType)
            yield put({ type: 'getQuestionsType', payload: result.data.data })
        },
    }
}