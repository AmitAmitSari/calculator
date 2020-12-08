import { useState } from 'react'
import { Button, Row, Col } from 'antd'

const operations = {
    ADD: {sign: '+', func: (x, y) => x + y},
    SUBTRACT: {sign: '-', func: (x, y) => x - y},
    MULTIPLY: {sign: 'x', func: (x, y) => x * y},
    DIVIDE: {sign: '/', func: (x, y) => x / y},
    AC: { sign: 'AC' },
    EQUALS: {sign: '='},
    NULL: {sign: null, func: null}
}

function NumberButton(props) {
    return <Button size="large" block="true" onClick={() => props.numberCallback()}>{ props.num }</Button>;
}

function OperationButton(props) {
    return <Button size="large" style={{"background-color": "#faad14"}} block="true" onClick={() => props.operationCallback(props.value)}>{ props.sign }</Button>;
}

function createOperationButton(operation, operationCallback) {
    return (
      <OperationButton sign={operation.sign} operationCallback={() => operationCallback(operation)} />
    );
  }
  

function View(props) {
    let spanMul = 4
    return (
        <>
            <Row justify="center">
                <Col span={4 * spanMul}>
                    <div style={{backgroundColor: "black", color: "white"}}> {props.equation} </div>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={4 * spanMul}>
                    <div style={{backgroundColor: "black", color: "white", textAlign: "right"}}> {props.result} </div>
                </Col>
            </Row>
        </>
    );
}

function Panel(props) {
    let spanMul = 4
    return (
        <>
            <Row justify="center" align="middle">
                { [7, 8, 9].map(num => <Col span={spanMul}><NumberButton num={num} numberCallback={() => props.numberCallback(num)}/></Col>) }
                <Col span={spanMul}>{ createOperationButton(operations.DIVIDE, props.operationCallback) } </Col>
            </Row>
            <Row justify="center">
                { [4, 5, 6].map(num => <Col span={spanMul}><NumberButton num={num} numberCallback={() => props.numberCallback(num)}/></Col>) }
                <Col span={spanMul}>{ createOperationButton(operations.MULTIPLY, props.operationCallback) } </Col>
            </Row>
            <Row justify="center">
                { [1, 2, 3].map(num => <Col span={spanMul}><NumberButton num={num} numberCallback={() => props.numberCallback(num)}/></Col>) }
                <Col span={spanMul}>{ createOperationButton(operations.SUBTRACT, props.operationCallback) } </Col>
            </Row>
            <Row justify="center">
                <Col span={spanMul}><Button size="large" block="true">-</Button></Col>
                <Col span={spanMul}><NumberButton num={0} numberCallback={() => props.numberCallback(0)}/></Col>
                <Col span={spanMul}><Button size="large" block="true">.</Button></Col>
                <Col span={spanMul}>{ createOperationButton(operations.ADD, props.operationCallback) } </Col>
            </Row>
            <Row justify="center">
                <Col span={2 * spanMul}>
                    { createOperationButton(operations.AC, props.operationCallback) }
                </Col>
                <Col span={2 * spanMul}>
                    { createOperationButton(operations.EQUALS, props.operationCallback) }
                </Col>
            </Row>
      </>
    );
}


function Caclulator() {
  let [prevNumber, setPrevNumber] = useState(null);
  let [operation, setOperation] = useState(operations.NULL);
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
      <View equation={ equation } result={ result } />
      <Panel
        numberCallback={(num) => setNumber(number * 10 + num)}
        operationCallback={(op) => {
            switch (op) {
                case operations.AC:
                    setNumber(null);
                    setPrevNumber(null);
                    setOperation(operations.NULL);
                    break;
                case operations.EQUALS:
                    if (operating) {
                        setNumber(operation.func(prevNumber, number));
                        setPrevNumber(null);
                        setOperation(operations.NULL);
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
