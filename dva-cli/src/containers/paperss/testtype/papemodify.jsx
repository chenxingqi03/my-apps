import React, { Component } from "react";
// import { getesttypelist } from "@/api/test";
import { Table } from "antd";
import { connect } from "dva";

@connect((store) => {
  return {
    ...store.test,
  };
})
class papersmodify extends Component {
  state = {
    columns: [
      {
        title: "ID",
        dataIndex: "questions_type_id",
        key: "questions_type_id",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "顺序",
        dataIndex: "questions_type_sort",
        key: "questions_type_sort",
      },
      {
        title: "类型",
        dataIndex: "questions_type_text",
        key: "questions_type_text",
      },
    ],
  };
  render() {
    const { columns } = this.state;
    return (
      <div>
        <Table columns={columns} dataSource={this.props.test_usertypelist} />
      </div>
    );
  }
  componentDidMount() {
    this.get_testtypelist();
  }

   get_testtypelist() {
    this.props.dispatch({ type: "test/getesttypelist" });
  }
}
export default papersmodify;
