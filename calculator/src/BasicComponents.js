import {Button, Row} from 'antd'

export function NumberButton(props) {
    return <Button size="large" block="true" onClick={() => props.numberCallback()}>{ props.num }</Button>;
}

export function OperationButton(props) {
    return <Button size="large" style={{"background-color": "#faad14"}} block="true" onClick={() => props.operationCallback(props.value)}>{ props.sign }</Button>;
}

export function CenterRow(props) {
    return <Row justify="center">{ props.children }</Row>
}

export function createOperationButton(operation, operationCallback) {
    return (
      <OperationButton sign={operation.sign} operationCallback={() => operationCallback(operation)} />
    );
  }