import React, { Component } from 'react'
import './App.css'
import Another from './Another';
import Message from './Message';
import Child from './Child';

class App extends Component {
  constructor(props) {
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
    console.log('[App] created...')
    // this.changeMessageHandler = this.changeMessageHandler.bind(this);
  }
  //otherMessage = 'other message';

  static getDerivedStateFromProps(props, oldState) {
    console.log('[App] getDerivedStateFromProps')
    return null;
  }
  changeMessageHandler = (newMessage) => {
    let newStateObj = {
      message: newMessage
    }
    //this.setState(newStateObj);
    this.setState(
      newStateObj,
      () => console.log(this.state.message)
    );
    // setTimeout(() => console.log(this.state.message), 2000);
  }
  changeValueHandler = () => {
    //this.state.value++;
    this.setState(
      (oldState) => {
        console.log(oldState);
        let newState = {
          value: oldState.value + 1
        }
        return newState;
      },
      () => console.log(this.state)
    );
    /**
     * this.setState(
      (oldState,props) => {
        console.log(oldState);
        let newState = {
          value: oldState.value + props.someData
        }
        return newState;
      },
      () => console.log(this.state)
    );
     */
  }

  shouldComponentUpdate(newProps, currentState) {
    console.log('[App] shouldComponentUpdate called..')
    console.log('new props, old props and current state as follows...')
    console.log(newProps)
    console.log(this.props)
    console.log(this.state)
    return true;
}
  render() {
    console.log('[App] rendered')
    return (
      <div>
        App component element
        <br />
        <Message
          message={this.state.message}
          changeMessageFn={this.changeMessageHandler}
        />
        <br />
        <Another value={this.state.value} handler={this.changeValueHandler} />
        <br />
        <Child data={this.state.value} />
      </div>
    );
  }

  componentDidMount() {
    console.log('[App] mounted...')
  }
}

export default App;
