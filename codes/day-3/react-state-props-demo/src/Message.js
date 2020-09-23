import React from 'react'
import PropTypes from 'prop-types'

const Message = (props) => {
    console.log('[Message] rendered...')
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