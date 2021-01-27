const drr = [
  {
    title: "学生管理",
    path: "/home/student/studtj",
    key: "1",
    view_id: "main-student",
    children: [
      {
        title: "学生列表",
        path: "/home/student/studtj",
        key: "1-1",
      },
      {
        title: "添加学生",
        path: "/home/student/studbj",
        key: "1-3",
      },
    ],
  },
  {
    title: "教室管理",
    path: "/home/room/roomaddto",
    key: "2",
    view_id: "main-room",
    children: [
      {
        title: "教室列表",
        path: "/home/room/roomaddto",
        key: "2-1",
      },
    ],
  },
  {
    title: "班级管理",
    path: "/home/grade/gradeaddto",
    key: "3",
    view_id: "main-grade",
    children: [
      {
        title: "班级列表",
        path: "/home/grade/grademodify",
        key: "3-1",
      },
      {
        title: "添加班级",
        path: "/home/grade/gradeaddto",
        key: "3-2",
      },
    ],
  },
  {
    title: "试题管理-教师",
    path: "/home/examinationPapers/papeaddto",
    key: "4",
    view_id: "main-examinationPapers",
    children: [
      {
        title: "试题列表",
        path: "/home/examinationPapers/papeaddto",
        key: "4-1",
      },
      {
        title: "试题类型",
        path: "/home/examinationPapers/papemodify",
        key: "4-3",
      },
      {
        title:"课程列表",
        path: "/home/examinationPapers/papecurr",
        key:"4-4"
      },
    ],
  },
  {
    title: "用户管理",
    path: "/home/userrghts/userrole",
    key: "5",
    view_id: "main-showUser",
    children: [
      {
        title: "身份权限列表",
        path: "/home/userrghts/userrole",
        key: "5-1",
      },
      {
        title: "视图权限列表",
        path: "/home/userrghts/userviews",
        key: "5-2",
      },
      {
        title: "接口权限列表",
        path: "/home/userrghts/userapi",
        key: "5-3",
      },
    ],
  },
];
export default drr;
