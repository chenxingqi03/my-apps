import React, { Component } from "react";
import { connect } from "dva";
import { Table, Button, message, Modal, Form, Input, Select } from "antd";
import copy from "copy-to-clipboard";
import { getuserviewsadd } from "@/api/home";
import { get_userlist, _postuserviews } from "@/api/user";

@connect((store) => {
  return {
    ...store.student,
    ...store.user,
  };
})
class userviews extends Component {
  formRef = React.createRef();
  state = {
    isModalVisible: false,
    layout: {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
    tailLayout: {
      wrapperCol: { offset: 8, span: 16 },
    },
    flag: false,
    // 用户展示数据
    sumnamelist: [],
    // 修改用户权限接收参数
    usernameobjone: "",
    usernameobjtwo: "",
  };

  render() {
    const columns = [
      {
        title: "ID",
        dataIndex: "view_authority_id",
        key: "name",
      },
      {
        title: "视图名称",
        dataIndex: "view_authority_text",
        key: "age",
      },
      {
        title: "视图ID",
        dataIndex: "view_id",
        key: "age",
        render: (text) => (
          <Button
            type="dashed"
            onDoubleClick={() => {
              this.textbtn(text);
            }}
          >
            {text}
          </Button>
        ),
      },
    ];
    const { Option } = Select;
    let { isModalVisible, tailLayout, layout, flag, sumnamelist } = this.state;
    return (
      <div className="userviews_con">
        <div className="userviews_header">
          <div className="userviews_top">
            <h4>视图权限展示</h4>
            <Button
              type="dashed"
              onClick={() => {
                this.btnviews();
              }}
            >
              添加视图
            </Button>
            <Button
              type="dashed"
              onClick={() => {
                this.btnuserviews();
              }}
            >
              给身份设置视图权限
            </Button>
          </div>
          {/* tab表格 */}
          <Table
            columns={columns}
            dataSource={this.props.userviewslist}
            // tab单行变色
            rowClassName={(record, index) => {
              let className = "light-row";
              if (index % 2 === 1) className = "dark-row";
              return className;
            }}
          />
          {/* 对话框 */}
          <Modal
            title={flag ? "添加视图" : "修改视图权限"}
            visible={isModalVisible}
            okText={flag ? "添加" : "确定"}
            cancelText="取消"
            onOk={() => {
              this.handleOk();
            }}
            onCancel={() => {
              this.handleCancel();
            }}
          >
            {/* 三木判【判断 */}
            {flag ? (
              <Form
                {...layout}
                name="basic"
                ref={this.formRef}
                initialValues={{ remember: true }}
                onFinish={(vel) => {
                  this.onFinish(vel);
                }}
              >
                <Form.Item
                  label="视图名称"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="视图ID&emsp;"
                  name="Username"
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
                  <Button
                    type="button"
                    htmlType="button"
                    onClick={() => {
                      this.onReset();
                    }}
                  >
                    清除
                  </Button>
                </Form.Item>
              </Form>
            ) : (
              <>
                <b>身份名称</b>
                <Select
                  style={{ width: "100%" }}
                  placeholder="请输入身份名称"
                  onChange={(val) => {
                    this.onGenderChange(val);
                  }}
                  allowClear
                >
                  {sumnamelist.map((item) => {
                    return (
                      <Option key={item.identity_id} value={item.identity_id}>
                        {item.identity_text}
                      </Option>
                    );
                  })}
                  {/* 设置用户权限下拉选项 */}
                </Select>
                <b>视图权限</b>
                <Select
                  style={{ width: "100%" }}
                  placeholder="请输入视图权限"
                  onChange={(val) => {
                    this.onGenderChangetwo(val);
                  }}
                  allowClear
                >
                  {this.props.userviewslist.map((items) => {
                    return (
                      <Option
                        key={items.view_authority_id}
                        value={items.view_authority_id}
                      >
                        {items.view_authority_text}
                      </Option>
                    );
                  })}
                </Select>
              </>
            )}
          </Modal>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getuserviews();
    // 用户展示数据
    this.getusernamelist();
  }
  getuserviews() {
    this.props.dispatch({ type: "student/getuserviews" });
  }
  // 剪切板
  textbtn(text) {
    copy(text, {
      debug: true,
      message: "Press #{key} to copy",
    });
    message.success(`${text}已经复制`);
  }

  // 获取展示用户数据
  async getusernamelist() {
    const result = await get_userlist();
    this.setState({
      sumnamelist: result.data.data,
    });
  }

  // 点击提加视图
  btnviews() {
    this.setState({
      isModalVisible: true,
      flag: true,
    });
  }
  // 给身份设置视图权限点击事件
  btnuserviews() {
    this.setState({
      isModalVisible: true,
      flag: false,
    });
  }

  // 下拉选择数据身份名称
  onGenderChange(value) {
    this.setState({
      usernameobjone: value,
    });
  }
  // 下拉选择数据视图权限
  onGenderChangetwo(value) {
    this.setState({
      usernameobjtwo: value,
    });
  }
  // 封装有个title的公共标题

  // 视图弹框
  async handleOk() {
    this.setState({
      isModalVisible: false,
    });
    if (!this.state.flag) {
      const result = await _postuserviews(
        this.state.usernameobjone,
        this.state.usernameobjtwo
      );
      if (result.data.code === 1) {
        message.success(result.data.msg);
        // 侧边栏的调用
        this.props.dispatch({ type: "user/getviewsdatalist" });
        console.log(1)
      } else {
        message.error(result.data.msg);
      }
    }
  }
  handleCancel() {
    this.setState({
      isModalVisible: false,
    });
  }

  // 提交
  async onFinish(val) {
    const result = await getuserviewsadd(val);
    if (result.data.code === 1) {
      message.success(result.data.msg);
      //重新加载页面
      this.getuserviews();
    } else {
      message.error(result.data.msg);
    }
  }
  // 清除
  onReset() {
    this.formRef.current.resetFields();
  }
}
export default userviews;
