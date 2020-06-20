import React from 'react';

export default function Form() {
  const handleInitialValue = (event) => {
    console.log(event.target.value);
  };
  const handleInterstRate = (event) => {
    console.log(event.target.value);
  };

  const handlePeriod = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="row">
      <div className="input-field col s12 m4 l4 ">
        <input
          type="number"
          id="initialValue"
          min="0"
          max="100000"
          onChange={handleInitialValue}
        ></input>
        <label htmlFor="initialValue">Montante Inicial</label>
      </div>
      <div className="input-field col s12 m4 l4 ">
        <input
          type="number"
          id="interestRate"
          min="-12"
          max="12"
          onChange={handleInterstRate}
        ></input>
        <label htmlFor="interestRate">Taxa de juros mensal</label>
      </div>
      <div className="input-field col s12 m4 l4 ">
        <input
          type="number"
          id="period"
          min="1"
          max="36"
          onChange={handlePeriod}
        ></input>
        <label htmlFor="period">Período (meses)</label>
      </div>
    </div>
  );
}
