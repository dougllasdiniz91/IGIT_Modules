import React, { Component } from 'react';
import './inputs.css';

export default class BaseInss extends Component {
  render() {
    return (
      <label className="input-field col s12 m4 l3">
        <h6>Base INSS:</h6>
        <input
          type="text"
          readOnly
          value={`${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(this.props.valueBaseINSS)}`}
          className="inputText"
        ></input>
      </label>
    );
  }
}
