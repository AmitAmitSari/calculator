import React, { useState } from 'react'
import { Button, Row, Col } from 'antd'

function createNumberButton(num, number, setNumber) {
  return <Col span={1}><Button block="true" onClick={() => setNumber(number * 10 + num)}>{num}</Button></Col>
}

function createCreateOperationButton(number, setOperation, setPrevNumber, setNumber) {
  return (sign, callback) => {
    return <Col span={1}><Button block="true" onClick={() => {
      setOperation({sign: sign, func: callback});
      setPrevNumber(number);
      setNumber(null);
    }}>{sign}</Button></Col>
  };
}

function Caclulator() {
  let [prevNumber, setPrevNumber] = useState(null);
  let [operation, setOperation] = useState({sign: null, func: null });
  let [number, setNumber] = useState(null);

  let createOperationButton = createCreateOperationButton(number, setOperation, setPrevNumber, setNumber)

  let operating = operation.sign !== null && number !== null

  return (
    <div>
      <Row justify="center"> { prevNumber } { operation.sign } {number} { operating ? ' = ' + operation.func(prevNumber, number) : null } </Row>
      <Row justify="center">
        { [7, 8, 9].map(num => createNumberButton(num, number, setNumber)) }
        { createOperationButton('/', (x, y) => x / y) }
      </Row>
      <Row justify="center">
        { [4, 5, 6].map(num => createNumberButton(num, number, setNumber)) }
        { createOperationButton('x', (x, y) => x * y) }
      </Row>
      <Row justify="center">
        { [1, 2, 3].map(num => createNumberButton(num, number, setNumber)) }
        { createOperationButton('-', (x, y) => x - y) }
      </Row>
      <Row justify="center">
        <Col span={1}><Button block="true">-</Button></Col>
        { createNumberButton(0, number, setNumber) }
        <Col span={1}><Button block="true">.</Button></Col>
        { createOperationButton('+', (x, y) => x + y) }
      </Row>
      <Row justify="center">
          <Col span={2}>
            <Button block="true" onClick={() => {
                setNumber(null);
                setPrevNumber(null);
                setOperation({sign: null, func: null});
            }}>AC</Button>
          </Col>
          <Col span={2}>
            <Button block="true" onClick={() => {
                if (!operating) {
                    return;
                }
                setNumber(operation.func(prevNumber, number));
                setPrevNumber(null);
                setOperation({sign: null, func: null});
            }}>=</Button>
          </Col>
      </Row>
    </div>
  );
}

export default Caclulator;