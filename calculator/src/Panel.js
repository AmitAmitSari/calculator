import { Col, Button } from 'antd'

import { NumberButton, createOperationButton, CenterRow } from './BasicComponents';

export const operations = {
    ADD: {sign: '+', func: (x, y) => x + y},
    SUBTRACT: {sign: '-', func: (x, y) => x - y},
    MULTIPLY: {sign: 'x', func: (x, y) => x * y},
    DIVIDE: {sign: '/', func: (x, y) => x / y},
    AC: { sign: 'AC' },
    EQUALS: {sign: '='},
    NOOP: {sign: null, func: null}
}


export function Panel(props) {
    let spanMul = 4
    return (
        <>
            <CenterRow>
                { [7, 8, 9].map(num => <Col span={spanMul}><NumberButton num={num} numberCallback={() => props.numberCallback(num)}/></Col>) }
                <Col span={spanMul}>{ createOperationButton(operations.DIVIDE, props.operationCallback) } </Col>
            </CenterRow>
            <CenterRow>
                { [4, 5, 6].map(num => <Col span={spanMul}><NumberButton num={num} numberCallback={() => props.numberCallback(num)}/></Col>) }
                <Col span={spanMul}>{ createOperationButton(operations.MULTIPLY, props.operationCallback) } </Col>
            </CenterRow>
            <CenterRow>
                { [1, 2, 3].map(num => <Col span={spanMul}><NumberButton num={num} numberCallback={() => props.numberCallback(num)}/></Col>) }
                <Col span={spanMul}>{ createOperationButton(operations.SUBTRACT, props.operationCallback) } </Col>
            </CenterRow>
            <CenterRow>
                <Col span={spanMul}><Button size="large" block="true">-</Button></Col>
                <Col span={spanMul}><NumberButton num={0} numberCallback={() => props.numberCallback(0)}/></Col>
                <Col span={spanMul}><Button size="large" block="true">.</Button></Col>
                <Col span={spanMul}>{ createOperationButton(operations.ADD, props.operationCallback) } </Col>
            </CenterRow>
            <CenterRow>
                <Col span={2 * spanMul}>
                    { createOperationButton(operations.AC, props.operationCallback) }
                </Col>
                <Col span={2 * spanMul}>
                    { createOperationButton(operations.EQUALS, props.operationCallback) }
                </Col>
            </CenterRow>
      </>
    );
}
