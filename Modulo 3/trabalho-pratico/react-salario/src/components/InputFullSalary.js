import React, { Component } from 'react';
import InputReadOnly from './InputReadOnly';
import { calculateSalaryFrom } from './helpers/salary';
import { calculatePercent } from './helpers/CalculatePercent';

export default class InputFullSalary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseINSS: 0,
      baseIRPF: 0,
      discountINSS: 0,
      discountIRPF: 0,
      netSalary: 0,
      percentDiscountINSS: 0,
      percentDiscountIRPF: 0,
      percentNetSalary: 0,
    };
  }

  handleInputSalary = (event) => {
    let calculateSalary = calculateSalaryFrom(event.target.value);
    let calcPercent = calculatePercent(calculateSalary);
    this.setState({
      baseINSS: Number(calculateSalary.baseINSS),
      baseIRPF: calculateSalary.baseIRPF,
      discountINSS: calculateSalary.discountINSS,
      discountIRPF: calculateSalary.discountIRPF,
      netSalary: calculateSalary.netSalary,
      percentDiscountINSS: calcPercent[0],
      percentDiscountIRPF: calcPercent[1],
      percentNetSalary: calcPercent[2],
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <label className="input-field col s12">
            <h6>Salário Bruto:</h6>
            <input
              type="number"
              id="salary"
              onInput={this.handleInputSalary}
              placeholder="Digite o salário..."
            ></input>
          </label>
        </div>
        <InputReadOnly dataCalculateSalary={this.state} />
      </div>
    );
  }
}
