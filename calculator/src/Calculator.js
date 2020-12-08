import { useState } from 'react';
import { Display } from './Display';
import { Panel, operations } from './Panel'


function Caclulator() {
  let [prevNumber, setPrevNumber] = useState(null);
  let [operation, setOperation] = useState(operations.NOOP);
  let [number, setNumber] = useState(null);

  let operating = operation.sign !== null && number !== null

  let equation = '';
  if (prevNumber) { equation += prevNumber + ' '; }
  if (operation.sign) {equation += operation.sign + ' '; }
  if (number) {equation += number; }
  if (operating) {equation += ' = ';}
  if (!equation) {equation = '\xa0'; } // Non breaking space.

  let result = '\xa0';
  if (operating) { result = operation.func(prevNumber, number); }

  return (
    <div>
      <Display equation={ equation } result={ result } />
      <Panel
        numberCallback={(num) => setNumber(number * 10 + num)}
        operationCallback={(op) => {
            switch (op) {
                case operations.AC:
                    setNumber(null);
                    setPrevNumber(null);
                    setOperation(operations.NOOP);
                    break;
                case operations.EQUALS:
                    if (operating) {
                        setNumber(operation.func(prevNumber, number));
                        setPrevNumber(null);
                        setOperation(operations.NOOP);
                    }
                    break;
                case operations.DIVIDE:
                case operations.MULTIPLY:
                case operations.ADD:
                case operations.SUBTRACT:
                    setOperation(op);
                    setPrevNumber(number);
                    setNumber(null);
                    break;
                default:
                    console.log("Unrecognized operation, " + op);
            }
        }}/>
    </div>
  );
}

export default Caclulator;
