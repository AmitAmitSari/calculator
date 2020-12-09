import {Button} from 'antd'
import PropTypes from 'prop-types'


export function CallbackButton({ color, callback, text}) {
    return (
        <Button
            size="large"
            block="true"
            style={color ? {"background-color": color} : {}}
            onClick={callback}>
                { text }
        </Button>
    );
}

CallbackButton.propTypes = {
    callback: PropTypes.func.isRequired,
    text: PropTypes.number.isRequired,
    color: PropTypes.string
}

export function OrangeButton({ callback, text}) {
    return (
        <CallbackButton color={ "#faad14" } callback={ callback } text={ text }></CallbackButton>
    );
}

OrangeButton.propTypes = {
    callback: PropTypes.func.isRequired,
    text: PropTypes.number.isRequired
}
