import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
// import { _login } from "@/api/home";
import { connect } from "dva";

@connect((store) => {
  return store.user;
})
class login extends Component {
  state = {
    layout: {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 },
    },
    tailLayout: {
      wrapperCol: { offset: 4, span: 16 },
    },
    flags: false,
    pirc: "",
    sub: 60,
    ass: true,
  };
  //   点击事件
  onFinish(valuses) {
    this.props.dispatch({
      type: "user/login",
      payload: valuses,
      pirc: this.state.pirc,
    });
  }
  render() {
    let { layout, tailLayout, flags, pirc, ass } = this.state;
    return (
      <div className="login_div">
        <Form
          className="Form_con"
          {...layout}
          name="basic"
          initialValues={{ username: "heinan", password: "1qaz!QAZ" }}
          onFinish={(val) => this.onFinish(val)}
        >
          <h2>登录</h2>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="倒计时"
            name="usertext"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <div className="log_con">
              <Input /> {flags ? <b>{pirc}</b> : ""}
              <Button
                type="primary"
                onClick={() => {
                  this.btnmag();
                }}
              >
                {ass ? "获取验证码" : this.state.sub + "秒后重新获取"}
              </Button>
            </div>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" style={{ width: "100%" }} htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

  async btnmag() {
    let arr = "123456789zxcvbnmasdfghjklqwertyuiop";
    let tem = "";
    for (let i = 0; i < 4; i++) {
      tem += arr[Math.floor(Math.random() * arr.length)];
    }
    await this.setState({
      flags: true,
      pirc: tem,
      ass: false,
    });
    let drr = setInterval(() => {
      this.setState({
        sub: this.state.sub - 1,
      });
      if (this.state.sub < 1) {
        clearInterval(drr);
        this.setState({
          ass: true,
          flags: false,
        });
        message.error("验证码超时");
      }
    }, 1000);
    this.setState({
      sub: 60,
    });
  }
}
export default login;
