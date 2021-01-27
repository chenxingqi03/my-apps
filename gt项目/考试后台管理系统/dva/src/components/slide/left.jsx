import React, { Component } from "react";

class slideLeft extends Component {
  render() {
    return <div className="slide-left">{this.props.children}</div>;
  }
}

export default slideLeft;
