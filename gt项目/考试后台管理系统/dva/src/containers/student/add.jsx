import React, { Component } from "react";
import { Button, Form, Input ,message } from "antd";
import { _addStudent } from '../../api/home'
const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 12
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16
  }
};
class add extends Component {
  state = {
    isModalVisible: false,
    student_id:'',
    student_name:'',
    student_pwd:'',
  };
  onFinish = async (values) => {
    console.log("Success:", values);
    let result = await _addStudent(values) 
    console.log(result)
    message.info('添加成功');
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  onReset = () => {
    const [form] = Form.useForm();
    form.resetFields();
  }
  render() {
    
    return (
      <div>
        student add
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="学号"
            name="student_id"
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="姓名"
            name="student_name"
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="student_pwd"
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button htmlType="button" onClick={this.onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default add;
