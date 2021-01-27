import React, { Component } from "react";
import { connect } from "dva";
import { Table, Button, Modal, Input, message } from "antd";
import {getuseradd} from '@/api/home'

@connect((store) => store.student)
class userrole extends Component {
  state = {
    isModalVisible: false,
    inone: "",
  };
  render() {
    const columns = [
      {
        title: "id",
        dataIndex: "identity_id",
        key: "identity_id",
      },
      {
        title: "身份",
        dataIndex: "identity_text",
        key: "identity_text",
      },
    ];
    let { isModalVisible } = this.state;
    return (
      <div className="userrole">
        <div className="user_conter">
          <div className="user_top">
            <h4>用户权限展示</h4>
            <Button
              type="primary"
              onClick={() => {
                this.namebtn();
              }}
            >
              添加用户
            </Button>
          </div>
          {/* tab表格 */}
          <Table columns={columns} dataSource={this.props.usernamelist} rowKey={"id"} />
          <Modal
            title="用户权限"
            visible={isModalVisible}
            cancelText="取消"
            okText="确定"
            onOk={() => {
              this.handleOk();
            }}
            onCancel={() => {
              this.handleCancel();
            }}
          >
            <p>
              <Input
                placeholder="请输入身份"
                ref="inone"
                onChange={(el) => this.inp(el)}
              />
            </p>
          </Modal>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.get_user();
  }
  get_user() {
    this.props.dispatch({ type: "student/getusername" });
  }
  namebtn() {
    this.setState({
      isModalVisible: true,
    });
  }

  // 弹框

  // 用户身份处理
  async handleOk() {
    this.setState({
      isModalVisible: false,
    });
    const result = await getuseradd(this.state.inone);
    if(result.data.code===1){
      message.success(result.data.msg);
      this.get_user();
    }else{
      message.error(result.data.msg);
    }
  }

  handleCancel() {
    this.setState({
      isModalVisible: false,
    });
  }
  // 输入框
  inp(e) {
    this.setState({
      inone: e.target.value,
    });
  }
}
export default userrole;
