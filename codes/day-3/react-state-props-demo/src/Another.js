import React from 'react'

const Another = (props) => {
    return (
        <div>
            Another...
            <br />
            {props.message}
            <br/>
            <button onClick={props.handler}>
                Click
            </button>
        </div>
    );
}

export default Another;