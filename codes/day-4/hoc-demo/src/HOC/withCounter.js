import React, { Component } from "react";

const withCounter = (WrappedComponent) => {

    class WithCounter extends Component {
        state = {
            counter: 0,
        }
        static Invoke(){
            console.log('WithCounter invoke')
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
            return <WrappedComponent
                {...this.props}
                staticMethod={WithCounter.Invoke}
                counter={this.state.counter}
                increaseCounterCallback={this.increaseCounterHandler}
            />
        }
    }

    return WithCounter;
}
export default withCounter;