import App from "@/containers/App";
import Student from '@/containers/student'
import userLogin from "@/containers/user/login";
import studentList from "@/containers/student/list";
import studentAdd from "@/containers/student/add";
import studentEdit from "@/containers/student/edit";
import Room from "@/containers/room";
import RoomList from "@/containers/room/list"
import Authority from '@/containers/authority'
import Authority_user from '@/containers/authority/user_authority'
import Authority_api from '@/containers/authority/api_authority'
import Authority_view from '@/containers/authority/view_authority'
import Authority_userAdd from '@/containers/authority/addUser'
import test from '@/containers/test'
import test_list from '@/containers/test/list'
import test_type from '@/containers/test/type'
import subject_list from '@/containers/test/subject_type'
import exam from '@/containers/exam'
import examAdd from '@/containers/exam/add'
import examList from '@/containers/exam/list'
import question from '@/containers/question' 
import questionAdd from '@/containers/question/add' 
import questionList from '@/containers/question/list' 
export default [
  {
    path: "/app",
    name: "app",
    key:'/app',
    component: App,
    children: [
      
      {
        path: "/app/student",
        key: "/app/student",
        name: "student",
        component: Student,
        children: [
          {
            path: "/app/student/list",
            key: "/app/student/list",
            name: "roomlist",
            component: studentList
          },
          {
            path: "/app/student/add",
            key: "/app/student/add",
            name: "studentAdd",
            component: studentAdd
          },
          {
            path: "/app/student/edit",
            key: "/app/student/edit",
            name: "studentEdit",
            component: studentEdit
          },
        ]
      },
      
      {
        path: "/app/room",
        key: "/app/room",
        name: "room",
        component: Room,
        children: [
          {
            path: "/app/room/list",
            key: "/app/room/list",
            name: "roomlist",
            component: RoomList
          },
          {
            path: "/app/room/add",
            key: "/app/room/add",
            name: "studentAdd",
            component: studentAdd
          }
        ]
      },
      {
        path: "/app/authority",
        key: "/app/authority",
        name: "authority",
        component: Authority,
        children: [
          {
            path: "/app/authority/authority_user",
            key: "/app/authority/authority_user",
            name: "authority_user",
            component: Authority_user
          },
          {
            path: "/app/authority/authority_api",
            key: "/app/authority/authority_api",
            name: "authority_api",
            component: Authority_api
          },
          {
            path: "/app/authority/authority_view",
            key: "/app/authority/authority_view",
            name: "authority_view",
            component: Authority_view
          },
          {
            path: "/app/authority/authority_addUser",
            key: "/app/authority/authority_addUser",
            name: "authority_addUser",
            component: Authority_userAdd
          },
        ]
      },
      {
        path: "/app/test",
        key: "/app/test",
        name: "test",
        component: test,
        children: [
          {
            path: "/app/test/list",
            key: "/app/test/list",
            name: "test-list",
            component: test_list
          },
          {
            path: "/app/test/type",
            key: "/app/test/type",
            name: "test-type",
            component: test_type
          },
          {
            path: "/app/test/subject_list",
            key: "/app/test/subject_list",
            name: "subject_list",
            component: subject_list
          }
        ]
      },
      {
        path: "/app/exam",
        key: "/app/exam",
        name: "exam",
        component: exam,
        children: [
          {
            path: "/app/exam/list",
            key: "/app/exam/list",
            name: "examList",
            component: examList
          },
          {
            path: "/app/exam/add",
            key: "/app/exam/add",
            name: "examAdd",
            component: examAdd
          }
        ]
      },
      {
        path: "/app/question",
        key: "/app/question",
        name: "question",
        component: question,
        children: [
          {
            path: "/app/question/list",
            key: "/app/question/list",
            name: "questionList",
            component: questionList
          },
          {
            path: "/app/question/add",
            key: "/app/question/add",
            name: "questionAdd",
            component: questionAdd
          }
        ]
      }
    ]
  },
  {
    path:'/login',
    key:'/login',
    name:'userLogin',
    component:userLogin
  },
  // {
  //   from:"/",
  //   to:"/app/student/list"
  // },
];
