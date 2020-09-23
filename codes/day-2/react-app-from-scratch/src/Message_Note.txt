import React from 'react'

//w.r.t properties that you receive from parent, this component should act like a pure function
///property values (data, value) should not be mutated
//they are read-only

//properties:{data:'hello react', value:30, changeFn:fnref}
export default function Message(properties) {
    console.log(properties);
    // properties.data = 'hi...';
    // properties.value++;

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
        {/* <span id='messageSpan' className='spanStyle'>
            <span style={{ textAlign: "center" }}>
                
            </span>
        </span> */}
    </div>);

    console.log(design);

    return design;
}

/**
 * {
 *   type:'div',
 *   ref:null,
 *   key:null,
 *   props:{
 *    id:'messageDiv',
 *    className:'divStyle',
 *    children:[
 *          0:Data,
 *          1:'hello everyone',
 *          2:ReactElement(br),
 *          3:Value,
 *          4:'30'],
 *    data:'hello everyone',
 *    value:30
 *   }
 * }
 */