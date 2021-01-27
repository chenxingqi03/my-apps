
import React, { Component } from "react";
// import { getroomlist } from "@/api/home";
import { connect } from "dva";

import { Table, Space, Button, Modal, Form, Input } from "antd";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};
class view_authority extends Component {
  state = {
    isModalVisible: false,
    columns: [
      {
        title: "view_authority_id",
        dataIndex: "view_authority_id",
      },
      {
        title: "view_authority_text",
        dataIndex: "view_authority_text",
      },{
        title: "view_id",
        dataIndex: "view_id",
      },
      {
        title: "操作",
        render: (text, record) => (
          <Space size="middle">
            <div>删除</div>
          </Space>
        )
      }
    ]
  };
  componentDidMount() {
    this.props.dispatch({ type: "student/efcgetViewList" });
  }
  onFinish = async (values) => {
    console.log("Success:", values);
    //发请求
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  showModal = () => {
    this.setState({ isModalVisible: true });
  };
  handleOk = () => {
    this.setState({ isModalVisible: false });
  };
  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };
  render() {
    return (
      <div>
        <h3>视图权限管理</h3>
        <Modal
          title="Basic Modal"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
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
              label="view_authority_id"
              name="view_authority_id"
              rules={[
                {
                  required: true,
                  message: "Please input your view_authority_id!"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <div className="listTop">
          <Button type="primary" onClick={this.showModal}>
            添加视图
          </Button>
        </div>
        <Table
          rowKey={(record) => record.view_authority_id}
          columns={this.state.columns}
          dataSource={this.props.ViewList}
        />
      </div>
    );
  }
}

export default connect((store) => {
  return store.student;
})(view_authority);
