import React, { Component } from 'react';
import BaseInss from './inputsReadOnly/BaseInss';
import DiscountInss from './inputsReadOnly/DiscountInss';
import BaseIrpf from './inputsReadOnly/BaseIrpf';
import DiscountIrpf from './inputsReadOnly/DiscountIrpf';
import NetSalary from './inputsReadOnly/NetSalary';
import ProgressBarSalary from './ProgressBarSalary';

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
        <div className="row">
          <ProgressBarSalary
            percent={dataSalary.percentDiscountINSS.toFixed(2)}
            color="#e67e22"
          />
          <ProgressBarSalary
            percent={dataSalary.percentDiscountIRPF.toFixed(2)}
            color="#c0392b"
          />
          <ProgressBarSalary
            percent={dataSalary.percentNetSalary.toFixed(2)}
            color="#16a085"
          />
        </div>
      </div>
    );
  }
}
