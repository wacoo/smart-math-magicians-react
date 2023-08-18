import React from 'react';
import Key from './Key';
import Display from './Display';
import calculate from '../logic/calculate';

const selectClass = (idx, divIdx) => {
  if (divIdx < 4 && idx !== 3) {
    return 'normal';
  }
  if (divIdx === 4 && idx === 1) {
    return 'normal';
  }
  if (divIdx === 4 && idx === 0) {
    return 'zero';
  }
  return 'operator';
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: {
        total: 0,
        next: 0,
        operation: '',
      },
    };

    this.operation = '';
    this.oprString = '';
  }

  isNumeric = (str) => {
    if (typeof str !== 'string') {
      return false;
    }
    return !Number.isNaN(str) && !Number.isNaN(parseFloat(str));
  }

  handleClick = (btnName) => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const { obj } = this.state;
    this.setState({ obj: calculate(obj, btnName) });
    if (btnName === 'AC') {
      this.setState({ obj: {} });
      this.oprString = '';
    }

    if (btnName === '+/-') {
      const neg = `-${obj.next}`;
      const last = this.oprString.substring(this.oprString.length - 1);
      if (numbers.includes(last) && last !== '0') {
        this.oprString = this.oprString.substring(0, this.oprString.length - 1);
        this.oprString += neg;
      } else {
        this.oprString += '-';
      }

      return;
    }

    if (btnName !== 'AC') {
      if (this.oprString === '=') {
        this.oprString = '=';
      } else {
        this.oprString += btnName;
      }
    }

    this.operation = btnName;
  };

  getDisplayValue = (obj) => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (this.operation === '=') {
      if (this.oprString === '=') {
        this.oprString = '';
        return 0;
      }

      if (this.isNumeric(this.oprString)) {
        if (obj.total) {
          this.oprString += obj.total;
          return this.oprString;
        }
        return obj.next;
      }

      if (numbers.includes(this.oprString)) {
        return this.oprString;
      }

      this.oprString += obj.total;
      return this.oprString;
    }

    if (this.operation === 'AC') {
      return 0;
    }
    return this.oprString;
  }

  render() {
    const lblArray = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
    const { obj } = this.state;
    return (
      <div className="calculator">
        <Display className="input" value={this.getDisplayValue(obj)} />
        {lblArray.map((lbl, divIdx) => (
          <div className="row" key={lbl[0]}>
            {lbl.map((element, idx) => (
              <Key
                lbl={element}
                cls={selectClass(idx, divIdx)}
                key={element}
                on
                onSmash={() => this.handleClick(element)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Calculator;
