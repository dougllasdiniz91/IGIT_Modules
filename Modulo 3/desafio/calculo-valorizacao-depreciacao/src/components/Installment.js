import React, { useState, useEffect } from 'react';
import { CalcAmount } from '../helpers/CalcAmount';

export default function Installment({ finalValue, difference, percent }) {
  const [qdtInstallment, setQtdInstallment] = useState([]);
  let elementHTML = '';

  useEffect(() => {
    for (let index = 1; index <= percent; index++) {
      const { getAmount, getDifference, getRoot } = CalcAmount(
        finalValue,
        difference,
        percent
      );
      setQtdInstallment({
        id: index,
        amount: getAmount,
        difference: getDifference,
        root: getRoot,
      });
    }
  }, [finalValue, difference, percent]);
  console.log(qdtInstallment);
  return <div> </div>;
}
