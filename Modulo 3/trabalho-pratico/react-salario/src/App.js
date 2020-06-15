import React, { Component } from 'react';
import InputFullSalary from './components/InputFullSalary';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="center">REACT SALÁRIO</h1>
        <InputFullSalary />
      </div>
    );
  }
}
