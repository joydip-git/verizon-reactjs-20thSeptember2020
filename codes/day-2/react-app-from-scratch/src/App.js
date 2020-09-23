import React, { Component } from 'react'
import Another from './Another';
import './App.css'
import Message from './Message'

/**
 * function Component(){
 *   
 * }
 * Component.prototype.state = {};
 * Component.prototype.render = function(){};
 * function App(){
 *   Component.call(this,....);
 *   this.state = {
 *   }
 *   this.render = function(){
 *   }
 * }
 * Object.setPrototypeof(App.prototype,Component.prototype);
 */

class App extends Component {
    constructor() {
        super();
        this.state = {
            message: 'hello everyone...',
            val: 20,
            numbers: [1, 2, 3, 4],
            show: false,
            product: {
                name: 'name',
                id: 1,
                price: 100
            }
        }
    }
    //otherMessage = 'other message';
    changeMessage = function (newMessage) {
        console.log('çalled');
        console.log(newMessage);
        message = newMessage;
        console.log(message)
    }

    //lifecycle
    render() {
        return (
            <div>
                <button onClick={() => changeMessage('button clicked')}>Change Message</button>
                <br />
                <Message
                    data={this.state.message}
                    value={30}
                    changeFn={this.changeMessage} />
                <br />
                <Another message={this.state.message} />
            </div>
        );
    }
}
export default App;