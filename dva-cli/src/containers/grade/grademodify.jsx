import React, { Component } from "react";
import { get_gradlist } from "@/api/grad";
import { Table, Button, Modal, Input, message, Form } from "antd";

export default class grademodify extends Component {
  state = {
    gredlist: [],
    columns: [
      {
        title: <b>班级名</b>,
        dataIndex: "grade_name",
        key: "grade_name",
        render: (text) => <a>{text}</a>,
      },
      {
        title: <b>课程名</b>,
        dataIndex: "subject_text",
        key: "subject_text",
        responsive: ["md"],
      },
      {
        title: <b>教室号</b>,
        dataIndex: "room_text",
        key: "room_text",
        responsive: ["lg"],
      },
      {
        title: <b>操作</b>,
        render: (data) => (
          <>
            <span
              style={{
                color: "rgb(8, 100, 206)",
                cursor: "pointer",
                userSelect: "none",
              }}
              onClick={() => {
                this.gradput(data);
              }}
            >
              修改
            </span>
            |
            <span
              style={{
                color: "rgb(8, 100, 206)",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              删除
            </span>
          </>
        ),
      },
    ],
    isModalVisible: false,
    sump: true,
    layout: {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
    // tailLayout: {
    //   wrapperCol: { offset: 8, span: 16 },
    // },
  };
  render() {
    let {
      gredlist,
      columns,
      isModalVisible,
      sump,
      layout,
    } = this.state;
    return (
      <div className="grad_div">
        <div className="grad_top"></div>
        <Table columns={columns} dataSource={gredlist} />
        <Modal
          title={sump ? "修改教室号" : "添加教室号"}
          visible={isModalVisible}
          onOk={() => {
            this.handleOk();
          }}
          onCancel={() => {
            this.handleCancel();
          }}
          okText={sump ? "确认" : "添加"}
          cancelText="取消"
        >
          {sump ? (
            <>
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={() => {
                  this.onFinish();
                }}
                onFinishFailed={() => {
                  this.onFinishFailed();
                }}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Form>
            </>
          ) : (
            <>添加</>
          )}
        </Modal>
      </div>
    );
  }
  componentDidMount() {
    this.get_grad_list();
  }
  //   获取已经分配好的班级
  async get_grad_list() {
    const result = await get_gradlist();
    this.setState({
      gredlist: result.data.data,
    });
  }
  //   修改
  gradput(data) {
    this.setState({
      isModalVisible: true,
      sump: true,
    });
  }
  //   弹出框确定
  handleOk() {
    this.setState({
      isModalVisible: false,
    });
  }
  // 取消
  handleCancel() {
    this.setState({
      isModalVisible: false,
    });
  }
  //   From表单
  onFinish(values) {
    console.log("Success:", values);
  }

  onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }
}
