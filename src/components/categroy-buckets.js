import React, { Component } from "react";

import NeedsBucket from "./needs-bucket";
import WantsBucket from "./wants-bucket";
import SavingsBucket from "./savings-bucket";

import "./categroy-buckets.css";

class CategoryBuckets extends Component {
  render() {
    const budget = this.props.budget;
    const data = {
      labels: ["needs", "Wants", "Savings"],
      datasets: [
        {
          data: [budget.needs, budget.wants, budget.savings],
        },
      ],
    };
    return (
      <div className="category__buckets">
        <NeedsBucket
          needs={this.props.budget.needs}
          name="Needs"
        />
        <WantsBucket wants={this.props.budget.wants} name="Wants" />
        <SavingsBucket savings={this.props.budget.savings} name="Savings" />
      </div>
    );
  }
}

export default CategoryBuckets;
