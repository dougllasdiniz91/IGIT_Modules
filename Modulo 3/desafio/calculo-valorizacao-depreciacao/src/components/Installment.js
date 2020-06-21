import React, { useState, useEffect } from 'react';
import { CalcAmount } from '../helpers/CalcAmount';

export default function Installment({ finalValue, difference, percent }) {
  const [qtdInstallment, setQtdInstallment] = useState([]);
  let elementHTML = '';

  useEffect(() => {
    setQtdInstallment(CalcAmount(finalValue, difference, percent));
  }, [finalValue, difference, percent]);
  qtdInstallment.map((element) => {
    elementHTML += `${element}`;
    return console.log(element);
  });
  return <div>{elementHTML}</div>;
}
