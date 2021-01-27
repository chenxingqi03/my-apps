import React, { Component } from "react";
import { Table } from "antd";
import { connect } from "dva";

@connect((store) => {
  return {
    ...store.test,
  };
})
class index extends Component {
  state = {
    testlistdata: [],
    columns: [
      {
        title: "课程ID",
        dataIndex: "subject_id",
      },
      {
        title: "课目",
        dataIndex: "subject_text",
      },
    ],
  };
  render() {
    const { columns } = this.state;
    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.props.test_usercurrlist}
          size="middle"
        />
      </div>
    );
  }
  componentDidMount() {
    this.get_testlistdata();
  }
  get_testlistdata() {
    this.props.dispatch({ type: "test/gettestlistdata" });
  }
}
export default index;
