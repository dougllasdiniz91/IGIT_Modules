import React from 'react';
import Installment from './Installment';

export default function Installments(props) {
  return (
    <Installment
      finalValue={props.initValue}
      difference={props.intRate}
      percent={props.qtdPeriod}
    />
  );
}
