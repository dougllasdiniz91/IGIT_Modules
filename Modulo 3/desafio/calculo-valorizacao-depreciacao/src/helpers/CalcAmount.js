function CalcAmount(value, rate, period) {
  let arrayAmount = [];
  for (let index = 1; index <= period; index++) {
    const amount = (value * Math.pow(1 + rate / 100, index)).toFixed(2);
    const difference = (amount - value).toFixed(2);
    let root = ((difference * 100) / value).toFixed(2);
    if (isNaN(root)) {
      root = '0.00';
    }
    arrayAmount.push({
      id: index,
      getAmount: amount,
      getDifference: difference,
      getRoot: root,
    });
  }
  return arrayAmount;
}

export { CalcAmount };
