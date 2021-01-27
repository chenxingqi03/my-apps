import React, { Component } from 'react';
import { Button , Form, Input ,message,Select } from "antd";
import { connect } from 'dva'
import { _getQuestions} from "@/api/home.js"
const { TextArea } = Input;
const {Option} = Select;
  class type extends Component {
   
    onFinish = async (values) => {
      // console.log(result)
      let user_id = JSON.parse(localStorage.getItem("info")).user_id
      let result = await _getQuestions({...values,user_id})
      console.log(result)
      //获取到user_id 
      
      
      message.info('添加成功');
      
    };
    onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    onReset = () => {
      const [form] = Form.useForm();
      form.resetFields();
    }
    componentDidMount(){
      this.props.dispatch({type:'student/efcQuestionsType'})
      this.props.dispatch({type:'student/efcgetexamType'})
      this.props.dispatch({type:'student/efcgetsubject'})
    }
    render() {
    let layout = { labelCol: { span: 8, }, wrapperCol: { span: 12, }, }
    let { questionsType, subjectList, examType } = this.props;
        return (
            <div className="test">
                <Form {...layout} ref={this.formRef} name="control-hooks" onFinish={this.onFinish}>
            <Form.Item
              label="题干"
              name="title"
              rules={[
                {
                  required: true,
                  message: '请输入题目标题，不超过20个字符',
                },
              ]}
            >
              <Input placeholder='请输入题目标题，不超过20个字符'/>
            </Form.Item>

            <Form.Item
              label="题目主题"
              name="questions_stem"
              rules={[
                {
                  required: true,
                  message: '请输入题目主题',
                },
              ]}
            >
            <TextArea rows={8} />

            </Form.Item>
            <Form.Item name="questions_type_id" label="试题类型" rules={[
                {
                  required: true,
                  message: '请输入题目主题',
                },
              ]}> 
              <Select
                placeholder="请选择试题类型"
                onChange={this.onGenderChange}
                allowClear
              >
                {
                  questionsType.map(item => {
                    return (<Option key={item.questions_type_id}>{item.questions_type_text}</Option>)
                  })
                }
              </Select>
            </Form.Item>
            <Form.Item name="subject_id" label="课程类型" rules={[
                {
                  required: true,
                  message: '请输入题目主题',
                },
              ]}>
              <Select
                placeholder="请选择试题类型"
                onChange={this.onGenderChange}
                allowClear
              >
                {
                  subjectList.map(item => {
                    return (<Option key={item.subject_id}>{item.subject_text}</Option>)
                  })
                }
              </Select>
            </Form.Item>
            <Form.Item name="exam_id" label="考试类型" rules={[
                {
                  required: true,
                  message: '请输入题目主题',
                },
              ]}>
              <Select
                placeholder="请选择试题类型"
                onChange={this.onGenderChange}
                allowClear
              >
                {
                  examType.map(item => {
                    return (<Option key={item.exam_id}>{item.exam_name}</Option>)
                  })
                }
              </Select>
            </Form.Item>
            <Form.Item
              label="答案信息"
              name="questions_answer"
              rules={[
                {
                  required: true,
                  message: '请输入答案信息',
                },
              ]}
            >
                           <TextArea rows={8} />

            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{marginLeft:"780px"}}>
                提交
              </Button>
            </Form.Item>
          </Form>
            </div>
        );
    }
}
export default connect(store => store.student)(type)