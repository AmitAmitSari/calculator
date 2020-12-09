import { Row } from 'antd'
import PropTypes from 'prop-types'

export function CenterRow({ children }) {
    return <Row justify="center">{ children }</Row>
}

CenterRow.propTypes = {
    children: PropTypes.node
}