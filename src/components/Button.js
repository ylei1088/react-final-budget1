import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button {...this.props}>
        <i className="large calculator icon"></i>
      </button>
    );
  }
}

export default Button;
