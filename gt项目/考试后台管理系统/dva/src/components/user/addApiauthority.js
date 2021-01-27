import React, { Component } from 'react';
import {Radio,  Button,  Form,message,Select} from "antd";
import {_getAuthList} from "@/api/home"
import {_getApiList} from "@/api/home"
import {_addapiAuthList} from "@/api/home"

const layout = { labelCol: { span: 6 }, wrapperCol: { span: 16 } };
const tailLayout = { wrapperCol: { offset: 11, span: 16 } };
const {Option} = Select;
class addApiAuthority extends Component {
state = {
    authList:[],
    apiList:[],
    };
    onFinish = async (values) => {
    console.log("Success111:", values);
    let identity_id = values.api_authority_id[0]
    let api_authority_id = values.api_authority_id[0]
    let result = await _addapiAuthList({identity_id,api_authority_id})
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
        const resultList = await _getApiList()
        this.setState({ apiList:resultList.data.data })
    }
    render() {
        return (
            <li>
            <Radio.Group defaultValue="a" onChange={this.handleSizeChange}>
                <Radio.Button value="a">给身份添加api接口权限</Radio.Button>
            </Radio.Group>
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
                label="身份id"
                name="identity_id"
                rules={[
                    {
                    required: true,
                    message: "Please input your username!"
                    }
                ]}
                >
                <Select placeholder="Please select favourite colors">
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
                label="api接口地址"
                name="api_authority_id"
                rules={[
                    {
                    required: true,
                    message: "Please input your username!"
                    }
                ]}
                >
                <Select placeholder="Please select favourite colors">
                {
                        this.state.apiList.map(item=>{
                            return (
                                <Option key = {item.api_authority_id} value={item.api_authority_id}>{item.api_authority_text}</Option>
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