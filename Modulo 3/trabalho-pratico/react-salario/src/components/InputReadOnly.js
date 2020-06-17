import React, { Component } from 'react';
import BaseInss from './inputsReadOnly/BaseInss';
import DiscountInss from './inputsReadOnly/DiscountInss';
import BaseIrpf from './inputsReadOnly/BaseIrpf';
import DiscountIrpf from './inputsReadOnly/DiscountIrpf';
import NetSalary from './inputsReadOnly/NetSalary';
import ProgressBarSalary from './ProgressBarSalary';

export default class InputReadOnly extends Component {
  render() {
    const {
      baseINSS,
      baseIRPF,
      discountINSS,
      discountIRPF,
      percentDiscountINSS,
      percentDiscountIRPF,
      netSalary,
      percentNetSalary,
    } = this.props.dataCalculateSalary;
    return (
      <div>
        <div className="row">
          <BaseInss valueBaseINSS={baseINSS} />
          <DiscountInss
            discountInss={discountINSS}
            percent={percentDiscountINSS.toFixed(2)}
          />
          <BaseIrpf valueBaseIRPF={baseIRPF} />
          <DiscountIrpf
            discountIrpf={discountIRPF}
            percent={percentDiscountIRPF.toFixed(2)}
          />
          <NetSalary salary={netSalary} percent={percentNetSalary.toFixed(2)} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ProgressBarSalary
            percent={percentDiscountINSS.toFixed(2)}
            color="#e67e22"
          />
          <ProgressBarSalary
            percent={percentDiscountIRPF.toFixed(2)}
            color="#c0392b"
          />
          <ProgressBarSalary
            percent={percentNetSalary.toFixed(2)}
            color="#16a085"
          />
        </div>
      </div>
    );
  }
}
