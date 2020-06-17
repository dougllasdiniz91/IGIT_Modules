import React, { Component } from 'react';

export default class NetSalary extends Component {
  render() {
    const { salary, percent } = this.props;
    const percentFormat = new Intl.NumberFormat('pt-BR', {
      style: 'unit',
      unit: 'percent',
    }).format(percent);
    const salaryFormat = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(salary);

    return (
      <label className="input-field col s12 m4 l3">
        <h6>Salário Líquido:</h6>
        <input
          type="text"
          readOnly
          id="netSalary"
          value={`${salaryFormat} (${percentFormat})`}
        ></input>
      </label>
    );
  }
}
