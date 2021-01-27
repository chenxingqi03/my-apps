export default [{
    key: "1",
    name: "学生管理",
    view_id: "main",
    icon: "",
    path: "/app/student/list",
    children: [{
        key: "1.1",
        name: "学生列表",
        icon: "",
        path: "/app/student/list",
        view_id: "main-student",
      },
      {
        key: "1.2",
        name: "添加学生",
        icon: "",
        path: "/app/student/add"
      },
      {
        key: "1.3",
        name: "编辑学生",
        icon: "",
        path: "/app/student/edit"
      },
    ]
  },
  {
    key: "2",
    name: "班级管理",
    icon: "",
    view_id: 'main-grade',
    path: "/app/room/list",
    children: [{
        key: "2.1",
        name: "班级列表",
        icon: "",
        path: "/app/room/list"
      },
      {
        key: "2.2",
        name: "编辑班级",
        icon: "",
        path: "/app/room/add"
      }
    ]
  },
  {
    key: "3",
    name: "权限管理",
    icon: "",
    view_id: "authority",
    path: "/app/authority/authority_user",
    children: [{
        key: "3.1",
        name: "用户展示",
        icon: "",
        path: "/app/authority/authority_user"
      },
      {
        key: "3.2",
        name: "添加用户",
        icon: "",
        path: "/app/authority/authority_addUser"
      },
      {
        key: "3.3",
        name: "视图列表",
        icon: "",
        path: "/app/authority/authority_view"
      },
      {
        key: "3.4",
        name: "接口列表",
        icon: "",
        path: "/app/authority/authority_api"
      }
    ]
  },
  {
    key: "4",
    name: "试卷管理-教师",
    icon: "",
    view_id: "test",
    path: "/app/test",
    children: [{
        key: "4.1",
        name: "试卷列表",
        view_id: "test-list",
        icon: "",
        path: "/app/test/list"
      },
      {
        key: "4.2",
        name: "试题类型",
        view_id: "test-type",
        icon: "",
        path: "/app/test/type"
      },
      {
        key: "4.3",
        name: "添加试题",
        view_id: "t-type",
        icon: "",
        path: "/app/test/subject_list"
      },


    ]
  },
  {
    key: "5",
    name: "考试管理-学生",
    icon: "",
    view_id: "main-editQuestions",
    path: "/app/exam",
    children: [{
        key: "5.1",
        name: "添加考试",
        icon: "",
        path: "/app/exam/list"
      },
      {
        key: "5.2",
        name: "考试列表",
        icon: "",
        path: "/app/exam/add"
      },
     
    ]
  },
  {
    key: "6",
    name: "考试管理",
    icon: "",
    view_id: "question",
    path: "/app/question",
    children: [{
        key: "6.1",
        name: "创建考试",
        icon: "",
        view_id: "question—creat",
        path: "/app/question/list"
      },
      {
        key: "6.2",
        name: "考试列表",
        view_id: "question—creat",
        icon: "",
        path: "/app/question/add"
      },

    ]
  }
];