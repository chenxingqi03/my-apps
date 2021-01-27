
import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";

import "@/assets/css/bootstrap.min.css";
import "@/assets/css/iconfont.css";
import "@/assets/css/reset.css";
import "@/assets/css/common.css";
import "@/assets/css/style.css";

class Layout extends Component {
  render() {
    return (
      <div className='wraper'>
        <Header>后台管理系统

        </Header>
        <section className='content'>{this.props.children}</section>
        <Footer>底部</Footer>
      </div>
    );
  }
}
export default Layout;
