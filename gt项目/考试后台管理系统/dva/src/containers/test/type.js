import React, { Component } from "react";
import { connect } from "dva";
import { Table, Button, Modal, Form, Input} from "antd";
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
class type extends Component {
  state = {
    isModalVisible: false,
    columns: [
      {
        title: "类型ID",
        dataIndex: "questions_type_id",
        key: "questions_type_id"
      },
      {
        title: "类型名称",
        dataIndex: "questions_type_text",
        key: "questions_type_text"
      },
    ],
    student_name: "111",
    student_pwd: "1qaz!AZ",
    student_id: "111"
  };
  //删除
  
  //编辑
  
  componentDidMount() {
    this.props.dispatch({ type: "student/efcgetalltypeList" });
  }

  changeName = (e) => {
    console.log(e.target.value);
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
    this.setState({
      isModalVisible: false
    });
  };
  formRef = React.createRef()
  render() {
    return (
      <div>
        <h3>试题分类</h3>
        <Button type="primary">添加类型</Button>

        <Modal
          title="Basic Modal"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            
            {...layout}
            ref={this.formRef}
            name="basic"
            initialValues={{
              student_id:this.state.student_id,
              student_name: this.state.student_name,
              student_pwd:this.state.student_pwd
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="学号"
              name="questions_type_id"
              rules={[
                {
                  required: true,
                  message: "Please input your username!"
                }
              ]}
            >
              <Input value={this.state.student_id} />
            </Form.Item>
            <Form.Item
              label="姓名"
              name="questions_type_text"
              rules={[
                {
                  required: true,
                  message: "Please input your username!"
                }
              ]}
            >
              <Input
                value={this.state.student_name}
                onChange={this.changeName}
              />
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
              <Input value={this.state.student_pwd} />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={this.onReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <div className="listTop">
          {/* <Button type="primary" onClick={this.showModal}>
            添加学生
          </Button> */}
        </div>
        <Table
          rowKey={(record) => record.questions_type_id}
          columns={this.state.columns}
          dataSource={this.props.testList}
        />
      </div>
    );
  }
}
export default connect((store) => { return store.student; })(type);
