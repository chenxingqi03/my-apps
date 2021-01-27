import React, { Component } from "react";
import { connect } from "dva";
import { Table, Button, message, Modal, Form, Input } from "antd";
import copy from "copy-to-clipboard";
import { getuserapiadd } from "@/api/home";

@connect((store) => store.student)
class userapi extends Component {
  state = {
    isModalVisible: false,
    layout: {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
    tailLayout: {
      wrapperCol: { offset: 8, span: 16 },
    },
  };
  render() {
    const columns = [
      {
        title: "ID",
        dataIndex: "api_authority_id",
        key: "name",
      },
      {
        title: "接口名称",
        dataIndex: "api_authority_text",
        key: "age",
        responsive: ["md"],
      },
      {
        title: "接口类型",
        dataIndex: "api_authority_method",
        key: "address",
        responsive: ["lg"],
      },
      {
        title: "接口地址",
        dataIndex: "api_authority_url",
        key: "address",
        responsive: ["lg"],
        render: (text) => (
          <Button type="dashed" onDoubleClick={() => this.apibtn(text)}>
            {text}
          </Button>
        ),
      },
    ];
    let { isModalVisible, layout, tailLayout } = this.state;
    return (
      <div className="userapi_con">
        <div className="userapi_main">
          <div className="userapi_top">
            <h4>接口权限展示</h4>
            <Button
              type="dashed"
              onClick={() => {
                this.userapibtn();
              }}
            >
              +添加
            </Button>
          </div>
          <Table columns={columns} dataSource={this.props.userapilist} />
          <Modal
            title="接口权限"
            visible={isModalVisible}
            okText="确定"
            cancelText="取消"
            onOk={() => {
              this.handleOk();
            }}
            onCancel={() => {
              this.handleCancel();
            }}
          >
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={(vel) => {
                this.onFinish(vel);
              }}
              onFinishFailed={() => {
                this.onFinishFailed();
              }}
            >
              <Form.Item
                label="接口名称"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="接口类型"
                name="Username"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="接口地址"
                name="UserURL"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.get_userapi();
  }
  get_userapi() {
    this.props.dispatch({ type: "student/getuserapi" });
  }
  apibtn(text) {
    copy(text, {
      debug: true,
    });
    message.success(`${text}复制成功！`);
  }

  userapibtn() {
    this.setState({
      isModalVisible: true,
    });
  }
  // 弹框
  handleOk() {
    this.setState({
      isModalVisible: false,
    });
  }

  handleCancel() {
    this.setState({
      isModalVisible: false,
    });
  }

  // From表单
  async onFinish(values) {
    const result = await getuserapiadd(values);
    if (result.data.code === 1) {
      message.success(result.data.msg);
       this.get_userapi();
    } else {
      message.error(result.data.msg);
    }
  }

  onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }
}
export default userapi;
