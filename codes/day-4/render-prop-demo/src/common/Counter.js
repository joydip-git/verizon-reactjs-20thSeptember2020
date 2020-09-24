import React, { Component } from 'react'

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
                Name: {this.props.name}
                {this.props.render(this.state.counter, this.increaseCounterHandler)}
            </div>
        )
    }
}
