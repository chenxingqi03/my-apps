import React, { Component } from "react";
import { connect } from "dva";
import Layouts from "@/components/layout";
import { Menu } from "antd";
import apidata from "@/config/api";
import Routerviews from "@/router";
import { setLoa, getLoa } from "@/utils/index";
// import { getviewsdatalist } from "@/api/home";
import {
  MailOutlined,
  // AppstoreOutlined,
  // SettingOutlined,
} from "@ant-design/icons";

import { Layout } from "antd";
const { Sider, Content } = Layout;

@connect((store) => {
  return {
    ...store.home,
    ...store.user
  };
})
class Home extends Component {
  state = {
    theme: "dark",
    current: getLoa("key") || "",
    // views_userdata: [],
  };

  changeTheme = (value) => {
    this.setState({
      theme: value ? "dark" : "light",
    });
  };
  render() {
    const { SubMenu } = Menu;
    // const { views_userdata } = this.state;
    return (
      <div className="home">
        <Layouts>
          <Layout>
            <Sider className="left">
              {this.props.views_userdata.map((itm) => {
                // console.log(itm,'接口的')
                return apidata.map((item) => {
                  // console.log(item,'自己')
                  if (item.view_id === itm.view_id) {
                    return (
                      <Menu
                        theme={this.state.theme}
                        onClick={this.handleClick}
                        style={{ width: "100%" }}
                        key={item.key}
                        // defaultOpenKeys={[
                        //   `${item.key === "1" ? item.key : ""}`,
                        // ]}
                        selectedKeys={[this.state.current]}
                        mode="inline"
                        onOpenChange={(e) => {
                          this.onOpenChange(e, item.path);
                        }}
                      >
                        <SubMenu
                          key={item.key}
                          icon={<MailOutlined />}
                          title={item.title}
                        >
                          {item.children &&
                            item.children.map((items) => {
                              return (
                                <Menu.Item
                                  onClick={() => {
                                    this.btn(items.path);
                                  }}
                                  key={items.key}
                                >
                                  {items.title}
                                </Menu.Item>
                              );
                            })}
                        </SubMenu>
                      </Menu>
                    );
                  }
                });
              })}
            </Sider>
            <Content className="right">
              <Routerviews
                routes={this.props.routes}
                history={this.props.history}
              />
            </Content>
          </Layout>
        </Layouts>
      </div>
    );
  }
  btn(path) {
    this.props.history.push(path);
  }

  onOpenChange(e, path) {
    this.props.history.push(path);
  }
  componentDidMount() {
    this.onOpenChange();
    this.props.dispatch({ type: "user/getviewsdatalist" });
    // let Info = JSON.parse(getLoa("tokenInfo"));
    // this.get_viewslist(Info.userInfo.user_id);
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    setLoa("key", this.state.current);
  };

  // 用户视图动态渲染
  // async get_viewslist(ID) {
  //   const result = await getviewsdatalist(ID);
  //   await this.setState({
  //     views_userdata: result.data.data,
  //   });
  // }
}
export default Home;
