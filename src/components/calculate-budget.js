import React, { Component } from "react";
import Button from "./button";
import BudgetRule from "./budget-rule";

class calculateBudget extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      salary: 0,
    };
    Object.assign(this.state, this.budgetRule);
    this.calculateBudget = this.calculateBudget.bind(this);
    this.getUserSalary = this.getUserSalary.bind(this);
  }

  getUserSalary(event) {
    const salary = +event.target.value;

    if (isNaN(salary)) {
      this.setState({
        salary: 0,
        error: true,
      });
    } else {
      this.setState({
        salary: salary,
        error: false,
      });
    }
  }

  calculateBudget() {
    const salary = Number(this.state.salary);

    const essentials = (salary * this.udgetRule.essentials).toFixed(1);
    const wants = (salary * this.budgetRule.wants).toFixed(1);
    const savings = (salary * this.budgetRule.savings).toFixed(1);
    this.setState({
      clicked: true,
      essentials: essentials,
      wants: wants,
      savings: savings,
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2>What is your monthly salary? </h2>
          <input
            type="text"
            placeholder="Monthly Salary"
            onChange={this.getUserSalary}
          />
          <Button onClick={this.calculateBudget} />
        </div>
      </div>
    );
  }
}

export default calculateBudget;
