import React from 'react'
import PropTypes from 'prop-types'

function HoverCounter({ data, counterData, increaseCounterCallback }) {
    return (
        <div>
            <span>Data:{data ? data : 'NA'}</span>
            <br />
            <span>Hover Counter:&nbsp;{counterData}</span>
            <br />
            <div style={{ backgroundColor: "lime" }} onMouseOver={increaseCounterCallback}>
                Hover to Increase
           </div>
        </div>
    )
}
HoverCounter.propTypes = {
    counterData: PropTypes.number.isRequired,
    increaseCounterCallback: PropTypes.func.isRequired,
    data: PropTypes.string
}

export default HoverCounter
