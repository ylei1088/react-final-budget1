import React, { Component } from "react";
import categories from "../components/categroies.js";
import Expense from "../components/Expense.js";

import "./categroy-buckets.css";



class SavingsBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyLeft: this.props.savings,
    };
  }

  render() {
    let savingsBudget = this.props.savings;
    let categoryComponent = categories.savings.map((expense) => {
      return (
        <Expense
          expense={expense}
          category="savings"
          distribution={savingsBudget}
        />
      );
    });
    return (
      <div>
        <h2 className="category__bucket--title">{this.props.name} </h2>
        <h3 className="category__bucket--number">
          {this.props.savings}
        </h3>
        {categoryComponent}
      </div>
    );
  }
}

export default SavingsBucket;
