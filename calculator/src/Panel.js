import { Col } from 'antd'
import PropTypes from 'prop-types';

import { CallbackButton, OrangeButton } from './ButtonComponents';
import { CenterRow } from './GridComponents';

export const operations = {
    ADD: {sign: '+', func: (x, y) => x + y},
    SUBTRACT: {sign: '-', func: (x, y) => x - y},
    MULTIPLY: {sign: 'x', func: (x, y) => x * y},
    DIVIDE: {sign: '/', func: (x, y) => x / y},
    AC: { sign: 'AC' },
    EQUALS: {sign: '='},
    NOOP: {sign: null, func: null}
}


export function Panel({ scale, numberCallback, operationCallback}) {

    const createNumberButtons = (numArray) => numArray.map(num =>
        <Col span={scale}>
            <CallbackButton
                text={num}
                callback={() => numberCallback(num)}/>
        </Col>);
    const createOperationButton = (op, mul=1) =>
        <Col span={scale * mul}>
            <OrangeButton
                text={op.sign}
                callback={() => operationCallback(op)} />
        </Col>;
    const createNoopButton = (sign) =>
        <Col span={scale}>
            <CallbackButton
                text={sign}
                callback={() => null} />
        </Col>
    
    const createPanelRow = (numbers, operation) => 
        <CenterRow>
            { createNumberButtons(numbers) }
            { createOperationButton(operation) }
        </CenterRow>

    return (
        <>
            { createPanelRow([7, 8, 9], operations.DIVIDE) }
            { createPanelRow([4, 5, 6], operations.MULTIPLY) }
            { createPanelRow([1, 2, 3], operations.SUBTRACT) }
            <CenterRow>
                { createNoopButton('-') }
                { createNumberButtons([0]) }
                { createNoopButton('.') }
                { createOperationButton(operations.ADD) }
            </CenterRow>
            <CenterRow>
                { createOperationButton(operations.AC, 2) }
                { createOperationButton(operations.EQUALS, 2) }
            </CenterRow>
      </>
    );
}

Panel.propTypes = {
    numberCallback: PropTypes.func.isRequired,
    operationCallback: PropTypes.func.isRequired,
    scale: PropTypes.number.isRequired
}

