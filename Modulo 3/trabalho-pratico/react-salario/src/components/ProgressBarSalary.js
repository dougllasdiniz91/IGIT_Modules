import React, { Component } from 'react';

export default class ProgressBarSalary extends Component {
  render() {
    const { percent, color } = this.props;

    return (
      <div
        style={{
          width: percent + '%',
          height: `20px`,
          backgroundColor: color,
        }}
      ></div>
    );
  }
}
