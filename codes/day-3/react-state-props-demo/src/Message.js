import React from 'react'
import PropTypes from 'prop-types'

const Message = (props) => {
    // const changeMessage = (arg) => {
    //     props.changeMessageFn(arg.target.value);
    // }
    return (
        <div>
            Message: &nbsp;
            <input
                type='text'
                value={props.message}
                onChange={(arg) => props.changeMessageFn(arg.target.value)}
            />
        </div>
    );
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    changeMessageFn: PropTypes.func.isRequired
}

export default Message;