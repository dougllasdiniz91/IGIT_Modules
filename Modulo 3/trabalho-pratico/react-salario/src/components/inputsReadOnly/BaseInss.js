import React, { Component } from 'react';

export default class BaseInss extends Component {
  render() {
    return (
      <label className="input-field col s3">
        <h6>Base INSS:</h6>
        <input
          type="text"
          value={`${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(this.props.valueBaseINSS)}`}
          disabled
        ></input>
      </label>
    );
  }
}
