import { Col } from 'antd'

import { CenterRow } from './BasicComponents';

export function Display(props) {
    let spanMul = 4
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