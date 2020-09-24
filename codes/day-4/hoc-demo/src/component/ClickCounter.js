import React, { Component } from 'react'
import withCounter from '../HOC/withCounter'

function ClickCounter({ value, counter, increaseCounterCallback }) {
    return (
        <div>
            <span>Value:{value ? value : 'NA'}</span>
            <br />
            <span>Click Counter:&nbsp;{counter}</span>
            <br />
            <button onClick={increaseCounterCallback}>
                Click to Increase
                </button>
            <br />
            {/* <button onClick={call}>Call Static</button> */}
        </div>
    )

}

// const ClickCounterWithCounterCode = withCounter(ClickCounter);
// export default ClickCounterWithCounterCode;
export default withCounter(ClickCounter);
