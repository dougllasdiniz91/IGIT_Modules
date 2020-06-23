import React, { useState, useEffect } from 'react';
import { CalcAmount } from '../helpers/CalcAmount';
import './Installment.css';

export default function Installment({ finalValue, difference, percent }) {
  const [qtdInstallment, setQtdInstallment] = useState([]);

  useEffect(() => {
    setQtdInstallment(CalcAmount(finalValue, difference, percent));
  }, [finalValue, difference, percent]);

  return (
    <div className="row">
      {qtdInstallment.map(({ id, getAmount, getDifference, getRoot }, key) => {
        return (
          <div key={key} className="col s12 m3">
            <div className="card horizontal">
              <div className="card-content">
                <p>{id}</p>
              </div>
              <div className="card-stacked">
                <div
                  className="card-content"
                  style={
                    getRoot > 0 ? styles.appreciation : styles.depreciation
                  }
                >
                  <p>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(getAmount)}
                  </p>
                  <p>
                    {getDifference > 0 ? '+' : ''}
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(getDifference)}
                  </p>
                  <p>
                    {getRoot > 0 ? '+' : ''}
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'unit',
                      unit: 'percent',
                    }).format(getRoot)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  appreciation: { color: '#006400', fontWeight: 'bold' },
  depreciation: { color: 'red' },
};
