import React, { useState } from 'react'
import { Button, Row, Col } from 'antd'

function createNumberButton(num, number, setNumber) {
  return <Col span={1}><Button block="true" onClick={() => setNumber(number * 10 + num)}>{num}</Button></Col>
}

const operations = {
    ADD: {sign: '+', func: (x, y) => x + y},
    SUBTRACT: {sign: '-', func: (x, y) => x - y},
    MULTIPLY: {sign: 'x', func: (x, y) => x * y},
    DIVIDE: {sign: '/', func: (x, y) => x / y}
}

function createCreateOperationButton(number, setOperation, setPrevNumber, setNumber) {
  return (operation) => {
    return <Col span={1}><Button block="true" onClick={() => {
      setOperation(operation);
      setPrevNumber(number);
      setNumber(null);
    }}>{operation.sign}</Button></Col>
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
        { createOperationButton(operations.DIVIDE) }
      </Row>
      <Row justify="center">
        { [4, 5, 6].map(num => createNumberButton(num, number, setNumber)) }
        { createOperationButton(operations.MULTIPLY) }
      </Row>
      <Row justify="center">
        { [1, 2, 3].map(num => createNumberButton(num, number, setNumber)) }
        { createOperationButton(operations.SUBTRACT) }
      </Row>
      <Row justify="center">
        <Col span={1}><Button block="true">-</Button></Col>
        { createNumberButton(0, number, setNumber) }
        <Col span={1}><Button block="true">.</Button></Col>
        { createOperationButton(operations.ADD) }
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
