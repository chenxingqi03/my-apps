import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import { studentaddto } from "@/api/home";
export default class studbj extends Component {
  state = {
    layout: {
      labelCol: { span: 8 },
      wrapperCol: { span: 10 },
    },
    tailLayout: {
      wrapperCol: { offset: 8, span: 10 },
    },
  };
  render() {
    let { layout, tailLayout } = this.state;
    return (
      <div className="Formdiv">
        <Form
          {...layout}
          name="basic"
          initialValues={()=>{this.btn()}}
          onFinish={(val) => this.onFinish(val)}
          onFinishFailed={() => this.onFinishFailed()}
        >
          <Form.Item
            label="学号"
            name="username_id"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="姓名"
            name="username_name"
            ref="name"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="username_mima"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
  async onFinish(values) {
    const result = await studentaddto(values);
    console.log(result);
    if (result.data.code === 1) {
      message.success(result.data.msg);
    }
   
  }

  onFinishFailed(errorInfo) {
    if (!errorInfo) {
      message.error("内容不能为空");
    }
  }
}
