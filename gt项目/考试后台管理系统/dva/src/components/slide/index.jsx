import React, { Component } from "react";
import { withRouter } from "dva/router";
import SlideLeft from "@/components/slide/left";
import SlideRight from "@/components/slide/right";
import { Menu } from "antd";
import "@/assets/css/slide.css";
import MenuConfig from "@/config/menu";
import { connect } from "dva";
@withRouter
class Slide extends Component {
  state = {
    infoData:JSON.parse(localStorage.getItem('infoData')) 
  }
  componentDidMount() {
    let pathname = this.props.location.pathname
    this.pathName(pathname);
    let openKey = pathname
  }
  pathName(i) {
    this.props.history.push(i);
    this.props.dispatch({
      type: "home/pathnames",
      payload: i
    });
  }
  render() {
    const { SubMenu } = Menu;
    return (
      <div className="slide-wraper clearfix">
        <SlideLeft>
          <Menu
            defaultSelectedKeys={[this.props.pathname]}
            // defaultOpenKeys={["/app/student"]}
            // openKeys = {["/app/student"]}
            mode="inline"
            theme="dark"
            style={{ height: "100%" }}
          >
            {
              MenuConfig.map((menu) => {
                return this.props.infoData && this.props.infoData.map((item=>{
                  if(item.view_id !== menu.view_id){
                     return null } 
                  else{
                    return (
                      <SubMenu
                        key={menu.path}
                        icon={menu.icon}
                        title={menu.name}
                      >
                        {menu.children.map((menuItm) => (
                          <Menu.Item
                            key={menuItm.path}
                            // onClick={() => this.go(menuItm.path)}
                            onClick={() => this.pathName(menuItm.path)}
                          >
                            {menuItm.name}
                          </Menu.Item>
                        ))}
                      </SubMenu>
                    );
                  }
                }))
              })
            }
          </Menu>
        </SlideLeft>
        <SlideRight>{this.props.children}</SlideRight>
      </div>
    );
  }
}
export default connect((store) => {
  return  store.home
})(Slide);
