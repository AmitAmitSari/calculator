import React, { useState } from 'react'

function createNumberButton(num, number, setNumber) {
  return <button onClick={() => setNumber(number * 10 + num)}>{num}</button>
}

function createCreateOperationButton(number, setOperation, setPrevNumber, setNumber) {
  function createOperationButton(sign, callback) {
    return <button onClick={() => {
      setOperation({sign: sign, func: callback});
      setPrevNumber(number);
      setNumber(null);
    }}>{sign}</button>
  }

  return createOperationButton
}

function Caclulator() {
  let [prevNumber, setPrevNumber] = useState(null);
  let [operation, setOperation] = useState({sign: null, func: null });
  let [number, setNumber] = useState(null);

  let createOperationButton = createCreateOperationButton(number, setOperation, setPrevNumber, setNumber)

  let operating = operation.sign !== null && number !== null

  return (
    <div>
      <div> { prevNumber } </div>
      <div> { operation.sign } { number } </div>
      <div> {operating ? '---------------' : null} </div>
      <div> { operating ? operation.func(prevNumber, number) : null } </div>
      <div>
        { [7, 8, 9].map(num => createNumberButton(num, number, setNumber)) }
        { createOperationButton('/', (x, y) => x / y) }
      </div>
      <div>
        { [4, 5, 6].map(num => createNumberButton(num, number, setNumber)) }
        { createOperationButton('x', (x, y) => x * y) }
      </div>
      <div>
        { [1, 2, 3].map(num => createNumberButton(num, number, setNumber)) }
        { createOperationButton('-', (x, y) => x - y) }
      </div>
      <div>
        <button>-</button>
        { createNumberButton(0, number, setNumber) }
        <button>.</button>
        { createOperationButton('+', (x, y) => x + y) }
      </div>
      <div>
          <button onClick={() => {
              setNumber(null);
              setPrevNumber(null);
              setOperation({sign: null, func: null});
          }}>AC</button>
          <button onClick={() => {
              if (!operating) {
                  return;
              }
              setNumber(operation.func(prevNumber, number));
              setPrevNumber(null);
              setOperation({sign: null, func: null});
          }}>=</button>
      </div>
    </div>
  );
}

export default Caclulator;