import React, { Component } from 'react';

export default class BaseIrpf extends Component {
  render() {
    const { valueBaseIRPF } = this.props;
    return (
      <label className="input-field col s12 m4 l3">
        <h6>Base IRPF:</h6>
        <input
          type="text"
          readOnly
          value={`${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(valueBaseIRPF)}`}
          className="inputText"
        ></input>
      </label>
    );
  }
}
