import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { connect } from "dva";
import { loginApi } from "@/api/home";
// import cookies from 'react-cookies';
class login extends Component {
  state = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 16
    },
    username: "11",
    password: "11",
    tailLayout: {
      wrapperCol: {
        offset: 6,
        span: 16
      }
    }
  };
  onFinish = async () => {
    let params = {
      user_name: this.state.username,
      user_pwd: this.state.password
    };
    let result = await loginApi(params);
    if (result.data.code === 1) {
      localStorage.setItem("authorization", result.data.token);
      this.props.history.push("/app");
      await this.props.dispatch({type:'home/efcgetInfoData',user_id :result.data.userInfo.user_id})
    }
  };
  back() {
    console.log(111);
    this.props.history.push("/app");
  }
  render() {
    return (
      <div className="login">
        登录页面
        
        <Form
          {...this.layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name={this.username}
            rules={[{ required: true, message: "Please input your username!" }]}
            onChange={(e) => {
              this.setState({
                username: e.target.value
              });
            }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name={this.password}
            rules={[{ required: true, message: "Please input your password!" }]}
            onChange={(e) => {
              this.setState({
                password: e.target.value
              });
            }}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            {...this.tailLayout}
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...this.tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                this.back();
              }}
            >
              返回主页
            </Button>
            <Button
              className="back"
              type="primary"
              htmlType="submit"
              onClick={() => {
                this.onFinish();
              }}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default connect((store) => {
  return {
    ...store.home
  };
})(login);
