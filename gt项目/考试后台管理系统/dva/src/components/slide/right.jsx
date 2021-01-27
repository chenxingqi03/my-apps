import React, { Component } from "react";

class slideRight extends Component {
  render() {
    return <div className='slide-right'>{this.props.children}</div>;
  }
}

export default slideRight;
