import React, { Component } from 'react';
import { connect } from "dva";
import {Modal ,Collapse ,Tag  ,Button , Form,Select,message} from "antd";
import {_testSearch} from '@/api/home.js'
const {Option} = Select;

const { Panel } = Collapse
function callback(key) {
    // console.log(key);
  }
class list extends Component {
    state={
        tabShow:true,
        isModalVisible:false,
        student_id:'',
        student_name:'',
        student_pwd:'',
    }
    componentDidMount() {
        this.props.dispatch({ type: "student/efcgetallexamList" });
        this.props.dispatch({type:'student/efcQuestionsType'})
      this.props.dispatch({type:'student/efcgetexamType'})
      this.props.dispatch({type:'student/efcgetsubject'})
      }
      onFinish = async (values) => {
        // let user_id = JSON.parse(localStorage.getItem("info")).user_id
        let result = await _testSearch(values)
        // //获取到user_id 
        this.props.dispatch({ type: "student/getallexamList" ,payload:result.data.data});
        message.info('搜索成功');
      }
    tabShow=()=>{
          console.log(111);
          this.setState({
            tabShow:!this.state.tabShow
          })
      }
    showModal = () => {
        console.log(111);
        console.log(this.state.isModalVisible);
           this.setState({ isModalVisible:true })
    };
    
     handleOk = () => {
        this.setState({ isModalVisible:false })

    };
    
     handleCancel = () => {
        this.setState({ isModalVisible:false })

    };
    onResult = () => {
        console.log(111)
        this.props.dispatch({ type: "student/efcgetallexamList" });

      }
    render() {
        let {isModalVisible} = this.state
        let { questionsType, subjectList, examType } = this.props;
        let layout = { labelCol: { span: 8, }, wrapperCol: { span: 12, }, }
        return (
            <div className="test">
                 <Form {...layout} ref={this.formRef} name="control-hooks" onFinish={this.onFinish} style={{display:"flex"}}>
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
                    required: false,
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
                    required: false,
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
            
                <Form.Item>
                <Button type="primary" htmlType="submit">
                    筛选
                </Button>
                </Form.Item>
                <Button type="primary"  onClick={()=>{this.onResult()}}>
                    重置
                </Button>
               
            </Form>
                <h3>试题列表</h3>
                {/* <Button type="primary" onClick={()=>{this.showModal()}}>
                添加试题
                </Button> */}
                <Modal title="Basic Modal" visible={isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                
                </Modal>
                <div className="content">
                    {
                        this.props.allexamList.map((item,index)=>{
                            return (
                                <Collapse key={index} defaultActiveKey={['1']} onChange={callback}>
                                    <Panel header={item.title} key={index}>
                                    <ul>
                                        <li>
                                            <Tag color="magenta">{item.questions_type_text}</Tag>
                                            <Tag color="red">{item.exam_name}</Tag>
                                            <Tag color="volcano">{item.subject_text}</Tag>
                                        </li>
                                        <li style={{fontWeight:"800",fontSize:"24px"}}>
                                            {item.title}
                                        </li>
                                        <li>
                                            {item.questions_stem}
                                        </li>
                                    </ul>
                                    </Panel>
                                    
                                </Collapse>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}



export default connect((store) => { return store.student; })(list)
