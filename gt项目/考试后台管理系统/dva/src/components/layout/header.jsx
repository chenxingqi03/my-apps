import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { Component } from 'react';
import { connect } from "dva";


// const info = JSON.parse(localStorage.getItem("info")) 
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        切换账号
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/login"
        onClick = {()=>{
          console.log(111)
        }}
      >
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);
class header extends Component {
  componentDidMount(){
  }
  render() {
    return (
      <header className="header">
      
      <span className="float-right pr15">
      <span style = {{fontSize:'20px'}}>
       
        {
          // this.props.info.user_name
        this.props.info.user_name ?"欢迎登陆" + this.props.info.user_name : '请登录'
          
        }
       
      </span> &nbsp;&nbsp;
      <Dropdown overlay={menu}>
        <span className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Hover me <DownOutlined />
        </span>
      </Dropdown>
      
      </span>


      <span style={{color:"#fff",paddingTop:"10px"}}>后台管理系统</span>
    </header>
    );
  }
}
export default connect((store)=>{
  return store.home
})(header);


