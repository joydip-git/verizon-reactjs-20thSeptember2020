import React from 'react'
import Another from './Another';
import './App.css'
import Message from './Message'

// const messageElement = Message({ data: 'hello react', value: 20 })
// console.log(messageElement)
const App = () => {
    let message = 'hello everyone';
    let changeMessage = function (newMessage) {
        console.log('çalled');
        console.log(newMessage);
        message = newMessage;
        console.log(message)
    }
    //changeMessage = changeMessage.bind(this);
    return (
        <div>
            <button onClick={() => changeMessage('button clicked')}>Change Message</button>
            <br />
            <Message
                data={message}
                value={30}
                changeFn={changeMessage} />
            <br />
            <Another message={message} />
        </div>
    );
}
export default App;