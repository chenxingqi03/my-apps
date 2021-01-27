import React, { Component } from "react";
import RouterView from "@/router";
class Student extends Component {
  render() {
    const { routes, history ,menuAction} = this.props;
    return (
      <div>
        this is student
        <RouterView routes={routes} history={history} menuAction = {menuAction}></RouterView>
      </div>
    );
  }
}

export default Student;
