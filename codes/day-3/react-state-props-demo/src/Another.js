import React, { memo } from 'react'

const Another = (props) => {
    console.log('[Another] rendered...')
    return (
        <div>
            Another...
            <br />
            {props.value}
            <br />
            <button onClick={props.handler}>
                Click
            </button>
        </div>
    );
}


export default memo(Another);