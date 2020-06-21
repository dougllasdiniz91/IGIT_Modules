function CalcAmount(value, rate, period) {
  const amount = (value * Math.pow(1 + rate / 100, period)).toFixed(2);
  const difference = (amount - value).toFixed(2);
  let root = ((difference * 100) / value).toFixed(2);
  if (isNaN(root)) {
    root = '0.00';
  }
  return {
    getAmount: amount,
    getDifference: difference,
    getRoot: root,
  };
}

export { CalcAmount };
