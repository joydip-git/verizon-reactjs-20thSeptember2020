import React from 'react'
import PropTypes from 'prop-types'

function ClickCounter({ value, counterValue, increaseCounterCallback }) {
    return (
        <div>
            <span>Value:{value ? value : 'NA'}</span>
            <br />
            <span>Click Counter:&nbsp;{counterValue}</span>
            <br />
            <button onClick={increaseCounterCallback}>
                Click to Increase
            </button>
            <br />
        </div>
    )
}
ClickCounter.propTypes = {
    counterValue: PropTypes.number.isRequired,
    increaseCounterCallback: PropTypes.func.isRequired,
    value: PropTypes.number
}
export default ClickCounter
