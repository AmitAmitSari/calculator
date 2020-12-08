import { Col } from 'antd';

import PropTypes from 'prop-types';

import { CenterRow } from './BasicComponents';

export function Display(props) {
    const spanMul = props.scaling
    return (
        <>
            <CenterRow>
                <Col span={4 * spanMul}>
                    <div style={{backgroundColor: "black", color: "white"}}> {props.equation} </div>
                </Col>
            </CenterRow>
            <CenterRow>
                <Col span={4 * spanMul}>
                    <div style={{backgroundColor: "black", color: "white", textAlign: "right"}}> {props.result} </div>
                </Col>
            </CenterRow>
        </>
    );
}

Display.propTypes = {
    equation: PropTypes.string,
    result: PropTypes.number,
    scaling: PropTypes.number
}
