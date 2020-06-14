function calculatePercent(data) {
  let percents = [];
  let percentDiscountINSS = (data.discountINSS * 100) / Number(data.baseINSS);
  let percentDiscountIRPF = (data.discountIRPF * 100) / Number(data.baseINSS);
  let percentNetSalary = (data.netSalary * 100) / Number(data.baseINSS);
  if (
    isNaN(percentDiscountINSS) &&
    isNaN(percentDiscountIRPF) &&
    isNaN(percentNetSalary)
  ) {
    percentDiscountINSS = 0;
    percentDiscountIRPF = 0;
    percentNetSalary = 0;
    percents.push(percentDiscountINSS, percentDiscountIRPF, percentNetSalary);
  } else {
    percents.push(percentDiscountINSS, percentDiscountIRPF, percentNetSalary);
  }

  return percents;
}

export { calculatePercent };
