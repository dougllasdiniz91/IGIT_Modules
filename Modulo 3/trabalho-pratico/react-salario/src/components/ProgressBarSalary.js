import React, { Component } from 'react';

export default class ProgressBarSalary extends Component {
  render() {
    const { percent, color } = this.props;
    let height = 100;
    if (percent !== 0) {
      height = 20;
    }
    return (
      <div
        className="col s12"
        style={{
          width: percent + '%',
          height: `${height}px`,
          backgroundColor: color,
        }}
      ></div>
    );
  }
}
