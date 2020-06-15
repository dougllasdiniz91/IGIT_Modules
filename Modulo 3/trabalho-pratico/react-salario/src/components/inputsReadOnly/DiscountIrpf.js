import React, { Component } from 'react';

export default class DiscountIrpf extends Component {
  render() {
    const discount = this.props.valueDiscountIRPF;
    const percentFormat = new Intl.NumberFormat('pt-BR', {
      style: 'unit',
      unit: 'percent',
    }).format(discount.percent);
    const discountFormat = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(discount.discountIrpf);
    return (
      <label className="input-field col s12 m4 l3">
        <h6>Desconto IRPF:</h6>
        <input
          type="text"
          readOnly
          value={`${discountFormat} (${percentFormat})`}
          id="discountIrpf"
        ></input>
      </label>
    );
  }
}
