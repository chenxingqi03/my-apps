import React, { Component } from "react";
import { connect } from "dva";
import {
  Skeleton,
  Card,
  Avatar,
  Button,
  Modal,
  Form,
  Input,
  Select,
  message,
} from "antd";
import { getuserapi_add } from "@/api/test";

@connect((store) => {
  return {
    ...store.test,
  };
})
class papersaddto extends Component {
  state = {
    loading: true,
    isModalVisible: false,
    layout: {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    },
    tailLayout: {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    },
    // 输入框的数据
    inpdata: {},
  };
  render() {
    const { Meta } = Card;
    const { Option } = Select;
    const { loading, isModalVisible, layout } = this.state;
    return (
      <div className="testlist_div">
        <Button
          type="primary"
          onClick={() => {
            this.testbtn();
          }}
        >
          添加试题
        </Button>
        <div className="testlist_con">
          {this.props.testlist.map((item, index) => {
            return (
              <Card
                style={{
                  width: "100%",
                  height: "130px",
                  marginTop: "5px",
                  overflow: "hidden",
                }}
                loading={!loading}
                onChange={(checked) => {
                  this.onChange(checked);
                }}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={`${item.title}---${item.exam_name}`}
                  description={`${item.questions_stem}`}
                />
              </Card>
            );
          })}
          {/* <Skeleton loading={!loading} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton> */}
        </div>
        <Modal
          title="添加试题"
          visible={isModalVisible}
          onOk={() => {
            this.handleOk();
          }}
          onCancel={() => {
            this.handleCancel();
          }}
          cancelText="取消"
          okText="确定"
        >
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onValuesChange={(changedValues, allValues) => {
              this.formValues(changedValues, allValues);
            }}
          >
            <Form.Item
              label="试题类型ID"
              name="test_usertype"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Select style={{ width: "100%" }}  >
                {this.props.test_usertypelist.map((item) => {
                  return (
                    <Option
                      key={item.questions_type_id}
                      value={item.questions_type_id}
                    >
                      {item.questions_type_text}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="题干"
              name="test_userstem"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="课程ID"
              name="test_usersurr"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Select style={{ width: "100%" }} defaultValue="哈哈">
                {this.props.test_usercurrlist.map((itm) => {
                  return (
                    <Option key={itm.subject_id} value={itm.subject_id}>
                      {itm.subject_text}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="考试类型"
              name="test_examtype"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Select style={{ width: "100%" }}>
                {this.props.test_userexamlist.map((items) => {
                  return (
                    <Option key={items.exam_id} value={items.exam_id}>
                      {items.exam_name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="题目答案"
              name="test_question"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="试题的标题"
              name="test_usertext"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
  // 初始化生命周期
  componentDidMount() {
    //  初始化调用
    this.get_tset_list();
  }
  // 封装获取试题所有数据列表
  get_tset_list() {
    this.props.dispatch({ type: "test/gettestlist" });
    this.props.dispatch({ type: "test/getesttypelist" });
    this.props.dispatch({ type: "test/gettestlistdata" });
    this.props.dispatch({ type: "test/gettestexamlistdata" });
  }

  onChange = (checked) => {
    console.log(checked);
    this.setState({ loading: !checked });
  };

  // 弹框
  testbtn() {
    this.setState({
      isModalVisible: true,
    });
    
  }
  // 点击确定
  async handleOk() {
    this.setState({
      isModalVisible: false,
    });
    const result = await getuserapi_add(this.state.inpdata);
    if(result.data.code===1){
      this.props.dispatch({ type: "test/gettestlist" });
      message.success(result.data.msg)
    }else{
      message.error(result.data.msg);
    }
  }
  // 表单数据
  formValues(t, y) {
    this.setState({
      inpdata: y,
    });
    // console.log(this.state.inpdata)
  }

  handleCancel() {
    this.setState({
      isModalVisible: false,
    });
  }
}
export default papersaddto;
