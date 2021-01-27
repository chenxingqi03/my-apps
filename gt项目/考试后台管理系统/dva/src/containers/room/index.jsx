import React, { Component } from "react";
import RouterView from "@/router";
class Student extends Component {
  render() {
    const { routes, history } = this.props;
    return (
      <div>
        this is room
        <RouterView routes={routes} history={history}></RouterView>
      </div>
    );
  }
}

export default Student;
