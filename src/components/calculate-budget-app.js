import React, { Component } from "react";
import Button from "./button.js";
import budgetRule from "./budget-rule.js";
import CategoryBuckets from "./categroy-buckets.js";
import "./calculate-budget-app.css"

class CalculateBudgetApp extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      salary: 0,
    };
    Object.assign(this.state, budgetRule);
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

    const needs = (salary * budgetRule.needs).toFixed(1);
    const wants = (salary * budgetRule.wants).toFixed(1);
    const savings = (salary * budgetRule.savings).toFixed(1);
    this.setState({
      clicked: true,
      needs: needs,
      wants: wants,
      savings: savings,
    });
  }

  render() {
    return (
      <div>
        <div className="monthly__salary">
          <h2>What is your monthly salary? </h2>
            <input
              className="salary__input"
              type="text"
              placeholder="Monthly Salary"
              onChange={this.getUserSalary}
            />
            <Button
            onClick={this.calculateBudget} > Calculate
              </Button>
          </div>
        {this.state.clicked ? <CategoryBuckets budget={this.state} /> : null}
      </div>
    );
  }
}

export default CalculateBudgetApp;
