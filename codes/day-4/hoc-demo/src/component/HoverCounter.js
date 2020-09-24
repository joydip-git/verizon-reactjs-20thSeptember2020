import React from 'react'
import withCounter from '../HOC/withCounter'

function HoverCounter({ data, counter, increaseCounterCallback }) {
    return (
        <div>
            <span>Data:{data ? data : 'NA'}</span>
            <br />
            <span>Hover Counter:&nbsp;{counter}</span>
            <br />
            <div style={{ backgroundColor: "lime" }} onMouseOver={increaseCounterCallback}>
                Hover to Increase
                </div>
        </div>
    )
}
// const HoverCounterWithCounterCode = withCounter(HoverCounter);
// export default HoverCounterWithCounterCode;
export default withCounter(HoverCounter);
