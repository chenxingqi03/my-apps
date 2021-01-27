import React, { Component } from "react";
import {
  get_roomlist,
  get_roomput,
  get_roomdelete,
  get_roomadd,
} from "@/api/root";
import { Table, Button, Modal, Input, message } from "antd";
export default class roomaddto extends Component {
  state = {
    roomlist: [],
    isModalVisible: false,
    datas: {},
    inpput: "",
    inpadd: "",
    columns: [
      {
        title: "教室号",
        dataIndex: "room_text",
        key: "room_text",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "操作 ",
        render: (data) => (
          <>
            <Button
              type="primary"
              onClick={() => {
                this.plubtn(data);
              }}
            >
              修改
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => {
                this.btndelete(data);
              }}
            >
              删除
            </Button>
          </>
        ),
      },
    ],
    // 编辑+添加设置开关
    sump: true,
  };
  render() {
    let { roomlist, columns, isModalVisible, datas, sump, inpput } = this.state;
    return (
      <div className="room_div">
        <div className="room_con">
          <div className="room_top">
            <Button
              type="dashed"
              onClick={() => {
                this.roomputbtn();
              }}
            >
              添加教室号
            </Button>
          </div>
          <Table columns={columns} dataSource={roomlist} />
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
              <Input
                value={inpput}
                ref="inpput"
                onChange={(el) => this.btnput(el)}
              />
            ) : (
              <Input ref="inpadd" onChange={(el) => this.btnadd(el)} />
            )}
          </Modal>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.get_room_list();
  }
  async get_room_list() {
    const result = await get_roomlist();
    if (result.data.code) {
      this.setState({
        roomlist: result.data.data,
      });
    }
  }
  //   对话框
  async handleOk() {
    this.setState({
      isModalVisible: false,
    });

    if (this.state.sump) {
      // 修改教室号
      const result = await get_roomput(this.state.datas, this.state.inpput);
      //   判断修改是否成功
      if (result.data.code) {
        message.success(result.data.msg);
        // 重新渲染页面
        this.get_room_list();
      } else {
        message.error(result.data.msg);
      }
    } else {
      //   添加教室号
      const result = await get_roomadd(this.state.inpadd);
      //   判断添加是否成功
      if (result.data.code) {
        message.success(result.data.msg);
        // 重新渲染页面
        this.get_room_list();
      } else {
        message.error(result.data.msg);
      }
    }
  }
  // 取消
  handleCancel() {
    this.setState({
      isModalVisible: false,
    });
  }
  //   编辑
  plubtn(data) {
    this.setState({
      isModalVisible: true,
      datas: data,
      sump: true,
      inpput: data.room_text,
    });
  }
  //   编辑双向绑定
  btnput(el) {
    this.setState({
      inpput: el.target.value,
    });
  }
  //   删除
  async btndelete(data) {
    const result = await get_roomdelete(data.room_id);
    if (result.data.code) {
      message.success(result.data.msg);
      //   重新渲染页面
      this.get_room_list();
    } else {
      message.error(result.data.msg);
    }
  }
  //   添加教室
  roomputbtn() {
    this.setState({
      isModalVisible: true,
      sump: false,
    });
  }
  //   添加数据双向绑定
  btnadd(el) {
    this.setState({
      inpadd: el.target.value,
    });
  }
}
