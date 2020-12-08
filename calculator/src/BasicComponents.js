import {Button, Row} from 'antd'
import PropTypes from 'prop-types'

export function NumberButton(props) {
    return <Button size="large" block="true" onClick={props.numberCallback}>{ props.num }</Button>;
}

NumberButton.propTypes = {
    numberCallback: PropTypes.func.isRequired,
    num: PropTypes.number.isRequired
}

export function OperationButton(props) {
    return <Button size="large" style={{"background-color": "#faad14"}} block="true" onClick={props.operationCallback}>{ props.sign }</Button>;
}

OperationButton.propTypes = {
    operationCallback: PropTypes.func.isRequired,
    sign: PropTypes.string
}

export function CenterRow(props) {
    return <Row justify="center">{ props.children }</Row>
}

CenterRow.propTypes = {
    children: PropTypes.node
}

export function createOperationButton(buttonOperation, callback) {
    return (
      <OperationButton sign={buttonOperation.sign} operationCallback={() => callback(buttonOperation)} />
    );
  }