import React, { Component } from 'react'
import withCounter from '../HOC/withCounter'

class StaticComp extends Component {
    static Call() {
        window.alert('call')
    }
    render() {
        return (
            <div>
                Hello...{this.props.counter}
                <br />
                <button onClick={this.props.increaseCounterCallback}>Increase Counter</button>
                <br />
                <button onClick={this.props.staticMethod}>Click</button>
            </div>
        )
    }
}
export default withCounter(StaticComp);

