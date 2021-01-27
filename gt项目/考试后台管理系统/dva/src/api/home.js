import request from '@/utils/request';

export function getcarouselList() {
    const url = '';
    return request.get(url);
}
//登录
export function loginApi(params) {
    const url = '/user/login';
    return request.post(url, params);
}
//用户列表
export function _getroomlist(params) {
    const url = '/manger/room';
    return request.get(url);
}
//获取用户信息
export function _getInfo(params){
    return request.get('/user/userInfo')
}
//添加教室
export function addRoom(params) {
    const url = '/manger/room';
    return request.post(url,params);
}
//获取学生
export function _studentList() {
    return request.get('/manger/student/new');
}
//添加学生 
export function _addStudent(params) {
    return request.post('/manger/student', params);
}
//编辑学生
export function _editStudent(params) {
    console.log(Object.prototype.toString.call(params));
    return request.put("/manger/student/edit",params)
}
//删除学生
export function _delStudent(params) {
    const url = `/manger/student/${params}`;
    return request.delete(url, params);
}
//获取接口列表
export function _getApiList(params) {
    const url = `/user/api_authority`;
    return request.get(url, params);
}
//获取视图列表
export function _getViewList() {
    const url = `/user/view_authority`;
    return request.get(url);
}
//展示用户列表
export function _getUserList(url) {
    return request.get(url);
}
//添加用户
export function _addUser(params) {
    const url = `/user`;
    return request.post(url, params);
}
//添加身份
export function _addAuthority(val){
    const url = `/user/identity/edit`;
    return request.get(url, {params:{identity_text:val}});
}
//添加api 接口
export function _addApi(text,urlApi,methods){
    const url = `/user/authorityApi/edit`;
    return request.get(url, {params:{api_authority_text:text,api_authority_url:urlApi,api_authority_method:methods}});
}
//添加视图
export function _addView(viewText,viewId){
    const url = `/user/authorityView/edit`;
    return request.get(url, {params:{view_authority_text:viewText,view_id:viewId}});
}
//获取身份列表
export function _getAuthList() {
    return request.get("/user/identity");
}
//给身份添加接口权限
export function _addapiAuthList(params) {
    return request.post("/user/setIdentityApi",params);
}
//给身份添加视图权限
export function _addviewAuthList(params) {
    return request.post("/user/setIdentityView",params);
}
//根据用户id，返回该用户的视图权限
export function _getinfoView(params) {
    return request.get("/user/new",{
        params:{
            user_id:params
        }
    });
}
//获取所有的试题类型
export function _getTypeList() {
    return request.get("/exam/getQuestionsType");
}
//获取所有的试题
export function _getallexamList() {
    return request.get("/exam/questions/new");
}
//获取所有的课程
export function _getsubject() {
    return request.get("/exam/subject");
}
//获取所有的考试类型
export function _getexamType() {
    return request.get("/exam/examType");
}//获取所有的试题类型
export function _getQuestionsType() {
    return request.get("/exam/getQuestionsType");
}
//添加试题
export function _getQuestions(params) {
    return request.post("/exam/questions",params);
}
//添加试题
export function _testSearch(val) {
    return request.get("/exam/questions/condition",{
        params:val
    });
}
