import React, { Component } from 'react'
import './App.css'
import Another from './Another';
import Message from './Message';

class App extends Component {
  constructor() {
    super();
    this.otherMessage = 'other message';
    this.state = {
      message: 'hello everyone',
      value: 20,
      show: false,
      product: {
        name: 'dell laptop',
        id: 1,
        price: 100000
      }
    }
    // this.changeMessageHandler = this.changeMessageHandler.bind(this);
  }
  //otherMessage = 'other message';

  changeMessageHandler = (event) => {
    console.log(event.target.value)
  }

  render() {
    return (
      <div>
        App component element
        <br />
        <Message
          message={this.state.message}
          changeMessageFn={this.changeMessageHandler}
        />
        <br />
        <Another message={this.state.message} handler={this.changeMessageHandler} />
      </div>
    );
  }
}

export default App;
