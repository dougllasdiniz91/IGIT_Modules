import React, { Component } from 'react';

export default class DiscountIrpf extends Component {
  render() {
    const { discountIrpf, percent } = this.props;
    const percentFormat = new Intl.NumberFormat('pt-BR', {
      style: 'unit',
      unit: 'percent',
    }).format(percent);
    const discountFormat = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(discountIrpf);
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
