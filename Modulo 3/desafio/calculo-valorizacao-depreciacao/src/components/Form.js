import React, { useState } from 'react';
import Installments from './Installments';

export default function Form() {
  const [initialValue, setInitialValue] = useState(1000);
  const [interestRate, setInterestRate] = useState(0.5);
  const [period, setPeriod] = useState(1);

  const handleInitialValue = (event) => {
    setInitialValue(event.target.value);
  };
  const handleInterestRate = (event) => {
    setInterestRate(event.target.value);
  };

  const handlePeriod = (event) => {
    setPeriod(event.target.value);
  };
  return (
    <div className="row">
      <div className="input-field col s12 m4 l4 ">
        <h6>Montante Inicial:</h6>
        <input
          type="number"
          id="initialValue"
          min="0"
          max="100000"
          value={initialValue}
          onChange={handleInitialValue}
        ></input>
      </div>
      <div className="input-field col s12 m4 l4 ">
        <h6>Taxa de juros mensal:</h6>
        <input
          type="number"
          id="interestRate"
          min="-12"
          max="12"
          value={interestRate}
          onChange={handleInterestRate}
        ></input>
      </div>
      <div className="input-field col s12 m4 l4 ">
        <h6>Taxa de juros mensal:</h6>
        <input
          type="number"
          id="period"
          min="1"
          max="36"
          value={period}
          onChange={handlePeriod}
        ></input>
      </div>
      <Installments
        initValue={initialValue}
        intRate={interestRate}
        qtdPeriod={period}
      />
    </div>
  );
}
