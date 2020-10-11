import React, { Component } from "react";

import categories from "../components/categroies.js";
import Expense from "../components/Expense.js";

import "./categroy-buckets.css";


class NeedsBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyLeft: this.props.needs,
    };
  }

  render() {
    let needsBudget = this.props.needs;
    let categoryComponent = categories.needs.map((expense) => {
      return (
        <Expense
          expense={expense}
          category="needs"
          distribution={needsBudget}
        />
      );
    });
    return (
      <div>
        <h2 className="category__bucket--title">{this.props.name} </h2>
        <h3 className="category__bucket--number">
          {this.props.needs}
        </h3>
        {categoryComponent}

      </div>
    );
  }
}

export default NeedsBucket;
