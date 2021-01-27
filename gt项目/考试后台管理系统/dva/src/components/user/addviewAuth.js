import React, { Component } from 'react';
import {Radio,  Button,  Form,message,Select} from "antd";
import {_getAuthList} from "@/api/home"
import {_getViewList} from "@/api/home"
import {_addviewAuthList} from "@/api/home"

const layout = { labelCol: { span: 6 }, wrapperCol: { span: 16 } };
const tailLayout = { wrapperCol: { offset: 11, span: 16 } };
const {Option} = Select;
class addApiAuthority extends Component {
state = {
    authList:[],
    viewList:[],
    };
    onFinish = async (values) => {
    console.log("Success111:", values);
    let identity_id = values.identity_id
    let view_authority_id = values.view_authority_id
    console.log(identity_id,view_authority_id)
    let result = await _addviewAuthList({identity_id,view_authority_id})
    if(result.data.code){
        message.info('添加成功');
    }else{
        message.info(result.data.msg);
    }
    };
    changeName = (e) => { console.log(e.target.value); };
    onFinishFailed = (errorInfo) => { console.log("Failed:", errorInfo); };
    handleCancel = () => { console.log("handleCancel") };
    componentDidMount(){
          this.getList()
          this.getapiList()
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{ return };
    }
    getList = async()=>{
        const result = await _getAuthList()
        this.setState({ authList:result.data.data })
    }
    getapiList = async()=>{
        const resultList = await _getViewList()
        this.setState({ viewList:resultList.data.data })
    }
    render() {
        return (
            <li>
            <Radio.Group defaultValue="a" onChange={this.handleSizeChange}>
                <Radio.Button value="a">给身份添加视图权限</Radio.Button>
            </Radio.Group>
            <Form
                {...layout}
                ref={this.formRef}
                name="basic"
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                label="身份id"
                name="identity_id"
                rules={[
                    {
                    required: true,
                    message: "身份id"
                    }
                ]}
                >
                <Select  placeholder="Please select favourite colors">
                    {
                        this.state.authList.map(item=>{
                            return (
                                <Option key = {item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                            )
                        })
                    }
                </Select>
                </Form.Item>
                <Form.Item
                label="视图权限id"
                name="view_authority_id"
                rules={[
                    {
                    required: true,
                    message: "视图权限id"
                    }
                ]}
                >
                <Select  placeholder="Please select favourite colors">
                {
                        this.state.viewList.map(item=>{
                            return (
                                <Option key = {item.view_authority_id} value={item.view_authority_id}>{item.view_authority_text}</Option>
                            )
                        })
                }
                </Select>
                </Form.Item>
                <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit"> 确定 </Button>
                <Button htmlType="button" onClick={this.onReset}> 重置 </Button>
                </Form.Item>
            </Form>
            </li>
        );
    }
}

export default addApiAuthority;