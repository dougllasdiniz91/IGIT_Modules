import React, { Component } from 'react';

export default class DiscountInss extends Component {
  render() {
    const discount = this.props.valueDiscountINSS;
    const percentFormat = new Intl.NumberFormat('pt-BR', {
      style: 'unit',
      unit: 'percent',
    }).format(discount.percent);
    const discountFormat = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(discount.discountInss);

    return (
      <label className="input-field col s12 m4 l3">
        <h6>Desconto INSS:</h6>
        <input
          type="text"
          readOnly
          value={`${discountFormat} (${percentFormat})`}
          id="discountInss"
        ></input>
      </label>
    );
  }
}
