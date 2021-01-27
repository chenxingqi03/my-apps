import React, { Component } from 'react';
import {Radio,  Button,  Form, Input,message} from "antd";
import {_addAuthority} from '../../api/home'

const layout = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 16
    }
  };
  const tailLayout = {
    wrapperCol: {
      offset: 11,
      span: 16
    }
  };
class addAuthority extends Component {
    state = {
        gutterKey: 1,
        vgutterKey: 1,
        colCountKey: 2,
      };
      onFinish = async (values) => {
        console.log("Success111:", values);
        let result = await _addAuthority(values.identity_text)
        console.log(result)

        if(result.data.code){
            message.info('添加成功');
        }else{
            message.info(result.data.msg);
        }
      };
      changeName = (e) => {
        console.log(e.target.value);
      };
      onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
      handleCancel = () => {
       console.log("handleCancel")
      };
    render() {
        return (
            <li>
                    <Radio.Group defaultValue="a" onChange={this.handleSizeChange}>
                        <Radio.Button value="a">添加身份</Radio.Button>
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
                        label="身份"
                        name="identity_text"
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
                        <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            确定
                        </Button>
                        <Button htmlType="button" onClick={this.onReset}>
                            重置
                        </Button>
                        </Form.Item>
                    </Form>
                    </li>
        );
    }
}

export default addAuthority;