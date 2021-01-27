import React, { Component } from "react";
import RouterView from "@/router";
class User extends Component {
  render() {
    const { routes, history } = this.props;
    return (
      <div>
        this is User
        <RouterView routes={routes} history={history}></RouterView>
      </div>
    );
  }
}

export default User;
