import { React } from 'react';
import Key from './Key';
import Display from './Display';

const selectClass = (idx, divIdx) => {
  if (divIdx < 4 && idx !== 3) {
    return 'normal';
  }
  if (divIdx === 4 && (idx === 1)) {
    return 'normal';
  }
  if (divIdx === 4 && idx === 0) {
    return 'zero';
  }
  return 'operator';
};

function Calculator() {
  const lblArray = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];
  return (
    <div className="container">
      <Display className="input" value="0" />
      {lblArray.map((lbl, divIdx) => (
        <div className="row" key={lbl[0]}>
          {lbl.map((element, idx) => (
            <Key lbl={element} cls={selectClass(idx, divIdx)} key={element} />))}
        </div>
      ))}
    </div>
  );
}

export default Calculator;
