import React from 'react'
import PropTypes from 'prop-types'

const Message = (props) => {
    return (
        <div>
            Message: &nbsp;
            <input
                type='text'
                value={props.message}
                onChange={props.changeMessageFn}
            />
        </div>
    );
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    changeMessageFn: PropTypes.func.isRequired
}

export default Message;