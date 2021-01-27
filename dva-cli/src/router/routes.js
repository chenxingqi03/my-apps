/*
 * @Author: heinan
 * @Date: 2019-12-06 13:37:51
 * @Last Modified by:   heinan
 * @Last Modified time: 2019-12-06 13:37:51
 */
import Home from "@/containers/home";
import user from "@/containers/user";
import login from "../containers/user/login";

// 一级路由
import student from "@/containers/main/student";
import room from "@/containers/main/room";
import grade from "@/containers/main/grade";
import examinationPapers from "@/containers/main/examinationPapers";
import userrghts from "@/containers/main/userrights";

// 学生管理二级
import studtj from "@/containers/student/studtj";
import studbj from "@/containers/student/studbj";
// 教室管理二级
import roomaddto from "@/containers/room/roomaddto";
// 班级管理二级
import gradeaddto from "@/containers/grade/gradeaddto";
import grademodify from "@/containers/grade/grademodify";
// 试题管理
import papeaddto from "@/containers/paperss/testlist/papeaddto";
import papemodify from "@/containers/paperss/testtype/papemodify";
import papecurr from "@/containers/paperss/testcurr";
// 用户权限
import userrole from "@/containers/userrights/userrole";
import userviews from "@/containers/userrights/userviews";
import userapi from "@/containers/userrights/userapi";
export default [
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      // 学生管理
      {
        path: "/home/student",
        name: "student",
        component: student,
        children: [
          {
            path: "/home/student/studtj",
            name: "studtj",
            component: studtj,
          },
          {
            path: "/home/student/studbj",
            name: "studbj",
            component: studbj,
          },
        ],
      },
      // 教师管理
      {
        path: "/home/room",
        name: "room",
        component: room,
        children: [
          {
            path: "/home/room/roomaddto",
            name: "roomaddto",
            component: roomaddto,
          }
        ],
      },
      // 班级管理
      {
        path: "/home/grade",
        name: "grade",
        component: grade,
        children: [
          {
            path: "/home/grade/gradeaddto",
            name: "gradeaddto",
            component: gradeaddto,
          },
          {
            path: "/home/grade/grademodify",
            name: "grademodify",
            component: grademodify,
          },
        ],
      },
      // 试题管理
      {
        path: "/home/examinationPapers",
        name: "examinationPapers",
        component: examinationPapers,
        children: [
          {
            path: "/home/examinationPapers/papeaddto",
            name: "papeaddto",
            component: papeaddto,
          },
          {
            path: "/home/examinationPapers/papemodify",
            name: "papemodify",
            component: papemodify,
          },
          {
            path: "/home/examinationPapers/papecurr",
            name: "papecurr",
            component: papecurr,
          },
        ],
      },
      // 用户权限
      {
        path: "/home/userrghts",
        name: "userrghts",
        component: userrghts,
        children: [
          {
            path: "/home/userrghts/userrole",
            name: "userrole",
            component: userrole,
          },
          {
            path: "/home/userrghts/userviews",
            name: "userviews",
            component: userviews,
          },
          {
            path: "/home/userrghts/userapi",
            name: "userapi",
            component: userapi,
          },
        ],
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    component: user,
    children: [{ path: "/user/login", name: "login", component: login }],
  },
];
