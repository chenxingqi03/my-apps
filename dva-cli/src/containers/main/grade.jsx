import React, { Component } from "react";
import Routerviews from "@/router";
export default class grade extends Component {
  render() {
    return (
      <Routerviews
        routes={this.props.routes}
        history={this.props.history}
      ></Routerviews>
    );
  }
}
