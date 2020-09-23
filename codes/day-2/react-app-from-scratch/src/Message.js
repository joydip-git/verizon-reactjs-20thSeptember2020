import React from 'react'

export default function Message(properties) {
    console.log(properties);

    let design = (<div id='messageDiv'
        className='divStyle'>
        Data:&nbsp;
        <input
            type='text'
            value={properties.data}
            onChange={(event) => properties.changeFn(event.target.value)}
        />
        <br />
        Value:&nbsp;{properties.value}
    </div>);

    return design;
}