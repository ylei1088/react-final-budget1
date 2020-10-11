import React, { Component } from "react";
import categories from "../components/categroies.js";
import Expense from "../components/Expense.js";

import "./categroy-buckets.css";


class WantsBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyLeft: this.props.wants,
    };
  }
  render() {
    let wantsBudget = this.props.wants;
    let categoryComponent = categories.wants.map((expense) => {
      return (
        <Expense
          expense={expense}
          category="wants"
          distribution={wantsBudget}
        />
      );
    });
    return (
      <div>
        <h2 className="category__bucket--title">{this.props.name} </h2>
        <h3 className="category__bucket--number">
          {this.props.wants}
        </h3>
        {categoryComponent}
      </div>
    );
  }
}

export default WantsBucket;