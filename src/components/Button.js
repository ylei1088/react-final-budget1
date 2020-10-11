import React, { Component } from "react";
import "./button.css"

class Button extends Component {
  render() {
    return (
      <div className="button">
      <button {...this.props}>
      </button>
      </div>
    );
  }
}

export default Button;
