import React, { Component } from "react";
import { connect } from "dva";
import { Table,message,Radio ,Tooltip } from "antd";
import copy from 'copy-to-clipboard';

class user_authority extends Component {
  state = {
    isModalVisible: false,
    size: 'large',
    rowKeyId:"user_id",
    columns: [
        {
          title: "用户名",
          dataIndex: "user_name",
          key: "user_name"
        },
        {
          title: "密码",
          dataIndex: "user_pwd",
          key: "user_pwd",
          render: (text, record) => (
            <Tooltip title="双击复制">
            <span 
            className= "spanCopy"
            onDoubleClick = {()=>{ this.copyholder(record.user_pwd) }}
            >
              {record.user_pwd}
            </span>
            </Tooltip>
          )
        },
        {
          title: "身份",
          dataIndex: "identity_text",
          key: "identity_text"
        },
        
      ],
    student_name: "111",
    student_pwd: "1qaz!AZ",
    student_id: "111",

    tabList:[
        {
            text:'用户数据',
            api:'/user/user',
            key:'user_id',
            columns: [
                {
                  title: "用户名",
                  dataIndex: "user_name",
                  key: "user_name"
                },
                {
                  title: "密码",
                  dataIndex: "user_pwd",
                  key: "user_pwd",
                  render: (text, record) => (
                    <Tooltip title="双击复制">
                    <span 
                    className= "spanCopy"
                    onDoubleClick = {()=>{ this.copyholder(record.user_pwd) }}
                    >
                      {record.user_pwd}
                    </span>
                    </Tooltip>
                  )
                },
                {
                  title: "身份",
                  dataIndex: "identity_text",
                  key: "identity_text"
                }
              ],
        },
        {
            text:'身份数据',
            api:'/user/identity',
            key:'identity_id',
            columns: [
                {
                  title: "身份id",
                  dataIndex: "identity_id",
                  key: "identity_id",
                },
                {
                  title: "身份",
                  dataIndex: "identity_text",
                  key: "identity_text"
                }
              ],
        },
        {
            text:'api接口权限',
            api:'/user/api_authority',
            key:'api_authority_id',
            columns: [
                {
                    title: "接口权限id",
                    dataIndex: "api_authority_id",
                    key: "api_authority_id"
                },
                {
                  title: "接口描述",
                  dataIndex: "api_authority_text",
                  key: "api_authority_text"
                },
                {
                    title: "接口地址",
                    dataIndex: "api_authority_url",
                    key: "api_authority_url",
                    render: (text, record) => (
                      <Tooltip title="双击复制">
                      <span 
                      className= "spanCopy"
                      onDoubleClick = {()=>{ this.copyholder(record.api_authority_url) }}
                      >
                        {record.api_authority_url}
                      </span>
                      </Tooltip>
                    )
                },
                {
                  title: "接口请求方式",
                  dataIndex: "api_authority_method",
                  key: "api_authority_method",
                  
                }
              ],
        },
        {
            text:'身份和api接口关系',
            api:'/user/identity_api_authority_relation',
            key:'identity_api_authority_relation_id',
            columns: [
                {
                    title: "身份和api接口关系id",
                    dataIndex: "identity_api_authority_relation_id",
                    key: "identity_api_authority_relation_id"
                },
                {
                  title: "接口描述",
                  dataIndex: "api_authority_text",
                  key: "api_authority_text"
                },
                {
                    title: "接口地址",
                    dataIndex: "api_authority_url",
                    key: "api_authority_url",
                    render: (text, record) => (
                      <Tooltip title="双击复制">
                      <span 
                      className= "spanCopy"
                      onDoubleClick = {()=>{ this.copyholder(record.api_authority_url) }}
                      >
                        {record.api_authority_url}
                      </span>
                      </Tooltip>
                    )
                },
                {
                  title: "接口请求方式",
                  dataIndex: "api_authority_method",
                  key: "api_authority_method"
                }
              ],
        },
        {
            text:'视图权限',
            api:'/user/view_authority',
            key:'view_authority_id',
            columns: [
                {
                    title: "视图权限id",
                    dataIndex: "view_authority_id",
                    key: "view_authority_id"
                },
                {
                  title: "视图描述",
                  dataIndex: "view_authority_text",
                  key: "view_authority_text"
                },
                {
                    title: "视图id",
                    dataIndex: "view_id",
                    key: "view_id",
                    render: (text, record) => (
                      <Tooltip title="双击复制">
                      <span 
                      className= "spanCopy"
                      onDoubleClick = {()=>{ this.copyholder(record.view_id) }}
                      >
                        {record.view_id}
                      </span>
                      </Tooltip>
                    )
                }
              ],
        },
        {
            text:'身份和视图权限关系',
            api:'/user/identity_view_authority_relation',
            key:'identity_view_authority_relation_id',
            columns: [
                {
                    title: "身份和视图权限关系id",
                    dataIndex: "identity_view_authority_relation_id",
                    key: "identity_view_authority_relation_id"
                },
                {
                  title: "视图描述",
                  dataIndex: "view_authority_text",
                  key: "view_authority_text"
                },
                {
                    title: "视图id",
                    dataIndex: "view_id",
                    key: "view_id",
                    render: (text, record) => (
                      <Tooltip title="双击复制">
                      <span 
                      className= "spanCopy"
                      onDoubleClick = {()=>{ this.copyholder(record.view_id) }}
                      >
                        {record.view_id}
                      </span>
                      </Tooltip>
                    )
                },
                
                {
                    title: "身份",
                    dataIndex: "identity_text",
                    key: "identity_text"
                  }
              ],
        },

    ]
  };
  
  componentDidMount() {
    this.props.dispatch({ type: "student/efcgetUserList" ,api:'/user/user'});
  }
  copyholder = (val)=>{
    console.log(val);
    copy(val, {
      debug: true,
      message: 'Press #{key} to copy',
    });
  }
  onFinish = async (values) => {
    console.log("Success:", values);
    message.info('编辑成功');
    //再次请求数据 学生列表 更新数据
    this.props.dispatch({ type: "student/getStudentList" });
  };
  changeTab = (val,index)=>{
      console.log(val);
      this.props.dispatch({ type: "student/efcgetUserList" ,api:val});
      this.setState({
        columns:this.state.tabList[index].columns,
        rowKeyId:this.state.tabList[index].key
      })

  }
  formRef = React.createRef()
  render() {
    return (

      <div>
        <h3>用户展示</h3>
        <Radio.Group defaultValue="a" onChange={this.handleSizeChange}>
          {
                this.state.tabList.map((item,index)=>{
                    return (
                        <Radio.Button buttonStyle="outline" key={index} value={item.key} onClick = {()=>{this.changeTab(item.api,index)}}>{item.text}</Radio.Button>
                    )
                })
            }
        </Radio.Group>
        <div>
            用户数据
        </div>
        <div className="listTop">
          {/* <Button type="primary" onClick={this.showModal}>
            添加学生
          </Button> */}
        </div>
        <Table
          rowKey={(record) => record[`${this.state.rowKeyId}`]}
        //   rowKey={(record) => record["user_id"]}
          columns={this.state.columns}
          dataSource={this.props.UserList}
        />
      </div>
    );
  }
}
export default connect((store) => { return store.student; })(user_authority);
