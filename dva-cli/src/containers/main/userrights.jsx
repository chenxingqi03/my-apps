import React, { Component } from "react";
import Routerviews from "@/router";

export default class userrights extends Component {
  render() {
    let { routes, history } = this.props;
    return <Routerviews routes={routes} history={history}></Routerviews>;
  }
}
