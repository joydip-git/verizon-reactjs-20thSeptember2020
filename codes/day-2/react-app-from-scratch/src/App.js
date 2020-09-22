import React from 'react'
import './App.css'

const App = () => {
    const message = 'hello world';
    // const divStyle = {
    //     backgroundColor: 'blue',
    //     fontSize: 'medium'
    // };
    return (
        <div id='messageDiv'
            className='divStyle'>
            <span id='messageSpan' className='spanStyle'>
                <span style={{ textAlign: "center" }}>
                    {message}
                </span>
            </span>
        </div>
    );
}
export default App;
//module.exports = App;
//import X from './App'
// const design = X();

//module.exports = { App };
//import obj from './App'
// const design = obj.App();