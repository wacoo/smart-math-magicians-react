import { useState, React } from 'react';
import Key from './Key';
import Display from './Display';
import calculate from '../logic/calculate';

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
  const init = {
    total: 0,
    next: 0,
    operation: '',
  };
  const [display, setDisplay] = useState(init);
  const lblArray = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];
  // let fullStr = '';
  const handleClick = (btnName) => {
    setDisplay(calculate(display, btnName));
    console.log(display);
    if (btnName === 'AC') {
      setDisplay(init);
    }
  };

  return (
    <div className="container">
      <Display className="input" value={0} />
      {lblArray.map((lbl, divIdx) => (
        <div className="row" key={lbl[0]}>
          {lbl.map((element, idx) => (
            <Key
              lbl={element}
              cls={selectClass(idx, divIdx)}
              key={element}
              on
              onSmash={
              () => handleClick(element)
}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Calculator;
