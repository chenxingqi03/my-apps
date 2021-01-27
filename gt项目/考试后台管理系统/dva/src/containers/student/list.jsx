import React, { Component } from "react";
import { connect } from "dva";
import { Table, Space, Button, Modal, Form, Input,message} from "antd";
import { _editStudent} from '../../api/home'
import { _delStudent} from '../../api/home'
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
class student extends Component {
  
  
  state = {
    isModalVisible: false,
    columns: [
      {
        title: "学号",
        dataIndex: "student_id",
        key: "student_id"
      },
      {
        title: "姓名",
        dataIndex: "student_name",
        key: "student_name"
      },
      {
        title: "密码",
        dataIndex: "student_pwd",
        key: "student_pwd"
      },
      {
        title: "操作",
        key: "room_id",
        render: (text, record) => (
          <Space size="middle">
            <Button type="primary" onClick={()=>{this.edit(text,record)}}>
              编辑
            </Button>
            <Button danger onClick = {()=>{this.remove((text))}}>删除</Button>
          </Space>
        )
      }
    ],
    student_name: "111",
    student_pwd: "1qaz!AZ",
    student_id: "111"
  };
  //删除
  remove = async (text)=>{
    console.log(text)
    let result = await _delStudent(text.student_id)
    message.info(result.data.msg);
    //再次请求数据 学生列表 更新数据
    this.props.dispatch({ type: "student/getStudentList" });
  }
  //编辑
  edit = (text,record) => {
    //点击编辑按钮 修改状态
    this.setState({
      student_name: text.student_name,
      student_pwd: text.student_pwd,
      student_id: text.student_id
    })
    //同步表单的初始值
    setTimeout(() => {
      this.formRef.current.setFieldsValue({
              student_name: text.student_name,
              student_pwd: text.student_pwd,
              student_id: text.student_id
               
        })
    }, 10);
    
    this.setState({ isModalVisible: true });
    
  };
  componentDidMount() {
    this.props.dispatch({ type: "student/getStudentList" });
  }
  onFinish = async (values) => {
    console.log("Success:", values);
    let result = await _editStudent(values)
    console.log(result)
    message.info('编辑成功');
    //再次请求数据 学生列表 更新数据
    this.props.dispatch({ type: "student/getStudentList" });
  };
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
        <h3>学生管理</h3>
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
              name="student_id"
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
              name="student_name"
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
          rowKey={(record) => record.student_id}
          columns={this.state.columns}
          dataSource={this.props.studentList}
        />
      </div>
    );
  }
}
export default connect((store) => { return store.student; })(student);
