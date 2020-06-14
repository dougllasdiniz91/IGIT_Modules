import React, { Component } from 'react';

export default class NetSalary extends Component {
  render() {
    const valueSalary = this.props.valueNetSalary;
    const percentFormat = new Intl.NumberFormat('pt-BR', {
      style: 'unit',
      unit: 'percent',
    }).format(valueSalary.percent);
    const salaryFormat = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valueSalary.salary);

    return (
      <label className="input-field col s3">
        <h6>Salário Líquido:</h6>
        <input
          type="text"
          value={`${salaryFormat} (${percentFormat})`}
          disabled
        ></input>
      </label>
    );
  }
}
