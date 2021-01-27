import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { getname } from "@/api/home";

class index extends Component {
  state = {
    tokenname: "",
  };
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            消息
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            个人中心
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#!"
            onClick={() => this.menuabtn()}
          >
            退出
          </a>
        </Menu.Item>
      </Menu>
    );
    let {tokenname} = this.state;
    return (
      <div className="header">
        <div className="header_top">
          <span></span>
          <h4>考试管理系统</h4>
          <span></span>
        </div>
        <div className="header_div">
          尊敬的管理员--
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              // href="#!"
              onClick={(e) => e.preventDefault()}
            >
              {tokenname} <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    );
  }
  menuabtn() {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenInfo");
    this.props.history.go(-1);
  }
  componentDidMount() {
    this.mengetname();
  }
  async mengetname() {
    const result = await getname();
    if (result.data.code === 1) {
      this.setState({
        tokenname: result.data.data.user_name,
      });
    }
  }
}

export default withRouter(index);
