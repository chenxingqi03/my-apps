import React, { Component } from "react";
import { Table, Button, Modal, Input, message } from "antd";
import { connect } from "dva";
import { studentbj, studentdelete } from "@/api/home";

@connect((store) => store.student)
class studentj extends Component {
  state = {
    isModalVisible: false,
    inone: "",
    intwo: "",
    intree: "",
  };
  render() {
    const columns = [
      {
        title: "学号",
        dataIndex: "student_id",
        key: "student_id",
      },
      {
        title: "姓名",
        dataIndex: "student_name",
        key: "student_name",
        responsive: ["md"],
      },
      {
        title: "密码",
        dataIndex: "student_pwd",
        key: "student_pwd",
        responsive: ["lg"],
      },
      {
        title: "操作",
        dataIndex: "student_in",
        key: "student_in",
        render: (e, data) => (
          <div>
            <Button
              type="primary"
              onClick={() => {
                this.menubj(data);
              }}
            >
              编辑
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => {
                this.menudelete(data);
              }}
            >
              删除
            </Button>
          </div>
        ),
      },
    ];
    const { isModalVisible, inone, intwo, intree } = this.state;
    return (
      <div>
        <Button
          style={{ background: "rgb(25, 137, 230)", color: "#fff" }}
          onClick={() => {
            this.menuaddto();
          }}
        >
          添加
        </Button>
        <Table
          className="tab"
          columns={columns}
          dataSource={this.props.datalist}
        />
        {/* 弹出框 */}
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
          cancelText="取消"
          okText="确定"
        >
          <p>
            <span>学号</span>
            <Input
              value={inone}
              ref="inone"
              onChange={(el) => this.inone(el)}
            />
          </p>
          <p>
            <span>姓名</span>
            <Input
              value={intwo}
              ref="intwo"
              onChange={(el) => this.intwo(el)}
            />
          </p>
          <p>
            <span>密码</span>
            <Input
              value={intree}
              ref="intree"
              onChange={(el) => this.intree(el)}
            />
          </p>
        </Modal>
      </div>
    );
  }
  componentDidMount() {
    // 触发dva仓库里面的方法
    this.dvastore();
  }

  //   封装触发dva仓库的事件
  dvastore = () => {
    this.props.dispatch({ type: "student/studentlist" });
  };
  //   编辑
  async menubj(data) {
    console.log(data)
    await this.setState({
      inone: data.student_id,
      isModalVisible: true,
      intwo: data.student_name,
      intree: data.student_pwd,
    });
  }

  //   删除
  async menudelete(data) {
    const result = await studentdelete(data.student_id);
    if (result.data.code === 1) {
      message.success(result.data.msg);
      this.dvastore();
    }
  }
  // 添加
  menuaddto() {
    this.props.history.push("/home/student/studbj");
  }

  // 确认
  async handleOk() {
    this.setState({
      isModalVisible: false,
    });
    let inpobj = {
      inone: this.state.inone,
      intwo: this.state.intwo,
      intree: this.state.intree,
    };
    const result = await studentbj({ ...inpobj });
    if (result.data.code === 1) {
      message.success(result.data.msg);
      this.dvastore();
    }
  }
  //   取消
  handleCancel() {
    this.setState({
      isModalVisible: false,
    });
  }
  //   输入框一
  inone(e) {
    this.setState({
      inone: e.target.value,
    });
  }
  //   输入框二
  intwo(e) {
    this.setState({
      intwo: e.target.value,
    });
  }
  //   输入框三
  intree(e) {
    this.setState({
      intree: e.target.value,
    });
  }
}
export default studentj;
