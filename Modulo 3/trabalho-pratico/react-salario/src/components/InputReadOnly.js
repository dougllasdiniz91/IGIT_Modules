import React, { Component } from 'react';
import BaseInss from './inputsReadOnly/BaseInss';
import DiscountInss from './inputsReadOnly/DiscountInss';
import BaseIrpf from './inputsReadOnly/BaseIrpf';
import DiscountIrpf from './inputsReadOnly/DiscountIrpf';
import NetSalary from './inputsReadOnly/NetSalary';

export default class InputReadOnly extends Component {
  render() {
    const dataSalary = this.props.dataCalculateSalary;
    return (
      <div>
        <div className="row">
          <BaseInss valueBaseINSS={dataSalary.baseINSS} />
          <DiscountInss
            valueDiscountINSS={{
              discountInss: dataSalary.discountINSS,
              percent: dataSalary.percentDiscountINSS.toFixed(2),
            }}
          />
          <BaseIrpf valueBaseIRPF={dataSalary.baseIRPF} />
          <DiscountIrpf
            valueDiscountIRPF={{
              discountIrpf: dataSalary.discountIRPF,
              percent: dataSalary.percentDiscountIRPF.toFixed(2),
            }}
          />
          <NetSalary
            valueNetSalary={{
              salary: dataSalary.netSalary,
              percent: dataSalary.percentNetSalary.toFixed(2),
            }}
          />
        </div>
      </div>
    );
  }
}
