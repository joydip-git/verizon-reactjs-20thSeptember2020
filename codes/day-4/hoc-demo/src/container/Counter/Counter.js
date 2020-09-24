import React, { Component } from 'react'
import ClickCounter from '../../component/ClickCounter';
import HoverCounter from '../../component/HoverCounter';

export default class Counter extends Component {
    state = {
        counter: 0
    }
    increaseCounterHandler = () => {
        this.setState(function (currentState) {
            let newState = {
                counter: currentState.counter + 1
            }
            return newState;
        });
    }
    render() {
        return (
            <div>
                <ClickCounter
                    counter={this.state.counter}
                    increaseCounterCallback={this.increaseCounterHandler}
                />
                <br />
                <HoverCounter
                    counter={this.state.counter}
                    increaseCounterCallback={this.increaseCounterHandler}
                />
            </div>
        )
    }
}
