import React, { Component } from 'react';
import './inputs.css';

export default class BaseInss extends Component {
  render() {
    const { valueBaseINSS } = this.props;
    return (
      <label className="input-field col s12 m4 l3">
        <h6>Base INSS:</h6>
        <input
          type="text"
          readOnly
          value={`${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(valueBaseINSS)}`}
          className="inputText"
        ></input>
      </label>
    );
  }
}
