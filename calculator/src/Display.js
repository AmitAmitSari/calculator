import { Col } from 'antd';

import PropTypes from 'prop-types';

import { CenterRow } from './GridComponents';

export function Display({ scale, equation, result}) {
    return (
        <>
            <CenterRow>
                <Col span={4 * scale}>
                    <div style={{backgroundColor: "black", color: "white"}}> { equation } </div>
                </Col>
            </CenterRow>
            <CenterRow>
                <Col span={4 * scale}>
                    <div style={{backgroundColor: "black", color: "white", textAlign: "right"}}> { result } </div>
                </Col>
            </CenterRow>
        </>
    );
}

Display.propTypes = {
    equation: PropTypes.string,
    result: PropTypes.string,
    scale: PropTypes.number.isRequired
}
